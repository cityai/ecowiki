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
    cities = _.sortBy(cities,"cityLink").reverse();
    startups = _.sortBy(startups,"investment").reverse();
    events = _.sortBy(events,"date");
    groups = _.sortBy(groups, "members").reverse();

    let pastEvents = 0;
    try{
        while(events[0].date.getTime() < Date.now())
        {
            pastEvents = pastEvents + 1;
            events.shift();
        }
    }
    catch(e){
        console.log(e);
    }

    await fs.readFile(templatePath,async (error,data)=>{
        if (error) throw error;
        data = data.toString().split("\n");
        console.log(cities)
        console.log(data.indexOf("### A - Z"))
        let statusStory = "\nAt WikiAI you can check <a href=\"#ecosystems\"><strong> " + cities.length + "</strong></a> active ecosystems, and you can find everything related to AI.\n" +
        "You can check out <a href=\"#events\" ><strong>" + events.length + "</strong></a> AI related events in which you can participate.\nIf you want to get in contact with global AI community" +
        ", you can find <a href=\"#community\" ><strong>" + influencers.length + "</strong></a> AI influencers and <strong>" + groups.length + "</strong> community groups.\nAlso, see the work and get information" + 
        " about <a href=\"#startups\" ><strong>" + startups.length + "</a></strong> startups that create interesting projects using AI";
        let statusIndex = data.indexOf("<div class=status>") + 1;
        data.splice(statusIndex,0,statusStory);

        data = MarkdownConvertor.addMultipleLinesFromArray(data,startups,10,"<div class=startups>",["name","categories","investment", "location"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,influencers,10,"<div class=influencers>", ["name", "followers", "location"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,groups,10,"<div class=groups>", ["name", "members", "organizer", "location"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,events,10,"<div class=events>", ["name", "date", "location", "organizer"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,organizations,10,"<div class=organizations>", ["name", "category", "founder", "link"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,cities,cities.length,'<div class=ecosystems>',["cityLink"]);

        let subheadingIndex = data.indexOf("# Ecosystems") + 1;
        let subheadingTextEcosystems = "Check any of the " + cities.length + " unloked AI ecosystems. If yours isn't listed yet, [contact us](mailto:aiwiki@city.ai)"; 
        data.splice(subheadingIndex,0, subheadingTextEcosystems);

        subheadingIndex = data.indexOf("# Events")+ 1;
        let subheadingTextEvents = " You can join more then " + events.length +" upcoming events in "+ cities.length + " cities around the world the coming weeks. In past "+ pastEvents +" events have been hosted"
        data.splice(subheadingIndex,0,subheadingTextEvents);

        subheadingIndex = data.indexOf("# Top Communities") + 1;
        let subheadingTextCommunity = "Globally you can join "+ groups.length + " active community groups in "+ cities.length +" unlocked cities on the topic of Artificial Intelligence"
        data.splice(subheadingIndex,0,subheadingTextCommunity);

        subheadingIndex = data.indexOf("# Startups") + 1;
        let subheadingTextStartups = "Check the newest startups from " + startups.length + " globally, coming out of "+ cities.length +" unlocked AI ecosystems!"
        data.splice(subheadingIndex,0,subheadingTextStartups);
        
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
