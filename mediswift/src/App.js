import React from "react";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LabTests from "./pages/LabTests";
import Cart from "./pages/Cart";
import Singleproduct from './pages/Singleproduct'

const App = () => {
  return (
    <>
      <Home />
      <Blogs />
      <Login />
      <Register />
      <LabTests />
      <Cart/>
      <Singleproduct/>
    </>
  );
};
export default App;
