import React from 'react';
import Header from "../../../../clientt/client/src/assets/components/header.js";
import Footer from "../../../../clientt/client/src/assets/components/footer.jsx";
import { Outlet } from "react-router-dom";

function Shared() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Shared;