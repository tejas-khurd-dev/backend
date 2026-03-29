const express = require("express");

const app = express(); // server ka instance create hota hai

// Server programming

app.get("/", (req, res)=> {
  res.send("Hello World");
});

app.listen(3000); // server ko start krne keliye