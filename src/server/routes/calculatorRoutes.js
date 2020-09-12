const express = require("express");
const router = express.Router();

const { add, sub, multiply, division } = require("../controllers/calculate");

router.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

router.post("/add", add);

router.post("/sub", sub);

router.post("/multiply", multiply);

router.post("/divide", division);

module.exports = router;
