require("dotenv").config;
const express = require("express");
require("./db");
var cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use("/api/artist", require("./routes/artist"));
app.use("/api/user", require("./routes/user"));
// app.use("/api/admin", require("./routes/admin"));
app.use("/api/product", require("./routes/product"));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(600).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`);
});
