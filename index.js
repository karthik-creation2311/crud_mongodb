const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

app.post("/api/create", async (req, res) => {
    // console.log(req.body);
    // res.send(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message : error.message});
    }




//   try {
//     const product = Product.create
//     Product.res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
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
