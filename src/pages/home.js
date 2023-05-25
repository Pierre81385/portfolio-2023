import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Me from "../assets/me.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import FacebookLogo from "../assets/face.png";
import InstagramLogo from "../assets/insta.png";
import LinkedInLogo from "../assets/linkd.png";
import GitHubLogo from "../assets/git.png";
export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [hoveringFb, setHoveringFb] = useState("7vh");
  const [hoveringLk, setHoveringLk] = useState("7vh");
  const [hoveringInst, setHoveringInst] = useState("7vh");
  const [hoveringGit, setHoveringGit] = useState("7vh");

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const style = {
    imageContainer: {
      backgroundAttachment: "fixed",
      backgroundImage: index != 0 ? null : `url(${Me})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      minHeight: "100vh",
      minWidth: "100%",
      padding: "0",
      position: "relative",
    },
    backContainer: {
      minHeight: "100vh",
      minWidth: "100%",
      padding: "0",
      position: index === 2 ? "relative" : "fixed",
    },
    carousel: {
      minHeight: index === 2 ? "200vh" : "100vh",
      minWidth: "100%",
      position: "absolute",
      marginTop: "15vh",
    },
    carouselItem: {
      minHeight: "100vh",
      minWidth: "100%",
    },
    card: {
      margin: "15px",
      padding: "25px",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      borderRadius: "15px",
      backgroundColor: "#fff",
    },
    row: {
      minHeight: "100%",
      minWidth: "100%",
    },

    navRow: {
      height: "15vh",
      minWidth: "100%",
    },

    mainNav: {
      margin: "0",
      padding: "0",
      height: "10vh",
      backgroundColor: "transparent",
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
      <Carousel
        activeIndex={index}
        style={style.carousel}
        indicators={false}
        controls={false}
      >
        <Carousel.Item id="home" style={style.carouselItem}>
          <Row style={{ height: "100vh" }}>
            <Col md={4} id="leftSlideContainer">
              <Container>
                <h7>"He does computery stuff."</h7>
                <h5>- Christine L.</h5>
              </Container>
              <Container style={{ paddingTop: "20px", paddingLeft: "40px" }}>
                <h3>
                  "Peter is a highly intelligent and motivated person. He is a
                  well-organized professional, genuinely interested in improving
                  the operation of his team. Peter and I worked together on many
                  occasions and his hard working and professional approach made
                  an enduring impression. I will recommend Peter for any company
                  and for any high-level role."
                </h3>
                <h5>- Gabrielle M.</h5>
                <h5>Senior Program Specialist, HoneywellSenior</h5>
              </Container>
              <Container>
                <h3>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h3>
                <h5>- Customer Satisfaction Review</h5>
              </Container>
              <Container>
                <h3>"One of the best asian bartenders I've ever met."</h3>
                <h5>- Unknown</h5>
              </Container>
            </Col>
            <Col md={4}>{/* do not use */}</Col>
            <Col md={4} id="rightSlideContainer">
              <Container>
                <h1>- PETER J BISHOP</h1>
                <h5>
                  Combining a passion for continuous learning with a keen
                  interest in application development and UX design, I am eager
                  to contribute to a dynamic team and cultivate my expertise.
                  Seeking a growth-oriented position to further expand my
                  knowledge and skills in a stimulating professional
                  environment.
                </h5>
              </Container>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item id="about" style={style.carouselItem}>
          <Row>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item id="contact" style={style.carouselItem}>
          <Row>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item id="work" style={style.carouselItem}>
          <Row>
            <Col md={4}></Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      <Container style={style.imageContainer} id="backgroundImageContainer">
        <Navbar
          style={style.mainNav}
          sticky="top"
          id="headerNavBar"
          variant="light"
        >
          <Nav className="me-auto" style={style.nav}>
            <Button
              variant="link"
              value="about"
              onClick={() => {
                setIndex(0);
              }}
              style={{
                textDecoration: index === 0 ? "underline" : "none",
                color: index === 0 ? "black" : "grey",
              }}
            >
              about
            </Button>
            <Button
              variant="link"
              value="home"
              onClick={() => {
                setIndex(1);
              }}
              style={{
                textDecoration: index === 1 ? "underline" : "none",
                color: index === 1 ? "black" : "grey",
              }}
            >
              home
            </Button>

            <Button
              variant="link"
              value="work"
              onClick={() => {
                setIndex(2);
              }}
              style={{
                textDecoration: index === 2 ? "underline" : "none",
                color: index === 2 ? "black" : "grey",
              }}
            >
              work
            </Button>

            <Button
              variant="link"
              value="work"
              onClick={() => {
                setIndex(2);
              }}
              style={{
                textDecoration: index === 3 ? "underline" : "none",
                color: index === 3 ? "black" : "grey",
              }}
            >
              contact
            </Button>
          </Nav>
          <Row style={{ height: "100%", marginRight: "20px" }}>
            <Button
              href="https://www.facebook.com/PeterJBishop"
              style={{
                height: hoveringFb,
                width: hoveringFb,
                backgroundImage: `url(${FacebookLogo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                borderColor: "transparent",

                margin: "auto",
              }}
              onMouseEnter={() => setHoveringFb("8vh")}
              onMouseLeave={() => setHoveringFb("7vh")}
            ></Button>
            <Button
              href="https://www.instagram.com/pjb.den/"
              style={{
                height: hoveringInst,
                width: hoveringInst,
                backgroundImage: `url(${InstagramLogo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                borderColor: "transparent",

                margin: "auto",
              }}
              onMouseEnter={() => setHoveringInst("8vh")}
              onMouseLeave={() => setHoveringInst("7vh")}
            ></Button>
            <Button
              href="https://github.com/Pierre81385"
              style={{
                height: hoveringGit,
                width: hoveringGit,
                marginTop: "1vh",
                backgroundImage: `url(${GitHubLogo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                borderColor: "transparent",

                margin: "auto",
              }}
              onMouseEnter={() => setHoveringGit("8vh")}
              onMouseLeave={() => setHoveringGit("7vh")}
            ></Button>
            <Button
              href="https://www.linkedin.com/in/peter-bishop-46a51597/"
              style={{
                height: hoveringLk,
                width: hoveringLk,
                backgroundImage: `url(${LinkedInLogo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                borderColor: "transparent",
                margin: "auto",
              }}
              onMouseEnter={() => setHoveringLk("8vh")}
              onMouseLeave={() => setHoveringLk("7vh")}
            ></Button>
          </Row>
        </Navbar>
      </Container>
    </Container>
  );
}
