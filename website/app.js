/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
let apiKey='e20a528a2dd451fcdd5a6417d636de6e';
//baseURL
//ex. http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e20a528a2dd451fcdd5a6417d636de6e
let baseURL='http://api.openweathermap.org/data/2.5/weather?q=';
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click',performAction);
/* Function called by event listener */
function performAction(e){
    //console.log("event listener is running")
}
/* Function to GET Web API Data*/


/* Function to POST data */
const postData = async(url='',data={})=>{
    console.log(data);
    const response = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch(error){
        console.log("error",error);
    }
}
/* Function to GET Project Data */
const getData = async(url='',data={})=>{
    console.log(data);
    const response = await fetch(url,{
        method:'GET',
        credentials:'same-origin',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch(error){
        console.log("error",error);
    }
}
