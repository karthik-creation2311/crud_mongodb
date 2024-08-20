const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const router = require("./route/product.route.js");

app.use(express.json());

//use crud app as middle ware
app.use("/api/product", router);
app.get("/", (req, res) => {
  res.send("Hello from Node API server");
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
