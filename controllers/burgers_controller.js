var express= require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});


router.post("/burgers", function(req, res) {
  burger.create([
      "burger_name"
  ], [
      req.body.burger_name
  ], function(data) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});


router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

router.delete("/burgers/:id", function(req, res) {

  burger.delete(req.params.id, function(result) {
    console.log(result);
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
