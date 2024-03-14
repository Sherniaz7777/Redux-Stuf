import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Hero from "./components/hero/Hero";
import Main2 from "./components/main2/Main2";
import Main3 from "./components/main3/Main3";

const App = () => {
  return (
    <div>
      <Header />
         {/* <Home/> */}

         <Hero/>
         <Main2/>
         <Main3/>
      <Footer />
    </div>
  );
};

export default App;
