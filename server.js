var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var MongoClient = require('mongodb');

var app = express();

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addTicket", function(req, res) {
  console.log("received request to / addTicket");
  var content = req.body.content;
  console.log("content is: " + content);
  MongoClient.connect("mongodb://localhost:27017/twitter", function(err, db) {
    if(err) {
      res.send({error: "could not connect to database"});
      console.log(err);
    }

    var collection = db.collection("tweets");
    collection.insert([{userId: 0, content:content}], {w : 1}, function(err, result) {
      if(err) {
        res.json({result: "failed", error: err});
        return console.log(err);
      }

      res.json({result: "success" });

    });
  });
});

app.post("/deleteTicket", function(req, res) {
  console.log("received request to /deleteTicket");
  var content = req.body.content;

  MongoClient.connect("mongodb://localhost:27017/twitter", function(err, db) {
    if(err) {
      res.send({error: "could not connect to database"});
      return console.log(err);
    }
 
    var collection = db.collection("tweets");
    collection.remove({content:content}, {w:1}, function(err, results) {
      if(err) {
        res.json({result: "failed", error: err});
        return console.log(err);
      }
      res.json({results: "success" });
    });
  });
});


app.get("/tickets", function(req, res) {
  console.log("received request to /tickets");
  MongoClient.connect("mongodb://localhost:27017/twitter", function(err, db) {
    if(err) {
      res.send({error: "could not connect to database"});
      return console.log(err);
    }

    var collection = db.collection("tweets");
    var tickets = [];
    var stream = collection.find().stream();
    stream.on("data", function(item) { 
      tickets.push(item);
    });
    stream.on("end", function(item) {
      res.send(tickets);
    });
  });
});



app.listen(3000, function(req, res) {
  console.log("backend server started on 3000");
});
