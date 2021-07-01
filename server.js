const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hey hii</h1>");
});
