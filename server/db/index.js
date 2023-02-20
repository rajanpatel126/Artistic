const mongoose = require("mongoose");

// const mongoURI = process.env.MONGODB_URL;
const mongoURI =
  "mongodb+srv://rajan126:rajan126@cluster0.jp2rvbv.mongodb.net/Artistic?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
// url for connect database

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to Mongo Successfully"))
  .catch((err) => console.log("DB connection failed: ", err.message || err));
