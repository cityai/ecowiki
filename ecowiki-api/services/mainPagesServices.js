const Influencer = require('../models/influencer');
const Group = require('../models/group');
const Startup = require('../models/startup');
const Event = require('../models/event');
const Organization = require('../models/organization');
const ExtError = require('../util/error/extError');
const MarkdonwConvertor = require('../util/markdownConvertor');

const _ = require('underscore');
const path = require('path');
const fs = require("fs");

class MainPagesServices{
    async startupsToMarkdown(){
        let startups = await Startup.find({});
        startups = _.sortBy(startups,'investment').reverse();


        const filePath = path.join(process.cwd(),"content", "main", "startups.md");
        const dirPath = path.join(process.cwd(), "content","main");
        const templatePath = "./data/startupsTemplate.md";
        await fs.readFile(templatePath,async (error,data)=>{
            if (error) throw error;

            data = data.toString().split("\n");
            data = MarkdonwConvertor.addMultipleLinesFromArray(data,startups,100,"<div class=startups>",["name","categories","investment","description","link"])
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
        return startups;
        
    }

    async communitiesToMarkdown(){
        let influencers = await Influencer.find({});
        let groups = await Group.find({});

        const filePath = path.join(process.cwd(),"content", "main", "communities.md");
        const dirPath = path.join(process.cwd(), "content","main");
        const templatePath = "./data/communitiesTemplate.md";
        await fs.readFile(templatePath,async (error,data)=>{
            if (error) throw error;

            data = data.toString().split("\n");
            data = MarkdonwConvertor.addMultipleLinesFromArray(data,groups,100,"<div class=groups>",["name", "members", "category", "organizer", "description"]);
            data = MarkdonwConvertor.addMultipleLinesFromArray(data,influencers,100,"<div class=influencers>", ["name", "link"]);

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
        return groups;
    }

    async eventsToMarkdown(){
        let events = await Event.find({});
        events = _.sortBy(events,"date");
        const filePath = path.join(process.cwd(),"content", "main", "global-events.md");
        const dirPath = path.join(process.cwd(), "content","main");
        const templatePath = "./data/global-eventsTemplate.md";
        await fs.readFile(templatePath,async (error,data)=>{
            if (error) throw error;

            data = data.toString().split("\n");
            data = MarkdonwConvertor.addMultipleLinesFromArray(data,events,100,"<div class=events>", ["name", "date", "location", "organizer", "description", "link"]);
            
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
        return events;
    }

    async organizationsToMarkdown(){
        let organizations = await Organization.find({});
        organizations = _.sortBy(organizations,"name");
        
        const filePath = path.join(process.cwd(),"content", "main", "global-events.md");
        const dirPath = path.join(process.cwd(), "content","main");
        const templatePath = "./data/global-eventsTemplate.md";
        await fs.readFile(templatePath,async (error,data)=>{
            if (error) throw error;

            data = data.toString().split("\n");
            data = MarkdonwConvertor.addMultipleLinesFromArray(data,organizations,100,"<div class=organizations>", ["name"]);
            
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
        return organizations;
    }
}

module.exports = new MainPagesServices();