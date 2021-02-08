const express = require("express");
const { createMovie } = require("../controllers/movie");

const router = express.Router();

router.route("/").post(createMovie);

module.exports = router;
