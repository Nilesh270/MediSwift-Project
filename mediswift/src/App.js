import React from "react";
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LabTests from "./pages/LabTests";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Singleproduct from "./pages/Singleproduct";


const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/labtests" element={<LabTests />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </Router>
  );
};

export default App;
