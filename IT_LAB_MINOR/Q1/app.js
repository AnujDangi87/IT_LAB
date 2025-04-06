var express = require("express");
var mongoose = require("mongoose");
//const cors = require("cors");

var app = express();
var server = app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});

app.use(express.json());
app.use(express.urlencoded({extended : true}));
//app.use(cors());

//cors replacement
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

mongoose.connect("mongodb://localhost:27017/exam")
.then(() => {
    console.log("Connected to database");
})
.catch(() => {
    console.log("Not connected to database")
});
var Schema = mongoose.Schema;
var student = new Schema({
    stdId:{
        type : String,
        require : true
    },
    name:{
        type : String,
        require : false
    },
    email : {
        type : String,
        require : false
    },
    gender : {
        type : String,
        require : false
    },
    image : {
        type : String,
        require : false
    },
    study_program : {
        type : String,
        require : false
    },
    year_of_study : {
        type : String,
        require : false
    }
})
var students = mongoose.model("students", student);

app.post("/",async (req, res) => {
    var addStudent = req.body;
    var addQuote = await students.insertOne(addStudent);
    
    res.status(200).json({ message: "Student added successfully!" });
});

app.get("/" ,async (req, res) => {
    var studentData = await students.find();

    res.json(studentData);
});

app.delete("/", async (req, res) => {
    var deleteId = req.body;
    var deleteStudent;

    if(deleteId.stdId == "")
        deleteStudent = await students.deleteOne();
    else
        deleteStudent = await students.deleteOne(deleteId);

    if(deleteStudent.deletedCount >= 1)
    {
        res.status(200).json({ message: "Student deleted successfully!" });
    }
   
});

app.put("/", async (req, res) => {

    var upd = await students.updateOne({"stdId" : req.body.updateId}, {$set:{"name" : req.body.name}});

    res.status(200).json({ message: "Student updated successfully!" });
});
