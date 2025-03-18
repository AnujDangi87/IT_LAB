var express = require('express');
var fs = require("fs");
var app = express();
const port = 3000;

var server = app.listen(port, () => {
    console.log("Server is running on port 3000");
});

app.get("/:id", (req, res) => {
    fs.readFile("./users.json", "utf-8", (err, data) => {
        var users = JSON.parse(data);
        var id = parseInt(req.params.id);
        var a = users["user"+id];
        if(a)
        {
            res.json(a);
        }
        else
        {
            res.sendStatus(404);
        }
    });
});

