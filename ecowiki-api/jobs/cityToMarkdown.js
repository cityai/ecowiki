const fs = require("fs");
const path = require("path");

const _ = require("underscore");

const City = require("../models/city");
const Community = require("../models/community");
const Organization = require("../models/organization");

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
                city.startups = _.sortBy(city.startups, "investment").reverse();
                console.log(__dirname, process.cwd());
                const filePath = path.join(process.cwd(), "content", location.toLowerCase().replace(/ /g, "-"), "home.md");
                const dirPath = path.join(process.cwd(), "content", location.toLowerCase().replace(/ /g, "-"));
                const templatePath = "./data/cityTemplate.md";
                const CommunityTemplate = "./data/communitiesTemplate.md";
                const eventsTemplate = "./data/global-eventsTemplate.md"

                await fs.readFile(CommunityTemplate, async (err, data) => {
                    if (err) return console.log(err);
                    data = data.toString().split("\n");
                    if (community) {
                        data = this.addMultipleLines(data, community, "groups", community.groups.length, "<div class=groups>", ["name", "members", "category", "organizer"]);
                        data = this.addMultipleLines(data, community, "influencers", community.influencers.length, "<div class=influencers>", ["name", "followers"]);
                    }
                    await fs.writeFile(dirPath + "/community.md", "", async err => {
                        if (err) return console.log(err);
                        for (let i = 0; i < data.length; i++)
                            fs.appendFileSync(dirPath + "/community.md", data[i] + "\n");
                        console.log("Groups and influencers are converted into markdown!")

                    })
                })

                await fs.readFile(eventsTemplate, async (err, data) => {
                    if (err) return console.log(err);
                    data = data.toString().split("\n");
                    if (city.events) {
                        let futEvents = 0;
                        let pastEvents = 0;

                        for (let i = 0; i < city.events.length; i++) {

                            if (city.events[i].date.getTime() > Date.now())
                                futEvents += 1;
                            else
                                pastEvents += 1;
                        }

                        data.splice(3, 0, "\n For this AI ecosystem there are currently " + futEvents + " future events that you can participate in, and " + pastEvents +
                            " events that have already been organized \n");


                        data = this.addMultipleLines(data, city, "events", city.events.length, "<div class=events>", ["name", "date", "location", "organizer", "description"])
                    }
                    await fs.writeFile(dirPath + "/events.md", "", async err => {
                        if (err) return console.log(err);
                        for (let i = 0; i < data.length; i++)
                            fs.appendFileSync(dirPath + "/events.md", data[i] + "\n");
                        console.log("Events are converted into markdown!")

                    })
                })

                await fs.readFile(filePath, async (err, data) => {
                    if (err) return console.log(err);
                    data = data.toString().split("\n");
                    city = await this.analyzePage(data, city);
                    await this.analyzeOrgs(data, city);
                })
                await fs.readFile(templatePath, async (error, data) => {
                    if (error) return console.log(error);

                    data = data.toString().split("\n");
                    //console.log(city);
                    data = this.addMetrics(data,city,community);
                    data.splice(0, 0, "<!-- TITLE: " + city.name + " AI -->");
                    data = this.addOneLine(data, city, "overview", "<div class=overview>");
                    if (city.startups)
                        data = this.addMultipleLines(data, city, "startups", 3, "<div class=startups>", ["name", "categories", "investment", "description", "link"]);
                    if (city.events)
                        data = this.addMultipleLines(data, city, "events", 5, "<div class=events>", ["name", "date", "location", "organizer"])
                    if (city.organizations)
                        data = this.addMultipleLines(data, city, "organizations", 5, "<div class=organizations>", ["name", "category", "founder", "link", "description"]);
                    if (community) {
                        data = this.addMultipleLines(data, community, "groups", 5, "<div class=groups>", ["name", "members", "category", "organizer"]);
                        data = this.addMultipleLines(data, community, "influencers", 5, "<div class=influencers>", ["name", "followers"]);

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
    addOneLine(data, document, docObj, setctionText) {
        let index = data.indexOf(setctionText);
        index++;
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
        for (let i = 0; i < n; i++) {
            //There is no data for particular part of the city (e.g no news yet, no organizations...)
            if (document[docObj].length < 1) continue;

            for (let j = 0; j < attributesArray.length; j++) {

                switch (attributesArray[j]) {
                    case "name":
                        if (docObj === "influencers" || docObj === "events") {
                            data.splice(index, 0, "[" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i]["link"] + ")");
                            index++;
                        }
                        else {
                            data.splice(index, 0, "#### " + document[docObj][i][attributesArray[j]]);
                            index++;
                        }
                        break;
                    case "followers":
                        data.splice(index, 0, "**Followers:** " + document[docObj][i][attributesArray[j]]);
                        index++;
                        break;
                    case "link":
                        if (docObj == "organizations") {
                            data.splice(index, 0, document[docObj][i][attributesArray[j]]);
                            index++;
                        }
                        else {
                            data.splice(index, 0, "Link: [" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i][attributesArray[j]] + ")");
                            index++;
                        }
                        break;
                    case "description":
                        if (!document[docObj][i][attributesArray[j]])
                            document[docObj][i][attributesArray[j]] = "No description provided";
                        data.splice(index, 0, "**Description:** " + document[docObj][i][attributesArray[j]].substring(0, 150).replace(/(\r\n|\n|\r)/gm, " ") + "...");
                        index++;
                        break;
                    case "members":
                        data.splice(index, 0, "**Members:** " + document[docObj][i][attributesArray[j]])
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
                        data.splice(index, 0, "**Organizer:** " + document[docObj][i][attributesArray[j]].toString());
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

    async analyzePage(data, city) {
        let overview = "";
        let index = data.indexOf("<div class=overview>") + 1;
        if (index > 1) {
            for (; index < data.indexOf("</div>"); index++)
                overview += data[index] + " ";
            if (city.overview !== overview) {
                city.overview = overview.trim();
                await City.updateOne({ name: city.name }, { $set: { overview: city.overview } }, { new: true });
            }
        }

        return city;
    }

    addMetrics(data, city, community) {
        let indexState = data.indexOf("<div class=status>") + 1;
        if (indexState > 1 && city && community) {
            let status = "\nAt this AI Ecosystem you can check out <strong>" + city.events.length + "</strong> AI related events in which you can participate. If you want to get in contact with global AI community" +
                ", you can find <strong>" + community.influencers.length + "</strong> AI influencers and <strong>" + community.groups.length + "</strong> community groups. Also, see the work and get information" +
                " about <strong>" + city.startups.length + "</strong> startups that create interesting projects using AI. Also there are <strong>" + city.organizations.length + "</strong> AI related local organizations!\n";
            data.splice(indexState, 0, status);
        }
        return data;
    }

    async analyzeOrgs(data, city) {
        let index = data.indexOf('<div class=organizations>');
        if (index > 1) {
            let startIndex = index;
            while (data[index] !== '</div>')
                index++;
            let orgsData = data.slice(startIndex, index);
            for (let i = 0; i < orgsData.length; i++) {
                try {

                    if (orgsData[i].includes('#### ')) {
                        let orgName = orgsData[i].substring(5).trim();
                        let org = await Organization.findOne({ name: orgName });
                        if (!org) {
                            const organization = new Organization({
                                name: orgName,
                                category: orgsData[i + 1].trim(),
                                founder: orgsData[i + 2].substring(14).trim(),
                                link: orgsData[i + 3].trim(),
                                description: orgsData[i + 4].substring(16).trim(),
                                location: city.name,
                            });
                            await organization.save();
                            i = i + 4;
                        }
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }
        }

    }
}

module.exports = new MarkdownTransform();