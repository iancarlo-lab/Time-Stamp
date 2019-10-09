//https://glitch.com/edit/#!/impartial-bloom?path=app.js:9:24
const express = require('express');
const Joi = require('@hapi/joi');
const app = express();

app.use(express.json());
let date = new Date();
const timeStamp = {
    unix: null,
     utc: "Invalid Date"
    };

app.get('/', (req,res) => {
    res.send('Probando probando...')
});

//The API endpoint is GET [project_url]/api/timestamp/:date_string?
//If data string is empty -> trigger new Date(actual_date)
app.get('/api/timestamp', (req,res) => {
        timeStamp.unix = date.getTime(),
        timeStamp.utc = date.toUTCString()
        res.send(timeStamp);
});

app.get('/api/timestamp/:date_string?', (req,res) => {
    const date_string = req.params.date_string; 
    const date_validation = new Date(date_string);
    if(date_validation === 'Invalid Date') return res.send(timeStamp);

       let timeStampa = {
            unix: date_validation.getTime(),
            utc: date_validation.toUTCString()
        }
    res.send(timeStampa)
    
});

//Validate if date string is useful if can be succesfully parsed by new Date(date_String)
//Unix timestamp has to be an integer specifying miliseconds

//if the data string is valid -> {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }

//if the data string is invalid -> {"unix": null, "utc": "Invalid Date"}

function tryone(name){
    console.log('Hola ' + name + ' listo para hackear?');
    console.log(date);
}   
tryone('Adrianoo');

app.listen(3000, () => console.log('Listening on port 3000... y segiumos'));