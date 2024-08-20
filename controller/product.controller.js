const mongoose = require("mongoose");
const Product = require("../models/product.models.js");

//view all values
const getproducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//view single product by id
const getproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//add new products
const createproduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update new product by id
const updateproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(400).json({ message: "prodoct not present" });
    }

    const productupdate = await Product.findById(id);
    res.status(200).json(productupdate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product by id
const deleteproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(400).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//export
module.exports = {
  getproduct,
  getproducts,
  createproduct,
  updateproduct,
  deleteproduct,
};
