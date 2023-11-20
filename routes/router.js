const router = require("express").Router();

const carsRouter = require("./cars");

router.use("/", carsRouter);

module.exports = router;

