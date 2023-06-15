// src/components/Navbar.js
import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setCategoryFilter }) => {
   return (
      <nav>
         <Link to="/" className="title">
            Eclatir
         </Link>
         <div className="buttons">
            <div className="category-buttons">
               <button onClick={() => setCategoryFilter("Lab Diamond")}>
                  Lab Diamonds
               </button>
               <button onClick={() => setCategoryFilter("Natural Diamond")}>
                  Natural Diamonds
               </button>
            </div>
            <div className="auth-buttons">
               <button>Sign Up</button>
               <button>Sign In</button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
