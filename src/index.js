import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import HomePage from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
