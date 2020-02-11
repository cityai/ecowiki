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
        let statusStory = "<div class=column>\n<a href=\"#ecosystems\"><strong>" + cities.length + "</strong></a>\n</div>\n<div class=column>\n<a href=\"#events\" ><strong>"+ events.length+"</strong></a>"+
        "\n</div>\n<div class=column>\n<a href=\"#community\" ><strong>"+ influencers.length +"</strong></a>\n</div>\n<div class=column>\n<a href=\"#startups\" ><strong>"+ startups.length +"</a></strong>"+ 
        "\n</div>\n<div class=column>\n<a href=\"#community\" ><strong>"+ groups.length +"</a></strong>\n</div>\n</div>\n<div class=status>\n<div class=column>CITIES</div>"+
        "\n<div class=column>EVENTS</div>\n<div class=column>INFLUENCERS</div>\n<div class=column>STARTUPS</div>\n<div class=column>GROUPS</div>"+ "</div>";
        let statusIndex = data.indexOf("<div class=status>") + 1;
        data.splice(statusIndex,0,statusStory);

        data = MarkdownConvertor.addMultipleLinesFromArray(data,startups,12,"<div class=startups>",["picture", "name","categories","investment", "location"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,influencers,12,"<div class=influencers>", ["name", "location"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,groups,12,"<div class=groups>", ["name", "location", "members", "organizer"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,events,12,"<div class=events>", ["name", "date", "location", "organizer"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,organizations,12,"<div class=organizations>", ["name","location", "category", "founder", "link"]);
        data = MarkdownConvertor.addMultipleLinesFromArray(data,cities,cities.length,'<div class=ecosystems>',["cityLink"]);

        let subheadingIndex = data.indexOf("# Ecosystems") + 1;
        let subheadingTextEcosystems = "Check any of the " + cities.length + " unloked AI ecosystems. If yours isn't listed yet, [contact us](mailto:aiwiki@city.ai)"; 
        data.splice(subheadingIndex,0, subheadingTextEcosystems);

        subheadingIndex = data.indexOf("# Events")+ 1;
        let subheadingTextEvents =  events.length + " upcoming AI-related events. In past "+ pastEvents +" events have been hosted"
        data.splice(subheadingIndex,0,subheadingTextEvents);

        subheadingIndex = data.indexOf("# Communities") + 1;
        let subheadingTextCommunity = "Connect with " +groups.length+" community groups promoting the best practices in AI. These are the top 12 communities from all the cities!"
        data.splice(subheadingIndex,0,subheadingTextCommunity);

        subheadingIndex = data.indexOf("# Startups") + 1;
        let subheadingTextStartups = "Explore the newest startups working with AI technologies, from a total of "+ startups.length+" companies." 
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
