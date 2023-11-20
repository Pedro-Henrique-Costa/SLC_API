const router = require("express").Router();

// Cars router
const carsRouter = require("./cars");
router.use("/", carsRouter);

// Users router
const usersRouter = require("./users");
router.use("/", usersRouter);

module.exports = router;