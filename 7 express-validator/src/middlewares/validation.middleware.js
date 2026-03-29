const { body, validationResult } = require("express-validator");

const validateResult = async (req, res, next) => {

  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  } 
  next()

}

const userValidationRules = [
  body("name")
    .isString()
    .withMessage("name must be string")
    .isLength({min:3, max:20})
    .withMessage("name must be between 3 and 20 characters"),

  body("email")
    .isEmail()
    .withMessage("Invalid email address"),

    body("password")
      .isLength({min:6})
      .withMessage("Password must be atleast 6 character long"),
  validateResult
]

module.exports = {
  userValidationRules
};