import "./App.css";
import NavBar from "./components/Header";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/pages/Blog";
import AboutMe from "./components/pages/AboutMe"
import Contact from "./components/pages/Contacts";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
