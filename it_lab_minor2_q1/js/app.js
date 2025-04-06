var express = require("express");
var mongoose = require("mongoose");
//const cors = require("cors");

var app = express();
var server = app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});

app.use(express.json());
app.use(express.urlencoded());
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
var quote = new Schema({
    name:String,
    quote:String
})
var quotes = mongoose.model("quotes", quote);


noOfQuotes = 0;

app.post("/",async (req, res) => {
    var quote = req.body;
    var addQuote = await quotes.insertOne(quote);
    
    res.status(200).json({ message: "Quote added successfully!" });
});

app.get("/" ,async (req, res) => {
    var showQuote = await quotes.find();

    res.json(showQuote);
});

app.delete("/", async (req, res) => {
    var rem = await quotes.deleteOne({"__v" : 0});

    if(rem.deletedCount >= 1)
    {
        res.status(200).json({ message: "Quote deleted successfully!" });
    }
   
});

app.put("/", async (req, res) => {
    const updateText = req.body.updateText;
    var upd = await quotes.updateOne({"__v" : 0}, {$set:{"quote" : updateText}});

    res.status(200).json({ message: "Quote updated successfully!" });
});