const express = require("express")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const router = express.Router()

router.post("/post", async (req, res)=>{

  const token = req.cookies.token
  console.log(req.body)

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    })
  } 

  console.log(req.cookies)

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // This line does BOTH things at once:
    // Verifies the token
    // Returns (decodes) the payload
    // { id: user._id } is called payload
    console.log(decoded)
    const user = await userModel.findOne({_id:decoded.id})
    console.log(user)
    
  } catch(err){
    return res.status(401).json({
      message: "Token is invalid"
    })
  }
  

  res.send("Post created successfully")
})

module.exports = router