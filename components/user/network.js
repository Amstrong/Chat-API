const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const { text } = require("body-parser");
const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getUser()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

module.exports = router;
