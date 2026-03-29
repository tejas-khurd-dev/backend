const express = require("express");
const noteModel = require("./models/note.model")

const app = express();


app.use(express.json());



app.post("/notes", async (req, res) => {
  const data = req.body;

  // await noteModel.create(data); // --> Not a good way

  await noteModel.create({
    title: data.title,
    description: data.description
  }); 
  // await is used since we dont know kab data jayega aur store hoga through internet

  res.status(201).json({
    message: "Note created successfully"
  });

});

app.get("/notes", async (req, res) => {

  // db mai every note has it own unique id and
  // find operation always return array or empty array
  const notes = await noteModel.find();

  // you can also apply condition on find like below


  // const notes = await noteModel.find({
  //   title: "test title"
  // });

  res.status(201).json({
    message: "Notes fetched successfully",
    all_notes: notes
  });

  // findOne return obj and if data is not present it returns null
  // const note = await noteModel.findOne({
  //   title: "test title 2"
  // });
  // if findOne have condition which is not matches like "test title 4" then you will get null

  // sending two responses for the same request is not allowed
  // res.status(201).json({
  //   message: "Note fetched successfully",
  //   one_note: note
  // });

});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id
    // _id => "_" is used as in db "_" is their
  });

  res.status(200).json({
    message: "Note deleted successfully"
  });

});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  // findOneAndUpdate 2 objects manjti hai kisme update kra hai aur kya update krna hai
  await noteModel.findOneAndUpdate({_id: id}, {description: description});

  res.status(200).json({
    message: "Note updated successfully"
  });
});

module.exports = app;