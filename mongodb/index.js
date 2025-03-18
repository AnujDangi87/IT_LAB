var express = require("express");
var app = express();
var mongoose = require("mongoose");
var students = require("./models/students.model.js");

app.use(express.json());

var port = 3000;
var server = app.listen(port, () =>{
    console.log(`server is running on http://127.0.0.1:${port}`);
});

app.get("/", (req, res)=>{
    res.send("Hello from node index.js");
});

app.post("/students", async (req, res) => {
    try{
        var student = await students.create(req.body);
        res.json(student);
    }
    catch(err)
    {
        console.err(err);
    }
})

mongoose.connect("mongodb+srv://anuj:anuj@cluster0.ncdqq.mongodb.net/?retryWrites=true&w=majority\
&appName=Cluster0")
.then(() => {
    console.log("connected to database");
})
.catch(()=>{
    console.log("connection failed");
});

