import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Work from "./pages/work";

import "./App.css";

function App() {
  // const style = {
  //   container: {
  //     minHeight: "100%",
  //     minWidth: "100%",
  //     padding: "auto",
  //     marginLeft: 0,
  //     marginRight: 0,
  //     justifyContent: "center",
  //   },
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Work />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;