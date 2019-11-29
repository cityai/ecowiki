<!-- TITLE: Update Organization -->

<button class="All" id="Organizations" onclick="seeAll()">SEE ALL ORGANIZATION</button>

<p id="p"></p>

<input type="text" id="ID" placeholder="Required"><br>
Enter the Id of the instance you want to update!

## Name

<input type="text" id="Name" placeholder="Required" ><br>

## Description

<textarea id="Desc" placeholder="Not Required" rows="7" style="resize: none" ></textarea><br>

## Location

<input type="text" id="Location" placeholder="Required"><br>


## Founder

<input type="text" id="Founder" placeholder="Not Required"><br>

## Category

<input type="text" id="Category" placeholder="Required"><br>

## Link

<input type="text" id="Link" placeholder="Required"><br>

## Email

<input type="text" id="Email" placeholder="Not Required"><br>

## Profit organization

Is this organization profit or non-profit  |
<input type="checkbox" id="Highlighted" placeholder="Required"><br>

<button onclick="PATCHorg()" >SUMBIT</button>
