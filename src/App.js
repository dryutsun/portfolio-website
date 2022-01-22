import logo from "./logo.svg";
import "./App.css";
import { VStack, Flex, Heading } from "@chakra-ui/react";
import NavBar from "./components/Header";
import IndexPage from "./components/IndexPage";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "./components/pages/Blog";
import AboutMe from "./components/pages/AboutMe"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
