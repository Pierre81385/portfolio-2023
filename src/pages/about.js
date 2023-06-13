import { Container, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import LilMe from "../assets/lilme.png";
import Me from "../assets/me.png";
import Oliver1 from "../assets/oliver1.jpg";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const style = {
    container: {
      flexDirection: "column",
      overflow: "scroll",
      maxWidth: width,
      height: height,
      justifyContent: "center",
    },

    cardText: {
      textAlign: width > 720 ? "right" : "center",
      textTransform: "lowercase",
      fontStyle: "italic",
    },
    img: {
      objectFit: "contain",
      height: width > 720 ? "100%" : "50%",
      maxWidth: width > 720 ? "50%" : "100%",
      display: "flex",
    },
  };

  const content = [
    {
      img: Me,
      title: "Please excuse the mess!",
      text: "This page is currently under re-construction. Stay tuned for a refreshed and more mobile responsive layout!",
    },
    {
      img: LilMe,
      title: "From a young age...",
      text: "I've always been interested in tech, and here's the proof. For Halloween one year my dad helped me become a TV, and I'll be forever greatful if only just for this picture.",
    },
    {
      img: Oliver1,
      title: "This is Oliver",
      text: "I need to work to afford my dog's lavish lifestyle. But how can I say 'no' to a cute like this?",
    },
  ];
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container style={style.container} fluid={true}>
      {content.map((src) => (
        <Card
          key={src.img}
          style={{
            flexShrink: 0,
            width: "80%",
            height: "80%",
            borderRadius: "10px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            marginBottome: "20px",
            flexDirection: "column-reverse",

            // backgroundSize: "contain",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "left bottom",
            // backgroundImage: `url(${src.img})`,
          }}
        >
          <Card.Img variant="top" src={src.img} style={style.img}></Card.Img>
          <Card.ImgOverlay>
            <Card.Title style={style.cardText}>{src.title}</Card.Title>
            <Card.Body>
              <Row>
                <Col></Col>
                <Col sm={2} md={6}></Col>
                <Col style={style.cardText}>{src.text}</Col>
              </Row>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      ))}
    </Container>
  );
}
