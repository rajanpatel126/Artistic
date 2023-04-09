const express = require("express");
const { body, validationResult } = require("express-validator");
const { isValidObjectId } = require("mongoose");
const router = express.Router();
const Product = require("../models/ProductSchema");

//Route1: adding product using "/api/product/addProduct"
router.post("/addProduct", async (req, res) => {
  let success = false;
  try {
    const { name, description, price, productImg, tag } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    const newProduct = new Product({
      name: name[0],
      description: description[0],
      price: price[0],
      tag: tag[0],
      productImg,
    });
    const saveProduct = await newProduct.save();
    success = true;
    res.json({ success, saveProduct });
  } catch (error) {
    console.error(error.message);
    res.status(600).send("Intenal Server Error\n" + error.message);
  }
});

//Route2" fetching all products using "/api/product/fetchAllProducts"
router.get("/fetchAllProducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//fetching customised shirts
router.get("/fetchFromTag", async (req, res) => {
  try {
    const { tag } = req.query;
    const chustomiseShirt = await Product.find({ tag: tag });
    res.json(chustomiseShirt);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//serching functionality
router.get("/getByName", async (req, res) => {
  const { name } = req.query;
  const product = await Product.find({
    name: { $regex: `^${name}`, $options: "i" },
  });
  return res.json(product);
});

//getting the all info of product
router.get("/getImageInfo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!validationResult(id))
      return res.status(401).json({ error: "Invalid Request" });
    let product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

//Route3: deletion of products using "api/product/deleteProducts"
router.delete("/deleteProducts/:id", async (req, res) => {
  try {
    const prmId = req.params.id;
    if (!validationResult(prmId))
      return res.status(401).json({ error: "Invalid Request" });

    let product = await Product.findById(prmId);

    if (!product) {
      return res.status(404).send("Product Not Found");
    }
    product = await Product.findByIdAndDelete(prmId);
    res.json({ success: "Product has been deleted", product: product });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
