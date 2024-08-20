const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

//add a values to database
app.post("/api/create", async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//read all values from database
app.get("/api/values", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//read values by id
app.get("/api/value/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the values by id in database
app.put("/api/value/:id",async(req,res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id , req.body);

    if(!product){
      res.status(400).json({message:"prodoct not present"});
    }

    const productupdate = await Product.findById(id);
    res.status(200).json(productupdate);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete values by id
app.delete("/api/value/:id",async(req,res) => {
  try {
    const{ id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  if(!product){
    res.status(400).json({message : "product not found"});
  }

  res.status(200).json({ message : "product deleted succesfully"});
    
  } catch (error) {
    res.status(500).json({message : error.message});
  }


});


mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    console.log("connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed to database!");
  });
