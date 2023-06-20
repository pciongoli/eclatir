import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
   const [showDropdown, setShowDropdown] = useState(false);
   const { isAuthenticated } = useAuth(); // get the isAuthenticated from context
   const navigate = useNavigate();

   const handleButtonClick = (category) => {
      navigate("/diamonds", { state: { category } });
      setShowDropdown(false);
   };

   return (
      <nav>
         <div className="navbar-top">
            <div className="top-section">
               <Link to="/" className="title">
                  Eclatir
               </Link>
               <div className="auth-buttons">
                  {isAuthenticated ? (
                     <Link to="/account">
                        <button>Account</button>
                     </Link>
                  ) : (
                     <>
                        <Link to="/register">
                           <button>Sign Up</button>
                        </Link>
                     </>
                  )}
               </div>
            </div>
         </div>
         <div className="buttons">
            <div className="category-buttons">
               <div className="dropdown">
                  <button onClick={() => setShowDropdown(!showDropdown)}>
                     Diamonds
                  </button>
                  {showDropdown && (
                     <div className="dropdown-content">
                        <button onClick={() => handleButtonClick(null)}>
                           All Diamonds
                        </button>
                        <button
                           onClick={() => handleButtonClick("Lab Diamond")}
                        >
                           Lab Diamonds
                        </button>
                        <button
                           onClick={() => handleButtonClick("Natural Diamond")}
                        >
                           Natural Diamonds
                        </button>
                     </div>
                  )}
               </div>
               <Link to="/rings">
                  <button>Rings</button>
               </Link>
               <Link to="/necklaces">
                  <button>Necklaces</button>
               </Link>
               <Link to="/bracelets">
                  <button>Bracelets</button>
               </Link>
               <Link to="/earrings">
                  <button>Earrings</button>
               </Link>
               <Link to="/specials">
                  <button>Specials</button>
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
