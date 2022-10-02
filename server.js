const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

app.listen(3000, function() {
    console.log("listening on 3000")
})