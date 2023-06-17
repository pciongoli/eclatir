import React, { useEffect, useReducer } from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/DiamondList.css";
import "../styles/ProductList.css";

const initialState = {
   diamonds: [],
   isLoading: true,
   error: null,
};

const reducer = (state, action) => {
   switch (action.type) {
      case "FETCH_SUCCESS":
         return {
            ...state,
            isLoading: false,
            diamonds: action.payload,
         };
      case "FETCH_ERROR":
         return {
            ...state,
            isLoading: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

const DiamondList = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const location = useLocation();
   const categoryFilter = location.state?.category;

   useEffect(() => {
      const fetchDiamonds = async () => {
         try {
            const response = await fetch("/api/diamonds");
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }
            const data = await response.json();
            dispatch({ type: "FETCH_SUCCESS", payload: data });
         } catch (error) {
            dispatch({ type: "FETCH_ERROR", payload: error.message });
         }
      };
      fetchDiamonds();
   }, []);

   const filteredDiamonds = state.diamonds.filter(
      (diamond) => !categoryFilter || diamond.category === categoryFilter
   );

   return (
      <ul className="product-list">
         {state.isLoading ? (
            <p>Loading...</p>
         ) : state.error ? (
            <p>Error: {state.error}</p>
         ) : (
            filteredDiamonds.map((diamond) => (
               <li key={diamond.id} className="product-item">
                  <Link to={`/diamond/${diamond._id}`}>
                     <img src={diamond.image} alt={`${diamond.type} diamond`} />
                     <h4>{diamond.type}</h4>
                  </Link>
                  <p>
                     {diamond.carat} carats - {diamond.cut} cut -{" "}
                     {diamond.color} color - {diamond.clarity} clarity - $
                     {diamond.price}
                  </p>
               </li>
            ))
         )}
      </ul>
   );
};

export default DiamondList;
