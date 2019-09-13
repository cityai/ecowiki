const express = require("express");
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const router = express.Router();

router.get("/oauth",(req,res)=>{res.redirect("https://secure.meetup.com/oauth2/authorize?client_id=q31qm95rop67fmmcul0v9ta5id&response_type=code&redirect_uri=http://52.47.77.114:3000/api/meetup/www.wikiai.com")});
router.get("/www.wikiai.com",async (req,res)=>{
    const ans = await fetch("https://secure.meetup.com/oauth2/access",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method:'POST',
        body:new URLSearchParams({"client_id":"q31qm95rop67fmmcul0v9ta5id",
            "client_secret":"mhim83of8cmqaq27u37lvl62bc",
            "grant_type":"authorization_code",
            "redirect_uri":"http://52.47.77.114:3000/api/meetup/www.wikiai.com",
            "code":req.query.code})
    }).then(async json=>json.json())
    //SAVE ans.access_token i ans.refresh_token
    const pathToEnv = path.join(__dirname,"..",".env");
    await fs.readFile(pathToEnv,(err,data)=>{
        data = data.toString().split("\n");
        var index = data.indexOf(data.find(a=>a.includes("MEETUP_ACCESS_TOKEN=")));
        data[index] = "MEETUP_ACCESS_TOKEN='" + ans.access_token+"'";
        index = data.indexOf(data.find(a=>a.includes("MEETUP_REFRESH_TOKEN=")));
        data[index] = "MEETUP_REFRESH_TOKEN='" + ans.refresh_token+"'";
        fs.writeFileSync(pathToEnv, "");
        for (let i = 0; i < data.length; i++)
            fs.appendFileSync(pathToEnv, data[i] + "\n");
    })
    res.send("Done")
})

module.exports = router;