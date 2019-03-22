var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
	  var hbsObject = {
		burgers: data
	  };
	  console.log(hbsObject);
	  res.render("index", hbsObject);
	});
  });

  router.post("/", function(req, res) {
		burger.new("burger_name", req.body.burger, function(data) {
			res.redirect("/");
			console.log(req.body.burger);
		});
	});

	router.put("/", function(req, res) {
		burger.devour("devoured", 1, "id", req.body.id, function(data) {
			res.redirect("/");
		});
	});


module.exports = router;