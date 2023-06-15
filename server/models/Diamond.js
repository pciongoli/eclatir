const mongoose = require("mongoose");

const DiamondSchema = new mongoose.Schema({
   category: {
      type: String,
      enum: ["Lab Diamond", "Natural Diamond"],
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   carat: {
      type: Number,
      required: true,
   },
   cut: {
      type: String,
      enum: ["Excellent", "Very Good", "Good", "Fair", "Poor"],
      required: true,
   },
   color: {
      type: String,
      required: true,
   },
   clarity: {
      type: String,
      required: true,
   },
   price: {
      type: Number,
      required: true,
   },
   image: {
      type: String,
   },
});

const Diamond = mongoose.model("Diamond", DiamondSchema);

module.exports = Diamond;
