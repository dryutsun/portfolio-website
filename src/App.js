import logo from "./logo.svg";
import "./App.css";
import { VStack, Flex, Heading } from "@chakra-ui/react";
import NavBar from "./components/Header";
import IndexPage from "./components/IndexPage";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
