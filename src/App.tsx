import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import './App.scss';
import Footer from './pages/Footer';
import Frontpage from './pages/Frontpage';

import Projects from './pages/Projects';
import Products from './pages/Products';
import Roadmap from './pages/Roadmap';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact';
import MarketPlace from './pages/MarketPlace/MarketPlace';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path='/' element={<Frontpage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/products' element={<Products />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/marketplace' element={<MarketPlace />} />

          <Route path="*" element={<Navigate to="/" replace />} />



        </Routes>
      <Footer></Footer>
    </BrowserRouter>


  );
}

export default App;
