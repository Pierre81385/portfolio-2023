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
  const [hoveringGit, setHoveringGit] = useState("5.5vh");

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
      padding: "0",
      //zIndex: "1",
      position: "relative",
    },
    backContainer: {
      minHeight: "100vh",
      minWidth: "100%",
      padding: "0",
      //zIndex: "-1",
      position: "fixed",
    },
    carousel: {
      minHeight: "100vh",
      minWidth: "100%",
      //zIndex: "0",
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
      backgroundColor: "black",
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
          <Row>
            <Col md={4} id="leftSlideContainer">
              <Container>
                <h7>"He does computery stuff."</h7>
                <h5>- Christine L.</h5>
              </Container>
              <Container style={{ padding: "50px" }}>
                <h3>
                  "Peter is a highly intelligent and motivated person. He is a
                  well-organized professional, genuinely interested in improving
                  the operation of his team. Peter and I worked together on many
                  occasions and his hard working and professional approach made
                  an enduring impression. I will recommend Peter for any company
                  and for any high-level role."
                </h3>
                <h5>- Gabrielle M.</h5>
                <h7>Senior Program Specialist at HoneywellSenior</h7>
              </Container>
              <Container>
                <h7>"One of the best asian bartenders in Colorado."</h7>
                <h5>- Unknown</h5>
              </Container>
            </Col>
            <Col md={4}>{/* do not use */}</Col>
            <Col md={4} id="rightSlideContainer">
              <Container>
                <Card style={style.card}>
                  <h1>PETER J BISHOP</h1>
                  <h5>
                    Driven Web Developer dedicated to continuous learning and
                    crafting innovative, functional, and visually appealing
                    applications. With a passion for keeping up with the latest
                    industry trends, I am committed to expanding my skill set to
                    deliver exceptional user experiences. I am committed to
                    creating seamless and intuitive experiences that leave a
                    lasting impression.
                  </h5>
                </Card>
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
              value="home"
              onClick={() => {
                setIndex(0);
              }}
              style={{
                textDecoration: index === 0 ? "underline" : "none",
                color: index === 0 ? "white" : "grey",
              }}
            >
              home
            </Button>
            <Button
              variant="link"
              value="about"
              onClick={() => {
                setIndex(1);
              }}
              style={{
                textDecoration: index === 1 ? "underline" : "none",
                color: index === 1 ? "white" : "grey",
              }}
            >
              about
            </Button>

            <Button
              variant="link"
              value="work"
              onClick={() => {
                setIndex(3);
              }}
              style={{
                textDecoration: index === 3 ? "underline" : "none",
                color: index === 3 ? "white" : "grey",
              }}
            >
              work
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
                borderColor: "black",
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
                borderColor: "black",
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
                borderColor: "black",
                margin: "auto",
              }}
              onMouseEnter={() => setHoveringGit("7vh")}
              onMouseLeave={() => setHoveringGit("5.5vh")}
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
                borderColor: "black",
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
