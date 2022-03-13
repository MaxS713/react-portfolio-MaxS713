import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
