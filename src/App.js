import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact.jsx";
import Home from "./components/home/home";
import Team from "./components/team/team";
import Services from "./components/services/services";



function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

};

export default App;
