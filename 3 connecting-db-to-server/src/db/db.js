const mongoose = require("mongoose");

/* 

You are telling JavaScript:
“This function will handle asynchronous operations (operations that take time).”

*/

async function connectDB() {

  /*
  Database connection takes time because:
  It connects over the internet
  It verifies credentials
  It selects the database

  So it does not happen instantly.
  */

  
  // see we dont know when our server is going to connect connect to db therefore we use await --> jab tak mongoose server ko db se connect na kare tab tak wait kijiye isliye await use kiya hai and when we use await async lagana padta hai
  await mongoose.connect(process.env.MONGO_URI);

  console.log("Connected to db");

  
}


// agar apne cluster mai db present nahi tabhi mongoose db create karke connect karega



module.exports = connectDB;
// This exports the function itself, not the result.



// module.exports = connectDB();
// This exports the result of calling the function immediately.