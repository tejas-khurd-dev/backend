const express = require("express");
const validationRules = require("./middlewares/validation.middleware")

const app = express();

app.use(express.json())
 

app.post("/register", validationRules.userValidationRules, (req, res) => {
  const {email, name, password} = req.body

  res.status(200).json({
    message: "User registered successfully"
  })
})

module.exports = app;