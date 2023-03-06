import React from "react";
import Footer from "./Footer";
import Narbar from "./Narbar";
const Layout = ({ children }) => {
  return (
    <>
      <Narbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
