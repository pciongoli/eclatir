const express = require("express");
const mongoose = require("mongoose");
const Diamond = require("./models/Diamond");
const cors = require("cors");

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/diamond-store", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

// Middleware for parsing JSON
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
   res.send("Welcome to the Diamond Store API");
});

// Fetch all diamonds
app.get("/api/diamonds", async (req, res) => {
   try {
      const diamonds = await Diamond.find();
      res.status(200).send(diamonds);
   } catch (error) {
      res.status(500).send({ message: "Error fetching diamonds" });
   }
});

app.post("/api/diamonds", async (req, res) => {
   const { name, carat, price } = req.body;
   const diamond = new Diamond({ name, carat, price });
   await diamond.save();
   res.status(201).send(diamond);
});

// Listen on port 5000
app.listen(6000, () => console.log("Server running on port 6000"));
