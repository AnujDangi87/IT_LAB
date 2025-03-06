var express = require('express');
var fs = require("fs");
var app = express();
const port = 3000;
var server = app.listen(port, () => {
    console.log("Server is running");
});

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    fs.readFile( "." + "/" + "users.json", 'utf8', function (err, data) {
    var users = JSON.parse( data );
    var user = {name : "ajay", id : 4};
    users["user"+user.id] = user;
    res.json(users);
    });
    })