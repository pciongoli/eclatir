import React from "react";
import "../styles/FeaturedProducts.css";

const FeaturedProducts = () => {
   return (
      <div className="featured-products">
         <div className="featured-info">
            <h2>Featured Products</h2>
            <p>
               Check out some of our featured products and find the perfect
               diamond for you.
            </p>
         </div>
         <div className="product-slider">
            {/* Placeholder for slider with products */}
            <p>Product Slider goes here</p>
         </div>
      </div>
   );
};

export default FeaturedProducts;
