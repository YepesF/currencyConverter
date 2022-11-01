const { Router } = require("express");
const router = Router();
const { convert } = require("../controllers/convert");
const { Convertion } = require("../db");

router.post("/", async (req, res) => {
  try {
    const { amount, name } = req.body;
    const result = await convert(amount);
    await Convertion.create({
      name,
      cop: amount,
      usd: result.result,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
