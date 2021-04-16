/* Global Variables */
let data={};
let temperature=0;
let feelings;
//const { domainToUnicode } = require("node:url");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
let apiKey='&APPID=e20a528a2dd451fcdd5a6417d636de6e';
//baseURL
//ex. http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e20a528a2dd451fcdd5a6417d636de6e
let baseURL='http://api.openweathermap.org/data/2.5/weather?q=';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);
/* Function called by event listener */
function performAction(e){
    //console.log("event listener is running")
    const zipCode = document.getElementById('zip').value;
    feelings = document.getElementById("feelings").value;
    data =getWeatherData(baseURL,zipCode,apiKey)
    .then(function(data){
        postData('/add',data);
    }).then(updateUI())
}
/* Function to GET Web API Data*/
const getWeatherData = async(url,code,key)=>{
    const response = await fetch(url+code+key);
    try{
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch(error){
        console.log("error",error);
    }
}
/* Function to POST data */
const postData = async (url='',data={})=>{
    const response = await fetch ( url , {
    method : 'POST',// * GET , POST , PUT , DELETE,....
    credentials : 'same-origin',//include * same-origin, omit,.....
    headers : {'Content-Type' : 'application/json',},
    body : JSON.stringify(data) ,// body data type must match "content-Type" header
    });
    try
    {   const newData= await response.json();
        //console.log(newData);
        return newData
    } catch (error) {
        console.log('error',error);
        }
}
/* Function to GET Project Data */


/* Function to update the UI */
const updateUI = async()=>{
    const request = await fetch('/all');
    try{
        const alldata = await request.json();
        document.getElementById('date').innerHTML = newDate;
        document.getElementById('temp').innerHTML = alldata.main.temp;
        document.getElementById('content').innerHTML = feelings;
    }catch(error){
        console.log("error : ",error);
    }
}
