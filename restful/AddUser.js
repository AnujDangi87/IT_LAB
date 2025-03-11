var express = require('express');
var fs = require("fs");
var app = express();
const port = 3000;
var server = app.listen(port, () => {
    console.log("Server is running on port 3000");
});

var bodyParser = require('body-parser')
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/rest', function (req, res) {
    fs.readFile( "." + "/" + "users.json", 'utf8', function (err, data) {
    var users = JSON.parse( data );
    
    var newuser = req.body;
    newuser = JSON.stringify(newuser);
    fs.writeFile("./newUser.json", newuser, {flag : 'a'}, (err) => {
        console.log(err);
    });
    res.end(newuser);
    });
    })