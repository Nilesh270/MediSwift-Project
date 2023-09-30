import React from "react";
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LabTests from "./pages/LabTests";
import Cart from "./pages/Cart";
import Singleproduct from "./pages/Singleproduct";
import MultipleShops from "./pages/MultipleShops";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singleproduct from "./pages/Singleproduct";

const App = () => {
  const user = true;
  return (
    // <>
    //   <Home />
    //   <Blogs />
    //   <Login />
    //   <Register />
    //   <LabTests />
    //   <Cart />
    //   <Singleproduct />
    // </>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/labtests" element={<LabTests />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nearbypharmacies" element={<MultipleShops />} />
      </Routes>
    </Router>
  );
};

export default App;
