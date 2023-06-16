// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DiamondList from "./components/DiamondList";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from "./AuthContext";

function App() {
   const [categoryFilter, setCategoryFilter] = useState(null);

   return (
      <AuthProvider>
         <Router>
            <Layout>
               <Navbar setCategoryFilter={setCategoryFilter} />
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                     path="/diamonds"
                     element={<DiamondList categoryFilter={categoryFilter} />}
                  />
                  <Route path="/register" element={<RegisterForm />} />
                  <Route path="/login" element={<LoginForm />} />
               </Routes>
            </Layout>
         </Router>
      </AuthProvider>
   );
}

export default App;
