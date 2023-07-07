import React, { useState } from "react";

const DiamondCustomizer = ({ onFilter }) => {
   const [filters, setFilters] = useState({
      type: "",
      minCarat: "",
      maxCarat: "",
      cut: "",
      color: "",
      clarity: "",
      minPrice: "",
      maxPrice: "",
   });

   const handleChange = (e) => {
      setFilters({
         ...filters,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = () => {
      onFilter(filters);
   };

   return (
      <div>
         <h3>Customize your Diamond</h3>

         <label>
            Shape:
            <select name="type" value={filters.type} onChange={handleChange}>
               <option value="">Any</option>
               <option value="round">Round</option>
               <option value="princess">Princess</option>
               {/* Add other shapes here */}
            </select>
         </label>

         <label>
            Min Carat:
            <input
               type="number"
               name="minCarat"
               value={filters.minCarat}
               onChange={handleChange}
            />
         </label>

         <label>
            Max Carat:
            <input
               type="number"
               name="maxCarat"
               value={filters.maxCarat}
               onChange={handleChange}
            />
         </label>

         <label>
            Cut:
            <select name="cut" value={filters.cut} onChange={handleChange}>
               <option value="">Any</option>
               <option value="Excellent">Excellent</option>
               <option value="Very Good">Very Good</option>
               <option value="Good">Good</option>
               <option value="Fair">Fair</option>
               <option value="Poor">Poor</option>
            </select>
         </label>

         <label>
            Color:
            <input
               type="text"
               name="color"
               value={filters.color}
               onChange={handleChange}
            />
         </label>

         <label>
            Clarity:
            <input
               type="text"
               name="clarity"
               value={filters.clarity}
               onChange={handleChange}
            />
         </label>

         <label>
            Min Price:
            <input
               type="number"
               name="minPrice"
               value={filters.minPrice}
               onChange={handleChange}
            />
         </label>

         <label>
            Max Price:
            <input
               type="number"
               name="maxPrice"
               value={filters.maxPrice}
               onChange={handleChange}
            />
         </label>

         <button onClick={handleSubmit}>Find My Diamond</button>
      </div>
   );
};

export default DiamondCustomizer;
