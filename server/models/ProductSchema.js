const { default: mongoose } = require("mongoose");
const moment = require("moment");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  prodImage: {
    type: String,
  },
  date: {
    type: Date,
    default: moment(Date.now()).format("DD-MM-YYYY"),
  },
  price: {
    type: Number,
  },
  gender: {
    type: String,
  },
  size: [String],
  categories: {
    type: String,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
