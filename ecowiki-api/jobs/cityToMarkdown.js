const fs = require("fs");
const path = require("path");

const City = require("../models/city");
const Community = require("../models/community");

class MarkdownTransform {

    async toMarkdown(location) {
        City.findOne({ name: location }).populate('startups').populate('events').populate('community').exec().then(async city => {
            const community = await Community.findById(city.community);
            const filePath = path.join(__dirname, "..", "..", "ecowiki", "content", location.toLowerCase(), "home.md");
            const templatePath = path.join(__dirname, "..", "..", "ecowiki", "content", "cityTemplate.md");

            fs.readFile(templatePath, (error, data) => {
                if (error) throw error;

                data = data.toString().split("\n");
                data.splice(0, 0, "<!-- TITLE: " + location + " AI -->");

                data = this.addMultipleLines(data, city, "startups", 3, "<div class=startups>", ["name", "categories", "investment", "description", "link"]);
                data = this.addMultipleLines(data, city, "events", 5, "<div class=events>", ["name", "date", "location", "organizer", "description"])
                data = this.addMultipleLines(data, city, "organizations", 5, "<div class=organizations>", ["name"]);
                data = this.addMultipleLines(data, community, "groups", 5, "<div class=groups>", ["name", "members", "category", "organizer", "description"]);
                data = this.addMultipleLines(data, community, "influencers", 5, "<div class=influencers>", ["name", "link"]);
                fs.writeFileSync(filePath, "");
                for (let i = 0; i < data.length; i++)
                    fs.appendFileSync(filePath, data[i] + "\n");
            })

        })
        //const community = await Community.findById(city.community);

        //const community = city.community;
        // const filePath = path.join(__dirname,"..","..","ecowiki","content",location.toLowerCase(),"home.md");
        // const templatePath = path.join(__dirname,"..","..","ecowiki","content","cityTemplate.md");

        // fs.readFile(templatePath,(error,data)=>{
        //     if(error) throw error;

        //     data = data.toString().split("\n");
        //     data.splice(0,0,"<!-- TITLE: " + location + " AI -->");

        //     data = this.addMultipleLines(data,city,"startups",3,"<div class=startups>",["name","categories","investment","description","link"]);
        //     data = this.addMultipleLines(data,city,"events",5,"<div class=events>",["name","date","location","organizer","description"])
        //     data = this.addMultipleLines(data,city,"organizations",5,"<div class=organizations>",["name"]);
        //     data = this.addMultipleLines(data,community,"groups",5,"<div class=groups>",["name","members","category","organizer","description"]);
        //     data = this.addMultipleLines(data,community,"influencers",5,"<div class=influencers>",["name","link"]);
        //     fs.writeFileSync(filePath,"");
        //     for(let i =0;i<data.length;i++)
        //         fs.appendFileSync(filePath,data[i]+"\n");
        // })
    }

    addMultipleLines(data, document, docObj, n, setctionText, attributesArray) {
        // data = data.toString().split("\n");
        let index = data.indexOf(setctionText);
        index++;
        data.splice(index, 0, "");
        index++;
        for (let i = 0; i < n; i++) {
            //There is no data for particular part of the city (e.g no news yet, no organizations...)
            if (document[docObj].length < 1) continue;

            for (let j = 0; j < attributesArray.length; j++) {

                switch (attributesArray[j]) {
                    case "name":
                        data.splice(index, 0, "#### " + document[docObj][i][attributesArray[j]] );
                        index++;
                        break;
                    case "link":
                        data.splice(index, 0, "[" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i][attributesArray[j]] + ")");
                        index++;
                        break;
                    case "description":
                        if (!document[docObj][i][attributesArray[j]])
                            document[docObj][i][attributesArray[j]] = "No description provided";
                        data.splice(index, 0, "**Description:** " + document[docObj][i][attributesArray[j]].replace(/(\r\n|\n|\r)/gm, " "));
                        index++;
                        break;
                    case "members":
                        data.splice(index, 0, "**Number of members:** " + document[docObj][i][attributesArray[j]])
                        index++;
                        break;
                    case "investment":
                        data.splice(index, 0, "**Investment in USD** " + document[docObj][i][attributesArray[j]])
                        index++;
                        break;
                    case "categories":
                        if (document[docObj][i][attributesArray[j]]) {
                            data.splice(index, 0, document[docObj][i][attributesArray[j]].toString().replace(/,/g, ", "));
                            index++;
                        }
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
}

module.exports = new MarkdownTransform();