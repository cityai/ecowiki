const fs = require("fs");
const path = require("path");

const _ = require("underscore");

const City = require("../models/city");
const Community = require("../models/community");

class MarkdownTransform {

    async toMarkdown() {
        console.log(__dirname, process.cwd());

        const cities = await City.find({}).select("name -_id")
       
        console.log(cities);
        for (var i = 0; i < cities.length; i++) {
            var location = cities[i].name;
            await City.findOne({ name: location }).populate('startups').populate('organizations').populate('events')/*.populate('community')*/.exec().then(async city => {
                const community = await Community.findById(city.community).populate("influencers").populate("groups").exec().then(community => { return community }).catch(err => { return console.log(err) });

                //SORTING
                if (community)
                    community.groups = _.sortBy(community.groups, "members").reverse();
                city.events = _.sortBy(city.events, "date");
                try{
                    while(city.events[0].date.getTime() < Date.now())
                    {
                        city.events.shift();
                    }
                }
                catch(e){
                    console.log(e);
                }
                city.startups = _.sortBy(city.startups, "investment").reverse();
                console.log(__dirname, process.cwd());
                const filePath = path.join(process.cwd(), "content", location.toLowerCase().replace(/ /g, "-"), "home.md");
                const dirPath = path.join(process.cwd(), "content", location.toLowerCase().replace(/ /g, "-"));
                const templatePath = "./data/cityTemplate.md";

                
                await fs.readFile(templatePath, async (error, data) => {
                    if (error) return console.log(error);

                    data = data.toString().split("\n");
                    //console.log(city);
                    data = this.addSubheadings(data,city,community);
                    data = this.addCityMaps(data,city);

                    data = this.addMetrics(data,city,community);
                    data.splice(0, 0, "<!-- TITLE: " + city.name + " AI -->");
                    data = this.addOneLine(data, city, "overview", "<div class=overview>");
                    
                    try {
                        let subheadingIndex = data.indexOf("# Ecosystems") + 1;
                        let subheadingTextEcosystems = "Check any of the " + cities.length + " unloked AI ecosystems. If yours isn't listed yet, [contact us](mailto:aiwiki@city.ai)"; 
                        let index = data.indexOf("<div class=ecosystems>") + 1;
                        data.splice(subheadingIndex,0, subheadingTextEcosystems);
                        console.log(cities);
                        if(index > 0)
                        {
                            for(let i = 0;i<cities.length;i++)  data.splice(index, 0, "\n[" + cities[i].name + "](/" + cities[i].name.toString().toLowerCase().replace(/ /g, "-") + "/home)\n");
                        }
                    } catch (error) {
                        console.log(error);
                    }
                    
                    if (city.startups)
                        data = this.addMultipleLines(data, city, "startups", 12, "<div class=startups>", ["picture", "name", "categories", "investment", "location"]);
                        data = this.addMultipleLines(data, city, "startups", city.startups.length, "<div class=startups id=\"list\">", ["picture", "name", "categories", "investment", "location"]);
                    if (city.events){
                        data = this.addMultipleLines(data, city, "events", 12, "<div class=events>", ["name", "date", "location", "organizer"])
                        data = this.addMultipleLines(data, city, "events",city.events.length,"<div class=events id=\"list\">",["name", "date", "location", "organizer"]);
                    }
                        if (city.organizations)
                        data = this.addMultipleLines(data, city, "organizations", 12, "<div class=organizations>", ["name","location", "category", "founder", "link"]);
                        data = this.addMultipleLines(data, city, "organizations", city.organizations.length, "<div class=organizations id=\"list\">", ["name", "category", "founder", "link"]);
                    if (community) {
                        data = this.addMultipleLines(data, community, "groups", 12, "<div class=groups>", ["name", "members", "organizer"]);
                        data = this.addMultipleLines(data, community, "groups", community.groups.length, "<div class=groups id=\"list\">", ["name", "members", "organizer"]);
                        data = this.addMultipleLines(data, community, "influencers", 12, "<div class=influencers>", ["name","location"]);
                        data = this.addMultipleLines(data, community, "influencers", community.influencers.length, "<div class=influencers id=\"list\">", ["picture","name", "followers","location"]);
                    }
                    await fs.writeFile(filePath, "", async err => {
                        if (err) await fs.mkdir(dirPath, err => {
                            if (err) return console.log(err);
                            else {
                                fs.writeFileSync(filePath, "");
                                for (let i = 0; i < data.length; i++)
                                    fs.appendFileSync(filePath, data[i] + "\n");
                                return;
                            }
                        })
                        else {
                            for (let i = 0; i < data.length; i++)
                                fs.appendFileSync(filePath, data[i] + "\n");
                            console.log("Data is converted into markdown!")
                        }
                    })

                })


            }).catch(err => { return console.log(err) })
        }
    }
    addCityMaps(data,city){
        try {
            let index = data.indexOf("<div class=mapHighlight>")+1;

            data.splice(index,0,"<img src=\"/images/cityMaps/"+ city.name +"_1500_highlight.png\">");

        } catch (error) {
            console.log(error);
        }
            return data;
    }
    addSubheadings(data,city,community)
    {
        try {
            let subheadingIndex = data.indexOf("# Community") + 1;
            let subheadingText = "Connect with " + community.groups.length + " community groups promoting the best practices in AI."
            data.splice(subheadingIndex,0,subheadingText);

            subheadingIndex = data.indexOf("# Events") + 1;
            subheadingText = city.events.length + " upcoming AI-related events.";
            data.splice(subheadingIndex,0,subheadingText);

            subheadingIndex = data.indexOf("# Startups") + 1;
            subheadingText = "Explore the newest startups working with AI technologies, from a total of "+ city.startups.length +" companies.";

            data.splice(subheadingIndex,0,subheadingText);

        } catch (error) {
            console.log(error);
        }
            return data;
    }

