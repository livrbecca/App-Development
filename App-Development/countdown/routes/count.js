var express = require("express");
var router = express.Router();

let launchTime = new Date(2021, 12, 11, 18, 0, 54);
let now;

/* GET home page. */
router.get("/", function (req, res) {
  const currentTime = new Date();
  const numberOfSeconds = (launchTime - currentTime.getDate()) / 1000;
  const days = Math.floor(numberOfSeconds / (60 * 60 * 24));
  console.log(numberOfSeconds);
  console.log(currentTime.toString());
  console.log("end date + " + launchTime.toString());

  setInterval(function () {
    console.log(new Date().toString());
    launchTime = new Date().toString();
  }, 1000);

  res.render("count", {
    title: "My Awesome Game",
    countDown: launchTime,
  });
});

module.exports = router;
