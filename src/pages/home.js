import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Me from "../assets/me.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Work from "../components/timeline";

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const style = {
    imageContainer: {
      backgroundAttachment: "fixed",
      backgroundImage: `url(${Me})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      minHeight: "100vh",
      minWidth: "100%",
      //zIndex: "1",
      position: "relative",
    },
    backContainer: {
      minHeight: "100vh",
      minWidth: "100%",
      //zIndex: "-1",
      position: "absolute",
    },
    carousel: {
      minHeight: "100vh",
      minWidth: "100%",
      //zIndex: "0",
      position: "absolute",
    },
    row: {
      minHeight: "100%",
      minWidth: "100%",
    },

    navRow: {
      minHeight: "10vh",
      minWidth: "100%",
    },

    mainNav: {
      marginLeft: "auto",
      marginRight: "0",
    },
    nav: {
      justifyContent: "center",
    },
    button: {
      textDecoration: "none",
      color: "black",
    },
  };
  return (
    <Container style={style.backContainer}>
      <Carousel activeIndex={index} style={style.carousel} indicators={false}>
        <Carousel.Item id="home" style={{ overflow: "hidden" }}>
          <Row>
            <Col md={5}>
              <Container
                style={{
                  position: "relative",
                  paddingTop: "15vh",
                }}
              >
                <h1>this could be anything</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas suscipit convallis risus, sit amet mattis orci.
                  Nullam scelerisque enim eget dictum rhoncus. Aenean sit amet
                  mauris sagittis, ornare ligula quis, ultricies tellus. Morbi
                  luctus tortor ut metus sagittis, ac hendrerit tellus
                  tristique. Proin at ligula at augue maximus vestibulum at eu
                  erat. Fusce imperdiet rutrum facilisis. Nulla et efficitur
                  nibh.
                </h3>
              </Container>
            </Col>
            <Col md={2}>{/* do not use */}</Col>
            <Col md={5}>
              <Container>
                <h1>this could be something</h1>
                <h3>
                  Sed vel accumsan nibh, quis aliquet nunc. Aliquam viverra orci
                  at vulputate blandit. Curabitur non enim a tellus egestas
                  tincidunt. Duis tincidunt in ex et varius. Quisque gravida
                  justo eu mi ornare, non dapibus nisl euismod. Etiam leo
                  ligula, lacinia non feugiat sed, euismod a quam. Vivamus
                  posuere mauris ut turpis blandit pellentesque. Aliquam erat
                  volutpat. Sed eleifend purus non mi placerat ullamcorper.
                  Fusce sit amet odio aliquet, convallis urna eget, vehicula
                  lorem. Cras vel magna eu orci laoreet mattis. Suspendisse vel
                  pharetra urna, laoreet rutrum erat. Nulla iaculis tempor eros
                  non vestibulum. Aenean et ligula at enim gravida suscipit non
                  id quam. Nam hendrerit auctor scelerisque. Vestibulum a enim
                  gravida, tincidunt dolor sed, eleifend diam. Fusce pharetra
                  nec tortor at convallis. Vivamus eget volutpat erat. Aliquam
                  tempus vel nulla sed dapibus. Quisque viverra, ligula at
                  blandit eleifend, massa erat viverra velit, eu venenatis dui
                  tortor at dui.
                </h3>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item id="about"></Carousel.Item>
        <Carousel.Item id="contact"></Carousel.Item>
        <Carousel.Item id="work">
          <Work />
        </Carousel.Item>
      </Carousel>
      <Container style={style.imageContainer}>
        <Navbar style={style.mainNav} sticky="top">
          <Nav className="me-auto" style={style.nav}>
            <Button
              variant="link"
              value="home"
              onClick={() => {
                setIndex(0);
              }}
              style={style.button}
            >
              home
            </Button>
            <Button
              variant="link"
              value="about"
              onClick={() => {
                setIndex(1);
              }}
              style={style.button}
            >
              about
            </Button>
            <Button
              variant="link"
              value="contact"
              onClick={() => {
                setIndex(2);
              }}
              style={style.button}
            >
              contact
            </Button>
            <Button
              variant="link"
              value="work"
              onClick={() => {
                setIndex(3);
              }}
              style={style.button}
            >
              work
            </Button>
          </Nav>
        </Navbar>
      </Container>
    </Container>
  );
}
