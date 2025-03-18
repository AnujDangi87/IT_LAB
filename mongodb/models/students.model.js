var mongoose = require("mongoose");


// Calling Schema class
const Schema = mongoose.Schema;

// Creating Structure of the collection
const student = new Schema({
  name: {
    type: String,
    require: true
  }
  ,
  id: {
    type: String,
    require:true
  }
});

// Creating collection
const students = mongoose.model("students", student);
module.exports = students;