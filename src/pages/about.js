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
    },
  };

  const content = [
    {
      img: Me,
    },
    {
      img: LilMe,
    },
    {
      img: Oliver1,
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
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            backgroundImage: `url(${src.img})`,
          }}
        >
          <Container id="card-text" style={style.cardText}>
            <Row>
              <Col sm={0} md={6}></Col>
              <Col sm={12} md={6}>
                <h1>Headline Text</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  mi arcu, venenatis ac ullamcorper ac, tincidunt a libero.
                  Vivamus convallis sem ut magna dignissim sagittis. Integer
                  lacus mauris, placerat eu rhoncus sed, consectetur suscipit
                  massa. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p>
              </Col>
            </Row>
          </Container>
        </Card>
      ))}
    </Container>
  );
}
