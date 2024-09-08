import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/AboutUs";
import MenuPage from "./pages/Menuu/MenuPage";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Reservation from "./pages/Reservation/Reservation";
import { CartProvider } from "./components/Layouts/CartContext"; // Import CartProvider
import Cart from "./pages/Menuu/Cart";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import StaffDashboard from "./pages/Staff/StaffDashboard";

function App() {
  return (
    <CartProvider>  {/* Wrap the app in CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/staffdashboard" element={<StaffDashboard/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );            
}

export default App;
