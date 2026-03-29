const mongoose = require("mongoose");


/*
new mongoose.Schema({...})
This creates a schema object.
*/ 

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
  // age : Number,
  // dob : Date
});
// Think of it as: 
// blueprint for how a document should look inside MongoDB.

const noteModel = mongoose.model("note", noteSchema);

// Think of it as:
// A tool that uses the blueprint to actually create, read, update, and delete data.

// "note" → model name and it is collection of noteSchema data
// noteSchema → the structure it should follow

/*

CRUD Operation krne keliye noteModel ko krna hi padta hai nahi chize complex ho sakti hai without noteNodel it is difficult to perform opetations and you have to use repetative code

Create - POST
Read - GET
Update - PATCH
Delete - DELETE
CRUD operations and their corresponding HTTP methods used in REST APIs.

*/

// new mongoose.Schema() → Design of a house
// mongoose.model() → Construction company that builds houses using that design


module.exports = noteModel