/*

let notes = [
  {
  title : "any title",
  description: "any description"
  },

  {
  title : "any title",
  description: "any description"
  }

]

*/


const express = require("express");

const app = express();


// express.json() // --> is a middleware
// app.use() // --> line is use to use middleware
app.use(express.json());

const notes = [];


/*

POST /notes => create a note
GET /notes => GET all notes
DELETE /notes/:index => Delete a note
PATCH /notes/:index => Update a note

*/

// post method ki api
app.post("/notes", (req, res) => {

  console.log(req.body);

  notes.push(req.body);

  res.status(201).json({
    message : "note created successfully"
  });

});

//  both api are different but their name is same but it is different due to method

app.get("/notes", (req, res) => {

  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes
  });

});

// :index --> ':' ke baad jo aa raha ahi woh uuse express dynamic consider krta hai aur yaha hmara index bhi dynamic hai

// params is short for route parameters in Express.js.

/*

:index → placeholder in the URL

req.params → this is the whole object that contains all route parameters.
In Express.js, route parameters are accessed through req.params

req.params.index → the actual value from the URL

*/

// :index is a route parameter
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index]

  res.status(200).json({
    message: "note deleted successfully"
  })
});

app.patch("/notes/:index", (req, res) => {

  const index = req.params.index;
  const description = req.body.description;

  notes[index].description = description;

  res.status(200).json({
    message: "note updated successfully"
  });

});

module.exports = app; // app variable ko export kiya hai