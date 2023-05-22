import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/home";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
