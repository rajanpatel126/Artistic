const { default: mongoose } = require("mongoose");
const moment = require("moment");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    default: "Shirt",
  },
  productImg: {
    type: String,
  },
  date: {
    type: String,
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
