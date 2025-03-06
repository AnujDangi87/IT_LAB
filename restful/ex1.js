var express = require('express');
var fs = require("fs");
var app = express();
const port = 3000;
var server = app.listen(port, () => {
    console.log("Server is running");
});

app.get("/:id", (req, res) => {
    fs.readFile("./student.json", "utf-8", (err, data) => {
        var student = JSON.parse(data);
        var id = parseInt(req.params.id);
        var a = student[id];
        if(a)
        {
            res.end(JSON.stringify(a));
        }
        else
        {
            res.sendStatus(404);
        }
    });
});

