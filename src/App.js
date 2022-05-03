import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
