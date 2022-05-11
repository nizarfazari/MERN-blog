import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateBlog, DetailBlog, Home, LayoutsWithNavbar, Login, MainApp, Register } from "../../pages";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog/:id" element={<CreateBlog />} />
          <Route path="/create-blog/" element={<CreateBlog />} />
          <Route path="/detail-blog/:id" element={<DetailBlog />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Routing;
