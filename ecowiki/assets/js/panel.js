
const userAction = async () => {
    const response = await fetch('http://localhost:3000/api/influencers/Berlin').then(json=>json.json()).then(data=>{var p = document.getElementById("p").innerHTML += JSON.stringify(data) + "hello";})
.catch(e=>console.log(e));
    
  }

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
    
}

const POSTinfluencer = async ()=>{
    console.log("Hey");
}

const POSTstartup = async ()=>{
    
}


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