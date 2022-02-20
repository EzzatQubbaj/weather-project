let myHttp = new XMLHttpRequest;

let topp = document.querySelector(".top");
let bottom = document.querySelector(".bottom");
let city = prompt("Enter city name :");

// 77cd84ccfec647ab93e171054222002
myHttp.open("GET" , `http://api.weatherapi.com/v1/current.json?key=77cd84ccfec647ab93e171054222002&q=${city}&aqi=no`)
myHttp.send();


myHttp.onreadystatechange = function() {

if(city==null || city==""){
  alert('Please enter  name');
  location.reload(true);
}



  if(myHttp.readyState == 4 && myHttp.status == 200){
    let data = JSON.parse(myHttp.responseText);

    let name =data.location.name
    let temp_c =data.current.temp_c
    let temp_f =data.current.temp_f
    let icon =data.current.condition.icon
    let last_update =data.current.last_updated
    let local_time =data.location.localtime

    topp.innerHTML = `
      <h3> ${name}</h3>
      <img src="${icon}">
    `;

    bottom.innerHTML= `
    <div>
      <p>Temp in c: ${temp_c}</p>
      <p>Temp in f: ${temp_f}</p>
    </div>
    <div>
      <p>Last Updated: ${last_update}</p>
      <p>loacl time: ${local_time}</p>
    </div>
      
    `
  }
    
}