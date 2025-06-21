import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import AboutUsPage from "./pages/Aboutuspage";
import ShopPage from "./pages/Productpage";
import BulkOrderPage from "./pages/BulkOrderPage";
import AuthPage from "./pages/AuthPage";
import OrderPage from "./pages/OrderPage";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/bulk-order" element={<BulkOrderPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
