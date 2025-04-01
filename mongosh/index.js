var express = require("express");
var app = express();
var mongoose = require("mongoose");
var students =mongoose.model("students","{}");

app.use(express.json());

var port = 3000;
var server = app.listen(port, () =>{
    console.log(`server is running on http://127.0.0.1:${port}`);
});

app.get("/:id",async (req, res)=>{
    var id = req.params.id;
    var user = await students.find({"id" : `${id}`});

    if(user == ""){
        res.sendStatus(404);
    }
    else
    {   
        res.json(user);
    }
    
});

/*deleteOne gives output in this format : {
  acknowledged: true,
  deleteCount: 1
}*/
app.delete("/:id", async (req, res) => {
    var id = req.params.id;

    var deleteUser = await students.deleteOne({"id" : `${id}`});
    if(deleteUser.deletedCount >= 1)
    {
        res.sendStatus(200);
    }
    else{
        res.sendStatus(404);
    }
});

/*updateOne gives output in this format : {
  acknowledged: true,
  modifiedCount: 1,
  upsertedId: null,
  upsertedCount: 0,
  matchedCount: 1
}*/
app.put("/update/:id/:age", async (req, res) => {
    var id = req.params.id;
    var age = req.params.age;
    var updateUser = await students.updateOne({"id" : `${id}`}, {$set:{"age" : `${age}`}});
    
    if(updateUser.modifiedCount >= 1)
        {
            res.sendStatus(200);
        }
        else{
            res.sendStatus(404);
        }
});

app.post("/", async (req, res) => {
    try{
        var student = await students.insertOne(req.body);
        res.json(student);
    }
    catch(err)
    {
        console.log(err);
    }
})

mongoose.connect("mongodb://localhost:27017/user")
.then(() => {
    console.log("connected to database");
})
.catch(()=>{
    console.log("connection failed");
});

