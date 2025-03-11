var express = require("express");
var app = express();

var server = app.listen(3000, () =>
{
    console.log("Server is running");
});

var fs = require("fs");

app.get('/:id', (req, res) =>
{
    fs.readFile("./users.json", 'utf8', (err, data) => {
        var users = JSON.parse(data);
        var id = req.params.id;
        
        console.log(req.body);
        res.end();
    });
});