    addOneLine(data, document, docObj, setctionText) {
        let index = data.indexOf(setctionText);
        index++;
	console.log("IM HERE");
        if (document[docObj]) {
            data.splice(index, 0, "");
            index++;
            data.splice(index, 0, document[docObj]);
            index++;
        }
        return data;
    }

    addMultipleLines(data, document, docObj, n, setctionText, attributesArray) {
        // data = data.toString().split("\n");
        let index = data.indexOf(setctionText);
        index++;
        data.splice(index, 0, "");
        index++;
        if (n > document[docObj].length)
            n = document[docObj].length;
        //If it is list that we are writing, don't write the first 12 of the section (because it's already up)
        let k = setctionText.includes("id=\"list\"") ? 12 : 0;
        for (let i = k; i < n; i++) {
            //There is no data for particular part of the city (e.g no news yet, no organizations...)
            if (document[docObj].length < 1){
                data.splice(index,0,"This section can be updated by the local ambassador. For contact information see the About section of this page");
                continue;
                }
            let tempIndex = data.indexOf("<div class=column id=" + i%4 + ">", index)+1;
            tempIndex = data.indexOf("</div>",tempIndex)-1;
            data.splice(tempIndex, 0, "");
            tempIndex++;
            for (let j = 0; j < attributesArray.length; j++) {

                switch (attributesArray[j]) {
                    case "name":
                        if (docObj === "influencers" || docObj === "events" || docObj === "startups" || docObj === "groups") {
                            data.splice(tempIndex, 0, "[" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i]["link"] + ")");
                            tempIndex++;
                        }
                        else {
                            data.splice(tempIndex, 0, "#### " + document[docObj][i][attributesArray[j]]);
                            tempIndex++;
                        }
                        break;
                    case "followers":
                        data.splice(tempIndex, 0, "**Followers:** " + document[docObj][i][attributesArray[j]]);
                        tempIndex++;
                        break;
                    case "link":
                            if(docObj === "organizations")
                                data.splice(tempIndex, 0, "**Website:** [" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i][attributesArray[j]] + ")");
                            else data.splice(tempIndex, 0, "**Link:** [" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i][attributesArray[j]] + ")");
                            tempIndex++;
                        break;
                    case "picture":
                        data.splice(tempIndex, 0, "![" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i][attributesArray[j]] + ")");
                        tempIndex++;
                        break;
                    case "description":
                        if (!document[docObj][i][attributesArray[j]])
                            document[docObj][i][attributesArray[j]] = "No description provided";
                        data.splice(tempIndex, 0, "**Description:** " + document[docObj][i][attributesArray[j]].substring(0, 150).replace(/(\r\n|\n|\r)/gm, " ") + "...");
                        tempIndex++;
                        break;
                    case "members":
                        data.splice(tempIndex, 0, "**Members:** " + document[docObj][i][attributesArray[j]])
                        tempIndex++;
                        break;
                    case "investment":
                        data.splice(tempIndex, 0, "**Investment in USD:** " + document[docObj][i][attributesArray[j]].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
                        tempIndex++;
                        break;
                    case "categories":
                        if (document[docObj][i][attributesArray[j]]) {
                            data.splice(tempIndex, 0, "**Activity:** " + document[docObj][i][attributesArray[j]].toString().replace(/,/g, ", "));
                            tempIndex++;
                        }
                        break;
                    case "category":
                        if (document[docObj][i][attributesArray[j]]) {
                            data.splice(tempIndex, 0, "**Categories:** " + document[docObj][i][attributesArray[j]].toString().replace(/,/g, ", "));
                            tempIndex++;
                        }
                        break;
                    case "date":
                        data.splice(tempIndex, 0, "##### " + document[docObj][i][attributesArray[j]].toString().substring(0, 15));
                        tempIndex++;
                        break;
                    case "organizer":
                        data.splice(tempIndex, 0, "**Organizer:** " + document[docObj][i][attributesArray[j]].toString());
                        tempIndex++;
                        break;
                    case "founder":
                        data.splice(tempIndex, 0, "**Founded by:** " + document[docObj][i][attributesArray[j]].toString());
                        tempIndex++;
                        break;
                    case "location":
                        // data.splice(tempIndex, 0, "**Location:** " + document[docObj][i][attributesArray[j]].toString());
                        data.splice(tempIndex, 0, "**Location:** [" + document[docObj][i][attributesArray[j]].toString() + "](/" + document[docObj][i][attributesArray[j]].toString() + "/home/)");

                        tempIndex++;
                        break;
                    default:
                        data.splice(tempIndex, 0, document[docObj][i][attributesArray[j]]);
                        tempIndex++;

                }

            }
            data.splice(tempIndex, 0, "");
            tempIndex++;
        }
        return data;
    }

    addMetrics(data, city, community) {
        let indexState = data.indexOf("<div class=status>") + 1;
        if (indexState > 1 && city && community) {
            let statusStory = "<div class=column>\n<a href=\"#ecosystems\"><strong>" + this.numberOfMembers(community) + "</strong></a>\n</div>\n<div class=column>\n<a href=\"#events\" ><strong>"+city.events.length+"</strong></a>"+
        "\n</div>\n<div class=column>\n<a href=\"#community\" ><strong>"+ community.influencers.length +"</strong></a>\n</div>\n<div class=column>\n<a href=\"#startups\" ><strong>"+city.startups.length +"</a></strong>"+ 
        "\n</div>\n<div class=column>\n<a href=\"#community\" ><strong>"+ community.groups.length +"</a></strong>\n</div>\n</div>\n<div class=status>\n<div class=column>MEMBERS</div>"+
        "\n<div class=column>EVENTS</div>\n<div class=column>INFLUENCERS</div>\n<div class=column>STARTUPS</div>\n<div class=column>GROUPS</div>"+ "</div>";
            data.splice(indexState, 0, statusStory);
        }
        return data;
    }

    numberOfMembers(community){
        if(community.groups)
        {
            let mem = 0;
            for(let i =0;i<community.groups.length;i++)
                mem+= community.groups[i].members;
            return Math.round(mem*40/100);
        }
        else return 0;
    }
}

module.exports = new MarkdownTransform();
