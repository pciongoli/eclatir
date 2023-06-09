const express = require("express");
const mongoose = require("mongoose");
const Diamond = require("./models/Diamond");
const User = require("./models/User");
const Ring = require("./models/Ring");
const Necklace = require("./models/Necklace");
const Bracelet = require("./models/Bracelet");
const Earring = require("./models/Earring");
const FeaturedProduct = require("./models/FeaturedProduct");

const cors = require("cors");

const app = express();
app.use(cors());

// server/server.js

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

// Register
app.post("/api/register", async (req, res) => {
   const { username, password } = req.body;

   if (!username || !password) {
      return res
         .status(400)
         .send({ message: "Username and password are required" });
   }

   const user = new User({ username, password });
   await user.save();
   res.status(201).send({ message: "User created" });
});

// Login
app.post("/api/login", async (req, res) => {
   const { username, password } = req.body;
   const user = await User.findOne({ username });

   if (!user) {
      return res.status(401).send({ message: "Invalid username or password" });
   }

   user.comparePassword(password, (err, isMatch) => {
      if (err || !isMatch) {
         return res
            .status(401)
            .send({ message: "Invalid username or password" });
      }
      // You can create and send a JWT token here for authentication
      res.status(200).send({ message: "Logged in" });
   });
});

// Get all rings
app.get("/api/rings", async (req, res) => {
   try {
      const rings = await Ring.find();
      res.status(200).send(rings);
   } catch (error) {
      res.status(500).send({ message: "Error fetching rings" });
   }
});

// Get all necklaces
app.get("/api/necklaces", async (req, res) => {
   const necklaces = await Necklace.find();
   res.json(necklaces);
});

// Get all bracelets
app.get("/api/bracelets", async (req, res) => {
   const bracelets = await Bracelet.find();
   res.json(bracelets);
});

// Get all earrings
app.get("/api/earrings", async (req, res) => {
   const earrings = await Earring.find();
   res.json(earrings);
});

// Get all specials
app.get("/api/specials", async (req, res) => {
   try {
      const featuredProducts = await FeaturedProduct.find();
      res.status(200).send(featuredProducts);
   } catch (error) {
      res.status(500).send({ message: "Error fetching featured products" });
   }
});

// Listen on port 6000
app.listen(6000, () => console.log("Server running on port 6000"));
