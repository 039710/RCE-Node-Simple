var express = require("express");
var app = express();

app.get("/", function (req, res) {
  // res.status(200).json({
  //   return: eval(req.query.q),
  // });
  res.send("Hallo" + eval(req.query.q));
  console.log(req.query.q);
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});
