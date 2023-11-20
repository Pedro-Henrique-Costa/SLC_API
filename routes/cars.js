const router = require("express").Router();

const carController = require("../controllers/carController");

router
    .route("/cars")
    .post((req, res) => carController.create(req, res));

router
    .route("/cars")
    .get((req, res) => carController.getAll(req, res));

router
    .route("/cars/:id")
    .get((req, res) => carController.get(req, res));

router
    .route("/cars/:id")
    .delete((req, res) => carController.delete(req, res));

router
    .route("/cars/:id")
    .put((req, res) => carController.update(req, res));

module.exports = router;