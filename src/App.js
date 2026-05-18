import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.js';
import Home from './pages/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import FAQs from './pages/FAQs/FAQs.js';
import ScrollToHash from './components/ScrollToHash/ScrollToHash.js';



function App() {

  return (

    <div className="App">
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        
    
      
        
      </Routes>
      <Footer />
    </div>



  );
}

export default App;
