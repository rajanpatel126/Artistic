const { default: mongoose } = require("mongoose");
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
    type: Object,
    url: {
      true: URL,
    },
  },
  date: {
    type: Date,
    default: Date.now,
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
