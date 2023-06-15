import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
   const [diamonds, setDiamonds] = useState([]);

   useEffect(() => {
      const fetchDiamonds = async () => {
         try {
            const response = await axios.get("/api/diamonds");
            setDiamonds(response.data);
         } catch (error) {
            console.error("Error fetching diamonds:", error);
         }
      };

      fetchDiamonds();
   }, []);

   return (
      <div>
         <h1>Eclatir Diamonds</h1>
         <ul>
            {diamonds.map((diamond) => (
               <li key={diamond._id}>
                  <img
                     src={diamond.imageUrl}
                     alt={diamond.name}
                     style={{ width: "100px" }}
                  />
                  <h3>{diamond.name}</h3>
                  <p>{diamond.description}</p>
                  <p>${diamond.price}</p>
               </li>
            ))}
         </ul>
      </div>
   );
}

export default HomePage;
