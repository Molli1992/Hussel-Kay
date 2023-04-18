import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact.jsx";
import Home from "./components/home/home";

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

};

export default App;
