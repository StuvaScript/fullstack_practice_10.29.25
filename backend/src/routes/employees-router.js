const express = require("express");
const router = express.Router();
const { getAllEmployees } = require("../controllers/employees-controller");

router.route("/").get(getAllEmployees);

module.exports = router;
