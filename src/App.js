import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Main from "./pages/main";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import CommentList from "./components/CommentList";
import Edit from "./components/edit";
import Create from "./components/create";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Main />
    </ThemeProvider>
  );
}

export default App;
