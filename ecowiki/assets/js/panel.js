
var env = '15.236.17.17';

const userAction = async () => {
  const response = await fetch('http://'+env+':3000/api/influencers/Berlin').then(json => json.json()).then(data => { var p = document.getElementById('p').innerHTML += JSON.stringify(data) + 'hello'; })
    .catch(e => console.log(e));

}

/*
**
    POST route handlers for adding Startups, Influencers,
    Groups, Organizations and Events directly to database
    via admin panel!
**
*/

const POSTgroup = async () => {
  const data = {
    name: document.getElementById('Name').value,
    link: document.getElementById('Link').value,
    description: '' || document.getElementById('Desc').value,
    location: document.getElementById('Location').value,
    members: document.getElementById('Members').value,
    organizer: document.getElementById('Organizer').value,
    category: document.getElementById('Category').value,
  }
  const res = await postData('http://'+env+':3000/api/groups/', data).catch(e => { console.log(e); alert('Something went wrong'); });
  return res;
}

const POSTorg = async () => {
  let prof = document.getElementById('Highlighted').checked;
  const data = {
    name: document.getElementById('Name').value,
    link: document.getElementById('Link').value,
    description: '' || document.getElementById('Desc').value,
    location: document.getElementById('Location').value,
    email: document.getElementById('Email').value,
    founder: document.getElementById('Founder').value,
    category: document.getElementById('Category').value,
    profit: prof,

  }
  console.log(data);
  const res = await postData('http://'+env+':3000/api/organizations/', data).catch(e => { console.log(e); alert('Something went wrong'); });
  return res;
}

const POSTevent = async () => {
  let highlightedEvent = document.getElementById('Highlighted').checked;
  const data = {
    name: document.getElementById('Name').value,
    date: document.getElementById('Date').value,
    description: document.getElementById('Desc').value,
    location: document.getElementById('Location').value,
    address: document.getElementById('Address').value,
    organizer: document.getElementById('Organizer').value,
    category: document.getElementById('Category').value,
    link: document.getElementById('Link').value,
    highlighted: highlightedEvent
  }
  console.log(data);
  const res = await postData('http://'+env+':3000/api/events/', data).catch(e => { console.log(e); alert('Something went wrong'); });
  return res;
}

const POSTinfluencer = async () => {
  const data = {
    name: document.getElementById('Name').value,
    picture: document.getElementById('Picture').value,
    location: document.getElementById('Location').value,
    link: document.getElementById('Link').value,
    followers: document.getElementById('Followers').value
  }
  console.log(data);
  const res = await postData('http://'+env+':3000/api/influencers/', data).catch(e => { console.log(e); alert('Something went wrong'); });
  return res;
}

const POSTstartup = async () => {
  let highlightedStartup = document.getElementById('Highlighted').checked;
  const data = {
    name: document.getElementById('Name').value,
    categories: document.getElementById('Category').value,
    value: document.getElementById('Value').value,
    type: document.getElementById('Type').value,
    picture: document.getElementById('Picture').value,
    investment: document.getElementById('Investment').value,
    description: document.getElementById('Desc').value,
    link: document.getElementById('Link').value,
    highlighted: highlightedStartup,
    investors: document.getElementById('Investors').value,
    location: document.getElementById('Location').value,
  }
  console.log(data);
  const res = await postData('http://'+env+':3000/api/startups/', data).catch(e => { console.log(e); alert('Something went wrong'); });
  return res;
}


/*
**
    DELETE route handlers for removing Startups, Influencers,
    Groups, Organizations and Events directly to database
    via admin panel!
**
*/

