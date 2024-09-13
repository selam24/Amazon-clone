import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Result from './pages/Results/Result'
import SignIn from './pages/Auth/SignIn'



function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<SignIn />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryName" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default Routing;

