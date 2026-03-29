const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")


const registerUser = async (req,res)=> {

  const {userName, email, password} = req.body

  const existingEmail = await userModel.findOne({ email });

  if (existingEmail) {
    return res.status(409).json({
      message: "Email already exists"
    });
  }

  const existingUsername = await userModel.findOne({ userName });
  
  if (existingUsername) {
    return res.status(409).json({
      message: "Username already taken"
    });
  }

  const user = await userModel.create({
    userName: userName,
    email: email,
    password: password
  })

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET)


  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
    // token // --> we don't send data through response
  })
}

const getCookies = (req, res) => {
  console.log(req.cookies)
  res.json({
    message : "Test cookies",
    cookies: req.cookies
  })
}



module.exports = { registerUser, getCookies }