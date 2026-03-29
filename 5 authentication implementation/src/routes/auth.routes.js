const express = require('express')
const constroller = require('../controllers/auth.controller')
 

const router = express.Router()


router.post("/register", constroller.registerUser)

router.get("/cookies", constroller.getCookies)


module.exports = router