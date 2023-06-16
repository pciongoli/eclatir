// components/HomePage.js

import React from "react";
import "../styles/HomePage.css";

import Jumbotron from "./Jumbotron";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = () => {
   return (
      <div>
         <Jumbotron />
         <FeaturedProducts />
      </div>
   );
};

export default HomePage;
