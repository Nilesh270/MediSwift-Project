import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LabTests from "./pages/LabTests";
import Cart from "./pages/Cart";
import MultipleShops from "./pages/MultipleShops";
import Products from "./pages/Products";
// import Singleproduct from "./pages/Singleproduct";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/labtests" element={<LabTests />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nearbypharmacies" element={<MultipleShops />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
  );
};

export default App;
