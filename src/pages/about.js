import { Container } from "react-bootstrap";
import Header from "../components/header";
import GitHub from "../components/github";

export default function About() {
  const style = {
    mainContainer: {
      minHeight: "100vh",
      minWidth: "100%",
    },
  };

  return (
    <Container style={style.mainContainer}>
      <Header />
      <GitHub />
    </Container>
  );
}
