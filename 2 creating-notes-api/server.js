const app = require("./src/app"); // server ka instance require krke app variable mai save kiya 
// ./src/app = ./src/app.js

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});