const server = require("./src/app.js");
require("dotenv").config();
const { conn } = require("./src/db");

const port = process.env.PORT || 3001;

conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log(`App listening at ${port}`); // eslint-disable-line no-console
  });
});
