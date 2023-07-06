import React, { useEffect, useReducer } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
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
   const { shape } = useParams(); // Get the shape from the route params

   useEffect(() => {
      const fetchDiamonds = async () => {
         try {
            let apiUrl = "/api/diamonds";
            if (shape) {
               apiUrl = `/api/diamonds/shape/${shape}`; // Use the shape in the URL if it is provided
            }
            const response = await fetch(apiUrl);

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
   }, [shape]);

   const categoryFilter = location.state?.category;
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
               <li key={diamond._id} className="product-item">
                  <Link to={`/product/diamonds/${diamond._id}`}>
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
