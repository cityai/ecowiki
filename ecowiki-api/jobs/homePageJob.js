const Influencer = require('../models/influencer');
const City = require('../models/city');
const Group = require('../models/group');
const Startup = require('../models/startup');
const Event = require('../models/event');
const Organization = require('../models/organization');
const ExtError = require('../util/error/extError');
const MarkdownConvertor = require('../util/markdownConvertor');

const _ = require('underscore');
const path = require('path');
const fs = require("fs");

module.exports =async function(){
    let startups = await Startup.find({});
    let events = await Event.find({});
    let cities = await City.aggregate([{'$project':{"_id":0,"cityLink":"$name"}}]);
    let influencers = await Influencer.find({});
    let organizations = await Organization.find({});
    let groups = await Group.find({});

    const filePath = path.join(process.cwd(),"content", "home.md");
    const dirPath = path.join(process.cwd(), "content","main");
    const templatePath = "./data/homePageTemplate.md";

    //SORTING
    cities = _.sortBy(cities,"name");
    startups = _.sortBy(startups,"investment").reverse();
    events = _.sortBy(events,"members");


    await fs.readFile(templatePath,async (error,data)=>{
        if (error) throw error;
        data = data.toString().split("\n");
        console.log(cities)
        console.log(data.indexOf("### A - Z"))
        let statusStory = "\nAt WikiAI you can check <strong>" + cities.length + "</strong> active ecosystems, and you can find everything related to AI." +
        " You can check out <strong>" + events.length + "</strong> AI related events in which you can participate. If you want to get in contact with global AI community" +
        ", you can find <strong>" + influencers.length + "</strong> AI influencers and <strong>" + groups.length + "</strong> community groups. Also, see the work and get information" + 
        " about <strong>" + startups.length + "</strong> startups that create interesting projects using AI";
        let statusIndex = data.indexOf("<div class=status>") + 1;
        data.splice(statusIndex,0,statusStory);

        data = MarkdownConvertor.addMultipleLinesFromArray(data,startups,5,"<div class=startups>",["name","categories","investment","description","link"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,influencers,5,"<div class=influencers>", ["name", "followers"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,events,5,"<div class=events>", ["name", "date", "location", "organizer"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,organizations,5,"<div class=organizations>", ["name"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,cities,cities.length,'# Ecosystems',["cityLink"]);
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
    });
    console.log("Home page converted to markdown!");
}