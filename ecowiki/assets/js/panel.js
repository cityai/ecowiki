
const userAction = async () => {
    const response = await fetch('http://localhost:3000/api/influencers/Berlin').then(json=>json.json()).then(data=>{var p = document.getElementById("p").innerHTML += JSON.stringify(data) + "hello";})
.catch(e=>console.log(e));
    
  }

/*
**
    POST route handlers for adding Startups, Influencers,
    Groups, Organizations and Events directly to database
    via admin panel!
**
*/

const POSTgroup = async ()=>{
    const data = {
        name: document.getElementById("Name").value,
        link: document.getElementById("Link").value,
        description:"" || document.getElementById("Desc").value ,
        location: document.getElementById("Location").value,
        members: document.getElementById("Members").value ,
        organizer: document.getElementById("Organizer").value ,
        category: document.getElementById("Category").value ,
    }
    const res = await postData('http://localhost:3000/api/groups/',data).catch(e=>console.log(e));
    return res;
}

const POSTorg = async ()=>{
    let prof = document.getElementById("Highlighted").checked;
    const data = {
        name: document.getElementById("Name").value,
        link: document.getElementById("Link").value,
        description:"" || document.getElementById("Desc").value ,
        location: document.getElementById("Location").value,
        email: document.getElementById("Email").value ,
        founder: document.getElementById("Founder").value ,
        category: document.getElementById("Category").value ,
        profit:prof,

    }
    console.log(data);
    const res = await postData('http://localhost:3000/api/organizations/',data).catch(e=>console.log(e));
    return res;
}

const POSTevent = async ()=>{
    let highlightedEvent = document.getElementById("Highlighted").checked;
    const data = {
      name:document.getElementById("Name").value,
      date:document.getElementById("Date").value,
      description: document.getElementById("Desc").value,
      location: document.getElementById("Location").value,
      address: document.getElementById("Address").value,
      organizer: document.getElementById("Organizer").value,
      category: document.getElementById("Category").value,
      link: document.getElementById("Link").value,
      highlighted: highlightedEvent
    }
    console.log(data);
    const res = await postData('http://localhost:3000/api/events/',data).catch(e=>console.log(e));
    return res;
}

const POSTinfluencer = async ()=>{
  const data = {
    name:document.getElementById("Name").value,
    picture:document.getElementById("Picture").value,
    location: document.getElementById("Location").value,
    link: document.getElementById("Link").value,
    followers: document.getElementById("Followers").value
  }
  console.log(data);
  const res = await postData('http://localhost:3000/api/influencers/',data).catch(e=>console.log(e));
  return res;
}

const POSTstartup = async ()=>{
    let highlightedStartup = document.getElementById("Highlighted").checked;
    const data = {
      name: document.getElementById("Name").value,
      categories: document.getElementById("Category").value,
      value: document.getElementById("Value").value,
      type: document.getElementById("Type").value,
      picture:document.getElementById("Picture").value,
      investment: document.getElementById("Investment").value,
      description: document.getElementById("Desc").value,
      link: document.getElementById("Link").value,
      highlighted: highlightedStartup,
      investors: document.getElementById("Investors").value,
      location: document.getElementById("Location").value,
    }
    console.log(data);
    const res = await postData('http://localhost:3000/api/startups/',data).catch(e=>console.log(e));
    return res;
}


/*
**
    DELETE route handlers for removing Startups, Influencers,
    Groups, Organizations and Events directly to database
    via admin panel!
**
*/

const DELETEstartup = async ()=>{
  let id = document.getElementById("ID").value;
  const res = await deleteData("http://localhost:3000/api/startups/",id).catch(e=>console.log(e));
  return res;
}

const DELETEgroup = async ()=>{
  let id = document.getElementById("ID").value;
  const res = await deleteData("http://localhost:3000/api/groups/",id).catch(e=>console.log(e));
  return res;
}

const DELETEorg = async ()=>{
  let id = document.getElementById("ID").value;
  const res = await deleteData("http://localhost:3000/api/organizations/",id).catch(e=>console.log(e));
  return res;
}

const DELETEinfluencer = async ()=>{
  let id = document.getElementById("ID").value;
  const res = await deleteData("http://localhost:3000/api/influencers/",id).catch(e=>console.log(e));
  return res;
}

const DELETEevent = async ()=>{
  let id = document.getElementById("ID").value;
  const res = await deleteData("http://localhost:3000/api/events/",id).catch(e=>console.log(e));
  return res;
}

/*
**
    Logic for buttons which are used to 
    see all Events, Startups, Influencers
    Organizations or Groups
**
*/

const seeAll = async()=>{
  let ent = document.getElementsByClassName("All")[0].id;
  let p = document.getElementById("p");
  console.log('http://localhost:3000/api/' + ent +'/');
  const response = await fetch('http://localhost:3000/api/' + ent +'/').then(json=>json.json()).catch(e=>console.log(e));
  p.innerHTML = "id/name<br>"
  console.log(response);
  for(let i = 0;i<response.length;i++)
  {
    p.innerHTML+= response[i]._id + " &nbsp &nbsp &nbsp &nbsp" + response[i].name + "<br>" ;
  }
}

const seeStartups = async()=>{}

const seeGroups = async()=>{}

const seeInfluencers = async()=>{}

const seeOrgs = async()=>{}

const seeEvents =async()=>{}


/*
**
    HTTP requests handlers
**
*/

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      credentials: 'same-origin',
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer',
      headers: {
        // 'Access-Control-Allow-Headers': 'content-type'
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }

  async function deleteData(url = '', id="") {
    // Default options are marked with *
    const response = await fetch(url + id, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      credentials: 'same-origin',
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer',
      headers: {
        // 'Access-Control-Allow-Headers': 'content-type'
        'Content-Type': 'application/json',
      },
    });
    return await response.json(); // parses JSON response into native JavaScript objects
  }