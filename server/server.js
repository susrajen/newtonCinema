var express = require("express");
var app = express();
var port = 4000;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://admin:pFeFV7zC7S08mhAW@mongodb-app-svdvh.mongodb.net/MyCinemaDB?retryWrites=true",
  { useNewUrlParser: true }
);

var theatreSchema = new mongoose.Schema({
  theatreName: String,
  screenCount: Number
});

var AddTheatre = mongoose.model("theatres", theatreSchema);

app.post("/addTheatre", (request, response) => {
  var myData = new AddTheatre(request.body);
  myData
    .save()
    .then(item => {
      console.log("Item Saved!");
      response.send(item);
    })
    .catch(error => {
      response.status(400).send("Not able to save!");
    });
});

app.get("/listTheatres", (request, response) => {
  AddTheatre.find({}, function(error, theatres) {
    if (error) {
      return error;
    }
    response.send(theatres);
  });
});

app.listen(port, () => {
  console.log("Cinema is listenng for actions on port: ", port);
});
