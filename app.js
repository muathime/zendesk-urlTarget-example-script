require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var commenter = require("./commenter");
const app = express();

app.use(bodyParser.json()); // support json encoded body
app.use(bodyParser.urlencoded({ extended: true })); // support url encoded data

app.post("/post", async (req, res) => {
  // Our post logic starts here
  try {
    const zen_data = req.body;
    // console.log(zen_data); //Log all ppost data as it is
    var ticketInfo = zen_data.my_zendesk;
    var ticketId = ticketInfo.match("#(.*)-")[1]; //extract ticket Id from the body data using regex delimeters "#"" and "-""
    var replyMsg = "This is an example reply message";
    console.log("Ticket Id: ", ticketId); //log ticket Id

    commenter(ticketId, replyMsg);

    res
      .status(200)
      .send(
        " Data request for ticket id #" +
          ticketId +
          " received and response posted on the ticket as a comment!"
      );
  } catch (error) {
    console.log(error)
  }
  // Our post logic ends here
});

app.get("/get", async (req, res) => {
  // Our get logic starts here
  try {
    res.status(200).send("If need be you should implement a get request logic here");
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
