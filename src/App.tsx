import GlobalStyle from "./styles/GlobalStyle";
import About from "./pages/About";
import Nav from "./components/Nav";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/about"/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
