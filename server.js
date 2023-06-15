const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
   cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
);

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const diamondSchema = new mongoose.Schema({
   name: String,
   price: Number,
   description: String,
   imageUrl: String,
});

const Diamond = mongoose.model("Diamond", diamondSchema);

app.get("/api/diamonds", async (req, res) => {
   const diamonds = await Diamond.find();
   res.json(diamonds);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
