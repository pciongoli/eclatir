import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Change useHistory to useNavigate
import { useAuth } from "../AuthContext";

const LoginForm = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const { signIn } = useAuth();
   const navigate = useNavigate(); // Change here

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post("/api/login", {
            username,
            password,
         });
         if (response.data.message === "Logged in") {
            alert("Logged in Successfully");
            signIn();
            navigate("/"); // Change here
         } else {
            alert("Invalid credentials");
         }
      } catch (error) {
         alert("Error logging in");
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
         </form>
         <p>
            Don't have an account? <Link to="/register">Register</Link>
         </p>
      </div>
   );
};

export default LoginForm;
