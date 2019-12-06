

class MarkdownConvertor {
    addMultipleLinesFromArray(data, document, n, setctionText, attributesArray) {
        // data = data.toString().split("\n");
        let index = data.indexOf(setctionText);
        index++;
        data.splice(index, 0, "");
        index++;
        if (n > document.length)
            n = document.length;
        for (let i = 0; i < n; i++) {
            //There is no data for particular part of the city (e.g no news yet, no organizations...)
            if (document.length < 1) continue;
            let tempIndex = data.indexOf("<div class=column id=" + i%3 + ">", index)+1;
            tempIndex = data.indexOf("</div>",tempIndex)-1;
            if(setctionText === '<div class=ecosystems>')
                tempIndex = index;
            data.splice(tempIndex, 0, "");
            tempIndex++;
            for (let j = 0; j < attributesArray.length; j++) {

                switch (attributesArray[j]) {
                    case "name":
                        if (document[i]["followers"]!== undefined || document[i]["date"] !== undefined || document[i]["investment"] !== undefined || document[i]["members"] !== undefined )  {
                            data.splice(tempIndex, 0, "[" + document[i][attributesArray[j]] + "](" + document[i]["link"] + ")");
                            tempIndex++;
                        }
                        else {
                            data.splice(tempIndex, 0, "#### " + document[i][attributesArray[j]]);
                            tempIndex++;
                        }
                        break;
                    case "followers":
                        data.splice(tempIndex, 0, "**Followers:** " + document[i][attributesArray[j]]);
                        tempIndex++;
                        break;
                    case "link":
                        data.splice(tempIndex, 0, "**Link:** [" + document[i][attributesArray[j]] + "](" + document[i][attributesArray[j]] + ")");
                        tempIndex++;
                        break;
                    case "picture":
                        data.splice(tempIndex, 0, "![" + document[i][attributesArray[j]] + "](" + document[i][attributesArray[j]] + "){: width=10%}");
                        tempIndex++;
                        break;
                    case "description":
                        if (!document[i][attributesArray[j]])
                            document[i][attributesArray[j]] = "No description provided";
                        data.splice(tempIndex, 0, "**Description:** " + document[i][attributesArray[j]].substring(0, 150).replace(/(\r\n|\n|\r)/gm, " ") + "...");
                        tempIndex++;
                        break;
                    case "members":
                        data.splice(tempIndex, 0, "**Members:** " + document[i][attributesArray[j]])
                        tempIndex++;
                        break;
                    case "investment":
                        data.splice(tempIndex, 0, "**Investment in USD:** " + document[i][attributesArray[j]].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
                        tempIndex++;
                        break;
                    case "categories":
                        if (document[i][attributesArray[j]]) {
                            data.splice(tempIndex, 0,"**Activity:** " + document[i][attributesArray[j]].toString().replace(/,/g, ", "));
                            tempIndex++;
                        }
                        break;
                    case "category":
                        if (document[i][attributesArray[j]]) {
                            data.splice(tempIndex, 0,"**Categories:** " + document[i][attributesArray[j]].toString().replace(/,/g, ", "));
                            tempIndex++;
                        }
                        break;
                    case "date":
                        data.splice(tempIndex, 0, "##### " + document[i][attributesArray[j]].toString().substring(0, 15));
                        tempIndex++;
                        break;
                    case "organizer":
                        if(document[i][attributesArray[j]]){
                            data.splice(tempIndex, 0, "**Organizer:** " + document[i][attributesArray[j]].toString());
                            tempIndex++;
                        }
                        break;
                    case "founder":
                        if(document[i][attributesArray[j]]){
                            data.splice(tempIndex, 0, "**Founded by:** " + document[i][attributesArray[j]].toString());
                            tempIndex++;
                        }
                        break;
                    case "location":
                        if(document[i][attributesArray[j]]){
                            data.splice(tempIndex, 0, "**Location:** [" + document[i][attributesArray[j]].toString() + "](/" + document[i][attributesArray[j]].toString() + "/home/)");
                            tempIndex++;
                        }
                        break;
                    case "cityLink":
                        data.splice(tempIndex, 0, "[" + document[i][attributesArray[j]] + "](/" + document[i][attributesArray[j]].toString().toLowerCase().replace(/ /g, "-") + "/home)");

                        break;
                    default:
                        data.splice(tempIndex, 0, document[i][attributesArray[j]]);
                        tempIndex++;

                }

            }
            data.splice(tempIndex, 0, "");
            tempIndex++;
        }
        return data;
    }

}

module.exports = new MarkdownConvertor();