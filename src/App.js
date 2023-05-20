import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Work from "../src/components/timeline";

import "./App.css";
import HomePage from "./pages/home";
import ThemeProvider from "react-bootstrap/ThemeProvider";

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
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
