import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import {  Route, Routes } from "react-router-dom";
import Productinfo from "./pages/productinfo/Productinfo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./pages/cart/Cart";

import Like from "./pages/like/Like";


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Productinfo />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/like" element={<Like/>}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
