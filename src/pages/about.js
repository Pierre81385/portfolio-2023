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
      height: width > 965 ? "100%" : "50%",
      maxWidth: width > 965 ? "50%" : "100%",
      display: "flex",
    },
  };

  const content = [
    {
      img: Me,
      title: "Hey, I'm Peter!",
      text: "I'm a full stack developer with a passion for learning with unending curiosity that drives me to ask, 'How'd they do that?' on a daily basis. I currently work for ClickUp as a Technical Support Specialist, project basis QA Specialist, and API Subject Matter Expert. Whenn I'm not doing a deep dive feature investigation, you can find me writing postman scripts or exploring various api endpoints to see where they lead!",
    },
    {
      img: LilMe,
      title: "From a young age...",
      text: "I was always a nerd at heart, and this consistent interest has carried me from building data processing formulas in spreadsheets, to pulling reports with MySql queries, to building full stack app projects. I graduated from CUNY Baruch College with a BBA in Economics, and after exploring a variety of career paths, I decided to take the plunge in a coding bootcamp with the University of Denver.  Following this I was happy to find new skills in self learning that have propelled me from the MERN stack foundation of the bootcamp curriculum to new skills using Flutter and Dart, Amazon Web Services, and Google Firebase to name a few.",
    },
    {
      img: Oliver1,
      title: "This is my dog Oliver",
      text: "How do I tell my dog I need to do this to afford his lavish lifestyle?",
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
