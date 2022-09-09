import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chiste from "./pages/Chiste";
import CommingSoon from "./pages/CommingSoon";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<CommingSoon />} />
        <Route path="aboutme" element={<CommingSoon />} />
        <Route path="contact" element={<Contact />} />
        <Route path="chistesin" element={<Chiste />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
