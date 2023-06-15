// componenets/Layout.js

import React from "react";

const Layout = ({ children }) => {
   return (
      <div>
         <main>{children}</main>
      </div>
   );
};

export default Layout;
