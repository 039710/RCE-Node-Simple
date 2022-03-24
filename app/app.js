require("dotenv").config();
var express = require("express");
var app = express();
var axios = require("axios");
var port = process.env.PORT || 9898;
app.get("/menus", async function (req, res) {
  // res.status(200).json({
  //   return: eval(req.query.q),
  // });
  try {
    console.log(req.query.q);
    if (!req.query.q) {
      let result = await axios.get("http://json-server:9999/menus");
      res.send(result.data);
    } else {
      let result = await axios.get(
        "http://json-server:9999/menus?q=" + eval(req.query.q)
      );
      res.send(result.data);
    }
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.listen(port, function () {
  console.log("Example app listening on port 8080!");
});
