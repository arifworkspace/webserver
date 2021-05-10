const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send({ status: "Web server is up and running" });
});

app.listen(port, () => console.log(`Webserver is listening on port ${port}.`));
