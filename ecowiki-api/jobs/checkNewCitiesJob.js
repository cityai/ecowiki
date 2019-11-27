const fs = require('fs');
const path = require('path');

const City = require('../models/city');
String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};
class CheckForCity {
    async check() {
        const dirPath = path.join(process.cwd(), "content");
        const dirArray = fs.readdirSync(dirPath);

        //await City.deleteMany({},err=>console.log(err));
        let cities = await City.find({}).select("name -_id")
        cities = cities.map(el=>{return el.name.toLowerCase().replace(/ /g,"-" )});
        for (let i = 0; i < dirArray.length; i++) {
            
            if(!cities.includes(dirArray[i]))
                {
                    if([".git", "main","uploads","home.md","cityTemplate.md","about.md","panel"].includes(dirArray[i])) continue;
                    const city = new City({name: dirArray[i].replace(/-/g," ").capitalize()})
                    await city.save();
                }
            
        }
        // for(let i = 0; i < cities.length;i++)
        // {
        //     if(!dirArray.includes(cities[i]))
        //     {
        //         await City.findOneAndDelete({name:cities[i].replace(/-/g," ").capitalize()})
        //     }
        // }
        return "done";
    }
}

module.exports=new CheckForCity();