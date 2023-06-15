import React, { useState } from "react";
import Layout from "./components/Layout";
import DiamondList from "./components/DiamondList";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
   const [categoryFilter, setCategoryFilter] = useState(null);

   return (
      <Layout>
         <Navbar setCategoryFilter={setCategoryFilter} />
         <HomePage />
         <DiamondList categoryFilter={categoryFilter} />
      </Layout>
   );
}

export default App;
