import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Jumbotron.css";

const Jumbotron = () => {
   const navigate = useNavigate();

   const handleButtonClick = (category) => {
      navigate("/diamonds", { state: { category } });
   };

   return (
      <div className="jumbotron">
         <h1>Welcome to Eclatir</h1>
         <p>
            Discover the perfect diamond at Eclatir. Our diamonds are crafted
            with precision and care, ensuring the highest quality and
            brilliance. Choose from Lab Diamonds for environmentally sustainable
            choice or Natural Diamonds for the traditional exquisite gemstones.
         </p>
         <div className="buttons">
            <button onClick={() => handleButtonClick("Lab Diamond")}>
               Shop Lab Diamonds
            </button>
            <button onClick={() => handleButtonClick("Natural Diamond")}>
               Shop Natural Diamonds
            </button>
         </div>
      </div>
   );
};

export default Jumbotron;
