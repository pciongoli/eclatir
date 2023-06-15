// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DiamondList from "./components/DiamondList";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
   const [categoryFilter, setCategoryFilter] = useState(null);

   return (
      <Router>
         <Layout>
            <Navbar setCategoryFilter={setCategoryFilter} />
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route
                  path="/diamonds"
                  element={<DiamondList categoryFilter={categoryFilter} />}
               />
            </Routes>
         </Layout>
      </Router>
   );
}

export default App;
