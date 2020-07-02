// Dependencies
const express = require("express");
const app = express();
let PORT = process.env.PORT || 5502;
// Setting up the Express app to handle data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

// Starts the server to begin listening on desired port
app.listen(PORT, function() {
    console.log("You are now listening on " + PORT + " Heck yes!!");
  });