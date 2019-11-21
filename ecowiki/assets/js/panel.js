const userAction = async () => {
    const response = await fetch('http://localhost:3000/api/influencers/Berlin').then(json=>json.json()).then(data=>{var p = document.getElementById("p").innerHTML += JSON.stringify(data) + "hello";})
.catch(e=>console.log(e));
    
    // do something with myJson
    
  }