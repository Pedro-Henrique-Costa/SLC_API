const router = require("express").Router();

const carController = require("../controllers/carController");

router
    .route("/cars")
    .post((req, res) => carController.create(req, res));

module.exports = router;