// components/DiamondShapeFilter.js

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DiamondShapeFilter.css";

const DiamondShapeFilter = () => {
   const navigate = useNavigate();
   const scrollRef = useRef();
   const diamondShapes = [
      {
         name: "Round",
         image: "path_to_round_image",
      },
      {
         name: "Cushion",
         image: "path_to_cushion_image",
      },
      {
         name: "Princess",
         image: "path_to_princess_image",
      },
      {
         name: "Emerald",
         image: "path_to_emerald_image",
      },
      {
         name: "Oval",
         image: "path_to_oval_image",
      },
      {
         name: "Asher",
         image: "path_to_asher_image",
      },
      {
         name: "Radiant",
         image: "path_to_radiant_image",
      },
      {
         name: "Marquise",
         image: "path_to_marquise_image",
      },
      {
         name: "Pear",
         image: "path_to_pear_image",
      },
      {
         name: "Heart",
         image: "path_to_heart_image",
      },
   ];

   const handleShapeClick = (shape) => {
      navigate(`/diamonds/shape/${shape}`);
   };

   const scroll = (scrollOffset) => {
      scrollRef.current.scrollBy({
         left: scrollOffset,
         behavior: "smooth",
      });
   };

   return (
      <div className="diamond-shape-filter">
         <div className="catchy-phrase">
            Sparkle With Your Perfect Shape! 💎 Click and Find Your Gem!
         </div>
         <div className="diamond-shape-container" ref={scrollRef}>
            {diamondShapes.map((shape, index) => (
               <div
                  key={index}
                  className="diamond-shape-item"
                  onClick={() => handleShapeClick(shape.name)}
               >
                  <img
                     src="https://assets.codepen.io/7125791/diamond-1199183_1280.jpg"
                     alt={shape.name}
                  />
                  <p>{shape.name}</p>
               </div>
            ))}
         </div>
         <button className="scroll-button left" onClick={() => scroll(-200)}>
            &lt;
         </button>
         <button className="scroll-button right" onClick={() => scroll(200)}>
            &gt;
         </button>
      </div>
   );
};

export default DiamondShapeFilter;
