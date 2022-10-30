const { Router } = require("express");
const router = Router();
const { convert } = require("../controllers/convert");

router.post("/", async (req, res) => {
  const { to, from, amount } = req.body;
  const result = await convert(to, from, amount);
  res.status(200).json(result);
});

module.exports = router;
