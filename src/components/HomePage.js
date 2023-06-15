import React from "react";
import "../styles/HomePage.css";

const HomePage = () => {
   return (
      <div className="jumbotron">
         <div className="carousel">
            <div className="carousel-item">
               <img src="https://example.com/image1.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
               <img src="https://example.com/image2.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
               <img src="https://example.com/image3.jpg" alt="Third slide" />
            </div>
         </div>
      </div>
   );
};

export default HomePage;
