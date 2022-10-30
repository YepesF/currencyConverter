const { Router } = require("express");
const router = Router();

router.get("/", (req, res) =>
  res.send(`<h1>Backend Currency ChatBot</h1>
<p>Bienvenido</p>`)
);

router.use("/convert", require("./convert"));

module.exports = router;
