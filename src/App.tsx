import GlobalStyle from "./styles/GlobalStyle";
import About from "./pages/About";
import Nav from "./components/Nav";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div style={{alignItems: "center"}} className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/about" />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/work/:id" element={<MovieDetail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
