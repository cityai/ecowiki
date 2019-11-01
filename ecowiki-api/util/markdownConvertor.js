

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

            for (let j = 0; j < attributesArray.length; j++) {

                switch (attributesArray[j]) {
                    case "name":
                        if (document[i]["followers"]!== undefined || document[i]["date"] !== undefined || document[i]["investment"] !== undefined || document[i]["members"] !== undefined )  {
                            data.splice(index, 0, "[" + document[i][attributesArray[j]] + "](" + document[i]["link"] + ")");
                            index++;
                        }
                        else {
                            data.splice(index, 0, "#### " + document[i][attributesArray[j]]);
                            index++;
                        }
                        break;
                    case "followers":
                        data.splice(index, 0, "**Followers:** " + document[i][attributesArray[j]]);
                        index++;
                        break;
                    case "link":
                        data.splice(index, 0, "**Link:** [" + document[i][attributesArray[j]] + "](" + document[i][attributesArray[j]] + ")");
                        index++;
                        break;
                    case "description":
                        if (!document[i][attributesArray[j]])
                            document[i][attributesArray[j]] = "No description provided";
                        data.splice(index, 0, "**Description:** " + document[i][attributesArray[j]].substring(0, 150).replace(/(\r\n|\n|\r)/gm, " ") + "...");
                        index++;
                        break;
                    case "members":
                        data.splice(index, 0, "**Members:** " + document[i][attributesArray[j]])
                        index++;
                        break;
                    case "investment":
                        data.splice(index, 0, "**Investment in USD:** " + document[i][attributesArray[j]].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"))
                        index++;
                        data.splice(index,0,"[Get more information via CRUNCHBASE](" + document[i]["link"] + ")");
                        index++;
                        break;
                    case "categories":
                        if (document[i][attributesArray[j]]) {
                            data.splice(index, 0,"**Categories:** " + document[i][attributesArray[j]].toString().replace(/,/g, ", "));
                            index++;
                        }
                        break;
                    case "date":
                        data.splice(index, 0, "##### " + document[i][attributesArray[j]].toString().substring(0, 15));
                        index++;
                        break;
                    case "organizer":
                        if(document[i][attributesArray[j]]){
                            data.splice(index, 0, "**Organizer:** " + document[i][attributesArray[j]].toString());
                            index++;
                        }
                        break;
                    case "founder":
                        if(document[i][attributesArray[j]]){
                            data.splice(index, 0, "**Founder:** " + document[i][attributesArray[j]].toString());
                            index++;
                        }
                        break;
                    case "location":
                        if(document[i][attributesArray[j]]){
                            data.splice(index, 0, "**Location:** " + document[i][attributesArray[j]].toString());
                            index++;
                        }
                        break;
                    case "cityLink":
                        data.splice(index, 0, "[" + document[i][attributesArray[j]] + "](/" + document[i][attributesArray[j]].toString().toLowerCase().replace(/ /g, "-") + "/home)");

                        break;
                    default:
                        data.splice(index, 0, document[i][attributesArray[j]]);
                        index++;

                }

            }
            data.splice(index, 0, "");
            index++;
        }
        return data;
    }

}

module.exports = new MarkdownConvertor();