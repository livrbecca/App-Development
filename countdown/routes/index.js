var express = require("express");
var router = express.Router();

const launchTime = new Date("12/29/2020 10:00").getTime();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(Hello);
  res.render("index", {
    title: "Express",
  });
});

module.exports = router;
