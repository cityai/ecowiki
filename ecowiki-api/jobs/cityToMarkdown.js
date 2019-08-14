const City = require("../models/city");
const Community = require("../models/community");
const fs = require("fs");
class MarkdownTransform {

    async toMarkdown(location){
        const city =await City.findOne({name:location});
        console.log(city.overview);
        const community = await Community.findById(city.community);
        fs.readFile("/home/aleksandar/Desktop/home.md",(error,data)=>{
            if(error) throw error;
            data = data.toString().split("\n");
            let index = data.indexOf("# Overview");
            index++;
            let n = index;
            data.splice(index,0,city.overview);
            index++;
            data = this.addMultipleLines(data,city,"events",5,"Events",["name","location"]);
            data = this.addMultipleLines(data,city,"startups",5,"Startups",["name","description","link","investment"]);
            fs.writeFileSync("/home/aleksandar/Desktop/home.md","");
            for(let i =0;i<data.length;i++)
                fs.appendFileSync("/home/aleksandar/Desktop/home1.md",data[i]+"\n");
        })
    }

    addMultipleLines(data,document,docObj,n,sectionName,attributesArray){
        // data = data.toString().split("\n");
        let index = data.indexOf("# "+sectionName);
        index++;
        for(let i=0;i<n;i++)
        {
            for(let j=0;j<attributesArray.length;j++)
            {
                
                switch(attributesArray[j]){
                    case "name":
                        data.splice(index,0,"**" + document[docObj][i][attributesArray[j]] +"**");
                        index++;
                        break;
                    case "link":
                        data.splice( index,0,"[" + document[docObj][i][attributesArray[j]] + "](" + document[docObj][i][attributesArray[j]] + ")");
                        index++;
                        break;
                    case "description":
                        data.splice(index,0,"**Description:** " + document[docObj][i][attributesArray[j]]);
                        index++;
                        break;
                    case "members":
                        data.splice(index,0,"**Number of members:** " + document[docObj][i][attributesArray[j]])
                        index++;
                        break;
                    case "investment":
                        data.splice(index,0,"**Investment in USD** " + document[docObj][i][attributesArray[j]])
                        index++;
                        break;
                    default:
                        data.splice(index,0,document[docObj][i][attributesArray[j]]);
                        index++;
                }
            }
        }
        return data;
    }
}

module.exports = new MarkdownTransform();