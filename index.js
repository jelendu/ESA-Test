const express = require("express"); //imports express module
const app = express(); // creates instance

app.get("/", (req, res) => {
  // defines GET request made to the root
  try {
    res.send("Hello World");
  } catch (err) {
    // added error handling
    console.error(err);
    res.status(500).send("Error occured.");
  }
});

const port = process.env.port || 3000; // defined port server listens to
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/test", (req, res) => {
  //basic test to see if server works
  res.send("Testing... Testing...");
});
