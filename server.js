// Setup empty JS object to act as endpoint for all routes
projectData = {};
// Require Express to run server and routes
const express = require('express'); 
// Start up an instance of app
const app = express(); 
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server =app.listen(port, listening);
// Callback to debug
function listening()
{
    console.log('server running');
    console.log(`running on local host : ${port}`);
}
// Initialize all route with a callback function
app.get("/all",getData);
// Callback function to complete GET '/all'
function getData(request, response)
{
    console.log('projectdata in getdata in server')
    console.log(projectData);
    response.send(projectData);
    
}
// Post Route

app.post("/add",addData);
function addData(request, response)
{
    let data =request.body;
    console.log('data in server');
    console.log(data);
    projectData=data;
    console.log('projectData in server');
    console.log(projectData);
    //response.send(projectData);
}
