import React, { useState, useEffect } from "react";
import "../styles/Specials.css";

const Specials = () => {
   const [specialProducts, setSpecialProducts] = useState([]);

   useEffect(() => {
      const fetchSpecialProducts = async () => {
         // Use the correct API endpoint to fetch special items
         const response = await fetch("/api/specials");
         const data = await response.json();
         setSpecialProducts(data);
      };
      fetchSpecialProducts();
   }, []);

   return (
      <div className="special-products">
         <h2>Special Products</h2>
         <div className="products-grid">
            {specialProducts.map((product) => (
               <div className="product-item" key={product._id}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>Price: ${product.price}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Specials;
