import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  image:{
    type:String,
    required: true
  }
},{
  timestamps: true // createdAt and updatedAt field will be added in the document of the collections
});

const Product = mongoose.model('Product', productSchema);
export default Product;