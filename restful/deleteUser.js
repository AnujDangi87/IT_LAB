var express = require("express");
var app = express();

var server = app.listen(3000, () =>
{
    console.log("Server is running");
});

var fs = require("fs");

app.delete('/:id', (req, res) => {
    fs.readFile("./users.json", 'utf8', (err, data) => {
        data = JSON.parse(data);
        var id = req.params.id;
        var user = data[id];
        delete data["user"+id];
        res.end(JSON.stringify(data));
    });
});
