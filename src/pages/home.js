import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header";
import Me from "../assets/me.png";

export default function HomePage() {
  const style = {
    mainContainer: {
      backgroundAttachment: "fixed",
      backgroundImage: `url(${Me})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      minHeight: "100vh",
      minWidth: "100%",
    },
    navRow: {
      minHeight: "10vh",
      minWidth: "100%",
    },
    bodyRow: {
      minWidth: "100%",
    },
  };
  return (
    <Container style={style.mainContainer}>
      <Header />

      <Row style={style.bodyRow} id="body container">
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}></Col>
        <Col xs={12} md={4}></Col>
      </Row>
    </Container>
  );
}
