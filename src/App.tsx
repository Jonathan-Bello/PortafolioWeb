import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommingSoon from "./pages/CommingSoon";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<CommingSoon />} />
        <Route path="aboutme" element={<CommingSoon />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
