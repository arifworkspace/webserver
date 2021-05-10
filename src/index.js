const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send({ status: "Web server is up and running" });
});

app.get("/data", (req, res) => {
  res.send({
    data: [
      { name: "Saiful", age: 32 },
      { name: "Arif", age: 28 },
      { name: "Sharif", age: 25 },
    ],
  });
});

app.listen(port, () => console.log(`Webserver is listening on port ${port}.`));
