import { Container } from "react-bootstrap";
import Header from "../components/header";

export default function Contact() {
  const style = {
    mainContainer: {
      minHeight: "100vh",
      minWidth: "100%",
    },
  };

  return (
    <Container style={style.mainContainer}>
      <Header />
    </Container>
  );
}
