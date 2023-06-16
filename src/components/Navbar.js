// src/components/Navbar.js
import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = ({ setCategoryFilter }) => {
   const [showDropdown, setShowDropdown] = useState(false);
   const { isAuthenticated } = useAuth(); // get the isAuthenticated from context

   return (
      <nav>
         <div className="navbar-top">
            <div className="top-section">
               <Link to="/" className="title">
                  Eclatir
               </Link>
               <div className="auth-buttons">
                  {isAuthenticated ? (
                     <div className="dropdown">
                        <img src="profile_icon_url" alt="Profile" />{" "}
                        {/* Assuming you have profile icon URL */}
                        <div className="dropdown-content">
                           <a href="/profile">Profile</a>
                           <a href="/logout">Logout</a>
                        </div>
                     </div>
                  ) : (
                     <>
                        <Link to="/login">
                           <button>Sign In</button>
                        </Link>
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
                        <Link
                           to="/diamonds"
                           onClick={() => setCategoryFilter(null)}
                        >
                           All Diamonds
                        </Link>
                        <Link
                           to="/diamonds"
                           onClick={() => setCategoryFilter("Lab Diamond")}
                        >
                           Lab Diamonds
                        </Link>
                        <Link
                           to="/diamonds"
                           onClick={() => setCategoryFilter("Natural Diamond")}
                        >
                           Natural Diamonds
                        </Link>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
