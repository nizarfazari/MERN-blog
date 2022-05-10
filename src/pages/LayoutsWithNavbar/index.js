import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../component";
import "./LayoutsWithNavbar.scss";

const LayoutsWithNavbar = () => {
  return (
    <div>
      <div className="main-app-wrapper">
        {/* Your navbar component */}
        <Header />

        <div className="content-wrapper">
          {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
          <Outlet />
        </div>

        {/* You can add a footer to get fancy in here :) */}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutsWithNavbar;
