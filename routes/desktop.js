var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  console.log(`using client id: ${process.env.TS_CLIENT_ID}`)
  res.render("desktop", {
    clientId: process.env.TS_CLIENT_ID
  });
});

module.exports = router;