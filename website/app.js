/* Global Variables */
let data={};
let temperature=0;
let feelings;
//const { domainToUnicode } = require("node:url");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey='&APPID=e20a528a2dd451fcdd5a6417d636de6e&units=metric';
//baseURL
//ex. http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e20a528a2dd451fcdd5a6417d636de6e
const baseURL='http://api.openweathermap.org/data/2.5/weather?q=';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);
/* Function called by event listener */
function performAction(e){
    //console.log("event listener is running")
    const zipCode = document.getElementById('zip').value;
    feelings = document.getElementById("feelings").value;
    tempData =getWeatherData(baseURL,zipCode,apiKey)
    .then(function(tempData){
        data['date']=newDate;
        data['temp']=tempData.main.temp;
        data['feel']=feelings;
        postData('/add',data);
    }).then(updateUI())
}
/* Function to GET Web API Data*/
const getWeatherData = async(url,code,key)=>{
    const response = await fetch(url+code+key);
    try{
        const newData = await response.json();
        //console.log('getWeatherApp');
        //console.log(newData);
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
const getData = async (url='',data={})=>{
    const response = await fetch ( url , {
    method : 'GET',// * GET , POST , PUT , DELETE,....
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
/* Function to update the UI */
const updateUI = async()=>{
    const request = await fetch('/all');
    try{
        const allData = await request.json()
        .then(function (allData){
            console.log('allData at client side');
            console.log(allData);
            document.getElementById('date').innerHTML = `Date:${allData.date}`;
            document.getElementById('temp').innerHTML = `Temperature:${allData.temp}`;
            document.getElementById('content').innerHTML = `I feel:${allData.feel}`;
        })
    }catch(error){
        console.log("error : ",error);
    }
}
