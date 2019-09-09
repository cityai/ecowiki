const fs = require("fs");
const path = require("path");

const _ = require("underscore");

const City = require("../models/city");
const Community = require("../models/community");

class MarkdownTransform {

    async toMarkdown() {
        console.log(__dirname,process.cwd());

        const cities = await City.find({}).select("name -_id")
        console.log(cities);
        for (var i = 0; i < cities.length; i++) {
            var location = cities[i].name;
            await City.findOne({ name: location }).populate('startups').populate('events')/*.populate('community')*/.exec().then(async city => {
                const community = await Community.findById(city.community).populate("influencers").populate("groups").exec().then(community => { return community });
                //console.log(city)
                //SORTING
                if(community)
                    community.groups = _.sortBy(community.groups, "members").reverse();
                city.events = _.sortBy(city.events, "date");
                city.startups = _.sortBy(city.startups, "investment").reverse();
                console.log(__dirname,process.cwd());
                const filePath = path.join(process.cwd(), "content", location.toLowerCase().replace(/ /g,"-"), "home.md");
                const dirPath = path.join(process.cwd(), "content", location.toLowerCase().replace(/ /g,"-"));
                const templatePath = "./data/cityTemplate.md"
                //THIS IS USED AS TEMPLATE PATH IN DEVELOPMENT ENVIORMENT
                //path.join(__dirname, "..", "..", "ecowiki", "content", "cityTemplate.md");
                
                await fs.readFile(filePath,async(err,data)=>{
                    if (err) throw err
                    data = data.toString().split("\n");
                    city =await  this.analyzePage(data,city);
                })
                await fs.readFile(templatePath, async (error, data) => {
                    if (error) throw error;

                    data = data.toString().split("\n");
                    //console.log(city);
                    data.splice(0, 0, "<!-- TITLE: " + city.name + " AI -->");
                    data = this.addOneLine(data,city,"overview","<div class=overview>");
                    if(city.startups)
                        data = this.addMultipleLines(data, city, "startups", 3, "<div class=startups>", ["name", "categories", "investment", "description", "link"]);
                    if(city.events)
                        data = this.addMultipleLines(data, city, "events", 5, "<div class=events>", ["name", "date", "location", "organizer", "description", "link"])
                    if(city.organizations)
                        data = this.addMultipleLines(data, city, "organizations", 5, "<div class=organizations>", ["name"]);
                    if(community){
                        data = this.addMultipleLines(data, community, "groups", 5, "<div class=groups>", ["name", "members", "category", "organizer", "description"]);
                        data = this.addMultipleLines(data, community, "influencers", 5, "<div class=influencers>", ["name", "link"]);
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

            })
        }
    }
    addOneLine(data,document,docObj,setctionText){
        let index = data.indexOf(setctionText);
        index ++;
        if(document[docObj]){
            data.splice(index,0,"");
            index++;
            data.splice(index,0,document[docObj]);
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
        if(n>document[docObj].length)
            n=document[docObj].length;
        for (let i = 0; i < n; i++) {
            //There is no data for particular part of the city (e.g no news yet, no organizations...)
            if (document[docObj].length < 1) continue;

            for (let j = 0; j < attributesArray.length; j++) {

                switch (attributesArray[j]) {
                    case "name":
                        data.splice(index, 0, "#### " + document[docObj][i][attributesArray[j]]);
                        index++;
                        break;
                    case "link":
                        data.splice(index, 0, "Link: [" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i][attributesArray[j]] + ")");
                        index++;
                        break;
                    case "description":
                        if (!document[docObj][i][attributesArray[j]])
                            document[docObj][i][attributesArray[j]] = "No description provided";
                        data.splice(index, 0, "**Description:** " + document[docObj][i][attributesArray[j]].substring(0, 150).replace(/(\r\n|\n|\r)/gm, " ") + "...");
                        index++;
                        break;
                    case "members":
                        data.splice(index, 0, "**Number of members:** " + document[docObj][i][attributesArray[j]])
                        index++;
                        break;
                    case "investment":
                        data.splice(index, 0, "**Investment in USD:** " + document[docObj][i][attributesArray[j]].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
                        index++;
                        break;
                    case "categories":
                        if (document[docObj][i][attributesArray[j]]) {
                            data.splice(index, 0, document[docObj][i][attributesArray[j]].toString().replace(/,/g, ", "));
                            index++;
                        }
                        break;
                    case "date":
                        data.splice(index, 0, "##### " + document[docObj][i][attributesArray[j]].toString().substring(0, 15));
                        index++;
                        break;
                    case "organizer":
                        data.splice(index, 0, "**Organizer:** " + document[docObj][i][attributesArray[j]].toString().substring(0, 15));
                        index++;
                        break;
                    default:
                        data.splice(index, 0, document[docObj][i][attributesArray[j]]);
                        index++;

                }

            }
            data.splice(index, 0, "");
            index++;
        }
        return data;
    }

    async analyzePage(data,city){
        let overview = "";
        let index = data.indexOf("<div class=overview>") + 1;
        for(;index<data.indexOf("</div>");index++)
            overview +=data[index] +" ";
        if(city.overview !== overview){
            city.overview = overview.trim();
            await City.updateOne({name:city.name},{$set:{overview:city.overview}},{new:true});
        }
        return city;
    }
}

module.exports = new MarkdownTransform();