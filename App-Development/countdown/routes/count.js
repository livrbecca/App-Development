var express = require("express");
var router = express.Router();

let launchTime = new Date("12/29/2020 10:00:54").getTime();


/* GET home page. */
router.get("/", function (req, res) {
  const currentTime = new Date().getTime();

  const numberOfSeconds = parseInt(launchTime - currentTime);

  res.render("count", {
    title: "My Awesome Game",
    countDown: numberOfSeconds,
  });
});

module.exports = router;
