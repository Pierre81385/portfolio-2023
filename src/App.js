import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Main from "./pages/main";

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