const DELETEstartup = async () => {
  let id = document.getElementById('ID').value;
  const res = await deleteData('http://'+env+':3000/api/startups/', id).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const DELETEgroup = async () => {
  let id = document.getElementById('ID').value;
  const res = await deleteData('http://'+env+':3000/api/groups/', id).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const DELETEorg = async () => {
  let id = document.getElementById('ID').value;
  const res = await deleteData('http://'+env+':3000/api/organizations/', id).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const DELETEinfluencer = async () => {
  let id = document.getElementById('ID').value;
  const res = await deleteData('http://'+env+':3000/api/influencers/', id).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const DELETEevent = async () => {
  let id = document.getElementById('ID').value;
  const res = await deleteData('http://'+env+':3000/api/events/', id).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

/*
**
    PATCH route handlers for removing Startups, Influencers,
    Groups, Organizations and Events directly to database
    via admin panel!
**
*/

const PATCHstartup = async () => {
  let id = document.getElementById('ID').value;
  let highlightedStartup = document.getElementById('Highlighted').checked;
  const data = {
    name: document.getElementById('Name').value,
    categories: document.getElementById('Category').value,
    value: document.getElementById('Value').value,
    type: document.getElementById('Type').value,
    picture: document.getElementById('Picture').value,
    investment: document.getElementById('Investment').value,
    description: document.getElementById('Desc').value,
    link: document.getElementById('Link').value,
    highlighted: highlightedStartup,
    investors: document.getElementById('Investors').value,
    location: document.getElementById('Location').value,
  }
  Object.keys(data).forEach(key => {
    if (data[key] === '')
      delete data[key];
  });
  const res = await patchData('http://'+env+':3000/api/startups/', id, data).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const PATCHgroup = async () => {
  let id = document.getElementById('ID').value;
  const data = {
    name: document.getElementById('Name').value,
    link: document.getElementById('Link').value,
    description: '' || document.getElementById('Desc').value,
    location: document.getElementById('Location').value,
    members: document.getElementById('Members').value,
    organizer: document.getElementById('Organizer').value,
    category: document.getElementById('Category').value,
  }
  Object.keys(data).forEach(key => {
    if (data[key] === '')
      delete data[key];
  });
  const res = await patchData('http://'+env+':3000/api/groups/', id, data).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const PATCHorg = async () => {
  let id = document.getElementById('ID').value;
  let prof = document.getElementById('Highlighted').checked;
  const data = {
    name: document.getElementById('Name').value,
    link: document.getElementById('Link').value,
    description: '' || document.getElementById('Desc').value,
    location: document.getElementById('Location').value,
    email: document.getElementById('Email').value,
    founder: document.getElementById('Founder').value,
    category: document.getElementById('Category').value,
    profit: prof,

  }
  Object.keys(data).forEach(key => {
    if (data[key] === '')
      delete data[key];
  });
  const res = await patchData('http://'+env+':3000/api/organizations/', id, data).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const PATCHinfluencer = async () => {
  let id = document.getElementById('ID').value;
  const data = {
    name: document.getElementById('Name').value,
    picture: document.getElementById('Picture').value,
    location: document.getElementById('Location').value,
    link: document.getElementById('Link').value,
    followers: document.getElementById('Followers').value
  }
  Object.keys(data).forEach(key => {
    if (data[key] === '')
      delete data[key];
  });
  const res = await patchData('http://'+env+':3000/api/influencers/', id, data).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

const PATCHevent = async () => {
  let id = document.getElementById('ID').value;
  let highlightedEvent = document.getElementById('Highlighted').checked;
  const data = {
    name: document.getElementById('Name').value,
    date: document.getElementById('Date').value,
    description: document.getElementById('Desc').value,
    location: document.getElementById('Location').value,
    address: document.getElementById('Address').value,
    organizer: document.getElementById('Organizer').value,
    category: document.getElementById('Category').value,
    link: document.getElementById('Link').value,
    highlighted: highlightedEvent
  }
  Object.keys(data).forEach(key => {
    if (data[key] === '')
      delete data[key];
  });

  const res = await patchData('http://'+env+':3000/api/events/', id, data).catch(e => { console.log(e); alert('Something went wrong'); });
  alert('Success');
  return res;
}

/*
**
    Logic for buttons which are used to 
    see all Events, Startups, Influencers
    Organizations or Groups
**
*/

const seeAll = async () => {
  let ent = document.getElementsByClassName('All')[0].id;
  let p = document.getElementById('p');
  console.log('http://'+env+':3000/api/' + ent + '/');
  const response = await fetch('http://'+env+':3000/api/' + ent + '/').then(json => json.json()).catch(e => { console.log(e); alert('Something went wrong'); });
  p.innerHTML = 'id/name<br>'
  console.log(response);
  for (let i = 0; i < response.length; i++) {
    p.innerHTML += response[i]._id + ' &nbsp &nbsp &nbsp &nbsp' + response[i].name + '<br>';
  }
}

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
    body: JSON.stringify(data) // body data type must match 'Content-Type' header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

async function deleteData(url = '', id = '') {
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

async function patchData(url = '', id = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url + id, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',
    credentials: 'same-origin',
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer',
    headers: {
      // 'Access-Control-Allow-Headers': 'content-type'
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) // body data type must match 'Content-Type' header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}