import React, { useEffect, useReducer } from "react";
import "../styles/DiamondList.css";

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

const DiamondList = ({ categoryFilter }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

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

   const filterDiamonds = (category) => {
      if (!category) {
         return state.diamonds;
      }
      return state.diamonds.filter((diamond) => diamond.category === category);
   };

   const filteredDiamonds = filterDiamonds(categoryFilter);

   return (
      <div>
         {state.isLoading ? (
            <p>Loading...</p>
         ) : state.error ? (
            <p>Error: {state.error}</p>
         ) : (
            <ul>
               {filteredDiamonds.map((diamond) => (
                  <li key={diamond._id}>
                     {diamond.category} - {diamond.type} - {diamond.carat}{" "}
                     carats - {diamond.cut} cut - {diamond.color} color -{" "}
                     {diamond.clarity} clarity - ${diamond.price} -{" "}
                     <img src={diamond.image} alt={`${diamond.type} diamond`} />
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};

export default DiamondList;
