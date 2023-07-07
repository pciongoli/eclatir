import React, { useState, useReducer } from "react";
import "../styles/DiamondCustomizer.css";

const initialFilterState = {
   type: "",
   minCarat: 0.2,
   maxCarat: 5,
   cut: "",
   color: "",
   clarity: "",
   minPrice: 500,
   maxPrice: 10000,
};

const filterReducer = (state, action) => {
   switch (action.type) {
      case "SET_FILTER":
         return { ...state, [action.name]: action.value };
      default:
         return state;
   }
};

const DiamondCustomizer = ({ onFilter }) => {
   const [filters, dispatch] = useReducer(filterReducer, initialFilterState);
   const [visibleFilter, setVisibleFilter] = useState(null);

   const cuts = ["Excellent", "Very Good", "Good", "Fair", "Poor"];
   const colors = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
   const clarities = ["IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1"];
   const types = ["Round", "Princess"];

   const handleChange = (filterName, value) => {
      dispatch({ type: "SET_FILTER", name: filterName, value: value });
   };

   const toggleFilter = (filterName) => {
      setVisibleFilter(visibleFilter === filterName ? null : filterName);
   };

   return (
      <div className="diamond-customizer">
         <h3>Customize your Diamond</h3>
         <div className="filters">
            <div
               className={`filter-btn ${
                  visibleFilter === "type" ? "active" : ""
               }`}
               onClick={() => toggleFilter("type")}
            >
               Type: {filters.type || "Any"}
               {visibleFilter === "type" && (
                  <div className="filter-options">
                     {types.map((type, index) => (
                        <button
                           key={index}
                           onClick={() => handleChange("type", type)}
                        >
                           {type}
                        </button>
                     ))}
                  </div>
               )}
            </div>

            <div
               className={`filter-btn ${
                  visibleFilter === "cut" ? "active" : ""
               }`}
               onClick={() => toggleFilter("cut")}
            >
               Cut: {filters.cut || "Any"}
               {visibleFilter === "cut" && (
                  <div className="filter-options">
                     {cuts.map((cut, index) => (
                        <button
                           key={index}
                           onClick={() => handleChange("cut", cut)}
                        >
                           {cut}
                        </button>
                     ))}
                  </div>
               )}
            </div>

            <div
               className={`filter-btn ${
                  visibleFilter === "color" ? "active" : ""
               }`}
               onClick={() => toggleFilter("color")}
            >
               Color: {filters.color || "Any"}
               {visibleFilter === "color" && (
                  <div className="filter-options">
                     {colors.map((color, index) => (
                        <button
                           key={index}
                           onClick={() => handleChange("color", color)}
                        >
                           {color}
                        </button>
                     ))}
                  </div>
               )}
            </div>

            <div
               className={`filter-btn ${
                  visibleFilter === "clarity" ? "active" : ""
               }`}
               onClick={() => toggleFilter("clarity")}
            >
               Clarity: {filters.clarity || "Any"}
               {visibleFilter === "clarity" && (
                  <div className="filter-options">
                     {clarities.map((clarity, index) => (
                        <button
                           key={index}
                           onClick={() => handleChange("clarity", clarity)}
                        >
                           {clarity}
                        </button>
                     ))}
                  </div>
               )}
            </div>

            <div
               className={`filter-btn ${
                  visibleFilter === "carat" ? "active" : ""
               }`}
               onClick={() => toggleFilter("carat")}
            >
               Carat: {filters.minCarat} - {filters.maxCarat}
               {visibleFilter === "carat" && (
                  <div className="filter-options">
                     <span>
                        {filters.minCarat} - {filters.maxCarat}
                     </span>
                     <input
                        type="range"
                        min="0.2"
                        max="5"
                        step="0.1"
                        value={filters.minCarat}
                        onChange={(e) =>
                           handleChange("minCarat", parseFloat(e.target.value))
                        }
                     />
                     <input
                        type="range"
                        min="0.2"
                        max="5"
                        step="0.1"
                        value={filters.maxCarat}
                        onChange={(e) =>
                           handleChange("maxCarat", parseFloat(e.target.value))
                        }
                     />
                  </div>
               )}
            </div>

            <div
               className={`filter-btn ${
                  visibleFilter === "price" ? "active" : ""
               }`}
               onClick={() => toggleFilter("price")}
            >
               Price: ${filters.minPrice} - ${filters.maxPrice}
               {visibleFilter === "price" && (
                  <div className="filter-options">
                     <span>
                        ${filters.minPrice} - ${filters.maxPrice}
                     </span>
                     <input
                        type="range"
                        min="500"
                        max="10000"
                        step="100"
                        value={filters.minPrice}
                        onChange={(e) =>
                           handleChange("minPrice", parseInt(e.target.value))
                        }
                     />
                     <input
                        type="range"
                        min="500"
                        max="10000"
                        step="100"
                        value={filters.maxPrice}
                        onChange={(e) =>
                           handleChange("maxPrice", parseInt(e.target.value))
                        }
                     />
                  </div>
               )}
            </div>
         </div>
         <button onClick={() => onFilter(filters)}>Find My Diamond</button>
      </div>
   );
};

export default DiamondCustomizer;
