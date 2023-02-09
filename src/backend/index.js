require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");

let app = express();

let port = process.env.PORT;

app.use(
  cors({
    origin: "*",
  })
);

app.use(routes, () => {});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Application listening on port ${port}`);
});
