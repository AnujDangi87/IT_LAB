var express = require('express');
var app = express();
var fs = require("fs");
const port = 3001;
var server = app.listen(port, () => {
    console.log("Server is running on port 3001");
});

app.get("/", (request, respond) => 
{
    fs.readFile("./index.html", 'utf8', (err, data) => {
        respond.end(data);
    })
})