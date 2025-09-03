var express = require("express");
var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// 🚨 Este es el endpoint que valida el test
app.get("/json", (req, res) => {
  let data = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    data.message = data.message.toUpperCase();
  }
  res.json(data);
});

module.exports = app;
