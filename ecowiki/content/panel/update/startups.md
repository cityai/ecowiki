<!-- TITLE: Update Startup -->

<button class="All" id="Startups" onclick="seeAll()">SEE ALL STARTUPS</button>

<p id="p"></p>

<input type="text" id="ID" placeholder="Required"><br>
Enter the Id of the instance you want to update!

## Name

<input type="text" id="Name" placeholder="Required" ><br>

## Link to logo (Preferable size 250x250px)

<input type="text" id="Picture" placeholder="Not Required" ><br>

## Location

<input type="text" id="Location" placeholder="Required"><br>

## Type

<input type="text" id="Type" placeholder="Required" ><br>

## Investors

<input type="text" id="Investors" placeholder="Not Required"><br>

## Category

<input type="text" id="Category" placeholder="Required"><br>
If there are more than one category, separate them with comma (,)

## Link

<input type="text" id="Link" placeholder="Not Required"><br>

## Value

<input type="text" id="Value" placeholder="Required"><br>

## Investment

<input type="text" id="Investment" placeholder="Required"><br>

## Highlighted

Is this event highlighted (Default is unchecked)  |
<input type="checkbox" id="Highlighted" placeholder="Required"><br>

## Description

<textarea id="Desc" placeholder="Not Required" rows="7" style="resize: none" ></textarea><br>


<button onclick="PATCHstartup()" >SUMBIT</button>