import { Container, Row, Col, Card } from "react-bootstrap";

export default function Portfolio() {
  const cardHeight = ["60vh", "30vh", "50vh"];

  const style = {
    card: {
      margin: "5px",
      height: "100%",
      width: "100%",
      backgroundColor: "black",
    },
    col: {
      paddingRight: "0px",
      paddingLeft: "0px",
      marginLeft: "2.5px",
      marginRight: "2.5px",
    },
  };

  return (
    <Container style={{ padding: "20px", width: "100%", height: "100%" }}>
      <Row>
        <Col style={style.col}>
          <Container style={{ height: cardHeight[1], padding: 0 }}>
            <Card style={style.card}></Card>
          </Container>
          <Container style={{ height: cardHeight[0], padding: 0 }}>
            <Card style={style.card}></Card>{" "}
          </Container>
        </Col>
        <Col style={style.col}>
          <Container style={{ height: cardHeight[1], padding: 0 }}>
            <Card style={style.card}></Card>
          </Container>
          <Container style={{ height: cardHeight[2], padding: 0 }}>
            <Card style={style.card}></Card>{" "}
          </Container>
          <Container style={{ height: cardHeight[0], padding: 0 }}>
            <Card style={style.card}></Card>{" "}
          </Container>
        </Col>
        <Col style={style.col}>
          <Container style={{ height: cardHeight[2], padding: 0 }}>
            <Card style={style.card}></Card>
          </Container>
          <Container style={{ height: cardHeight[1], padding: 0 }}>
            <Card style={style.card}></Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
