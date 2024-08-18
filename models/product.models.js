import mongoose, { model } from "mongoose";

const ProductSchema = mongoose.Schema({
    name:{
        type : String,
        require :[true,"Product name required"],
    },
    quantity :{
        type : Number,
        require : true,
        default :0
    },
    price : {
        type : Number,
        require : true,
        default :0
    },
    image :{
        type : String,
        require : false,
    }
},
{
    Timestamp : true,
});

const Product = mongoose.model("Product",ProductSchema);

model.export = Product;