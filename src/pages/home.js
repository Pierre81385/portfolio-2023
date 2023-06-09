import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Me from "../assets/me.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import FacebookLogo from "../assets/face.png";
import InstagramLogo from "../assets/insta.png";
import LinkedInLogo from "../assets/linkd.png";
import GitHubLogo from "../assets/git.png";
import About from "../pages/about";
import Experience from "./experience";
import Portfolio from "./portfolio";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [hoveringFb, setHoveringFb] = useState("5vh");
  const [hoveringLk, setHoveringLk] = useState("5vh");
  const [hoveringInst, setHoveringInst] = useState("5vh");
  const [hoveringGit, setHoveringGit] = useState("5vh");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const style = {
    imageContainer: {
      backgroundAttachment: "fixed",
      backgroundImage: `url(${Me})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: width <= 700 ? "cover" : "contain",
      minHeight: height,
      minWidth: width,
      padding: "0",
      position: "relative",
      //
    },
    backContainer: {
      minHeight: "100vh",
      minWidth: "100%",
      padding: "0",
      position: index === 1 || 3 ? "relative" : "fixed",
      backgroundColor: "white",
    },
    carousel: {
      minHeight: "100vh",
      minWidth: "100%",
      position: "absolute",
      zIndex: "100",
    },
    carouselItem: {
      minHeight: "100vh",
      width: "100vw",
      //
    },
    mainNav: {
      margin: "0",
      padding: "0",
      height: "10vh",
      backgroundColor: "transparent",
      flexWrap: "wrap",
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
      <Navbar
        style={style.mainNav}
        sticky="top"
        id="headerNavBar"
        variant="light"
      >
        <Row style={{ width: "100%" }} noGutters={true}>
          <Col
            sm={12}
            md={6}
            style={{ textAlign: width > 910 ? "center" : "center" }}
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
                  color: index === 0 ? "black" : "grey",
                }}
              >
                peter bishop
              </Button>
              <h1>|</h1>
              <Button
                variant="link"
                value="about"
                onClick={() => {
                  setIndex(1);
                }}
                style={{
                  textDecoration: index === 1 ? "underline" : "none",
                  color: index === 1 ? "black" : "grey",
                }}
              >
                about
              </Button>

              <Button
                variant="link"
                value="experience"
                onClick={() => {
                  setIndex(2);
                }}
                style={{
                  textDecoration: index === 2 ? "underline" : "none",
                  color: index === 2 ? "black" : "grey",
                }}
              >
                experience
              </Button>
              <Button
                variant="link"
                value="portfolio"
                onClick={() => {
                  setIndex(3);
                }}
                style={{
                  textDecoration: index === 3 ? "underline" : "none",
                  color: index === 3 ? "black" : "grey",
                }}
              >
                portfolio
              </Button>
              <Button
                variant="link"
                value="contact"
                onClick={() => {
                  setIndex(4);
                }}
                style={{
                  textDecoration: index === 4 ? "underline" : "none",
                  color: index === 4 ? "black" : "grey",
                }}
              >
                contact
              </Button>
            </Nav>
          </Col>
          <Col
            sm={12}
            md={6}
            style={{ textAlign: width > 910 ? "right" : "center" }}
          >
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
                marginLeft: ".5vw",
                marginRight: ".5vw",
              }}
              onMouseEnter={() => setHoveringFb("6vh")}
              onMouseLeave={() => setHoveringFb("5vh")}
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
                marginLeft: ".5vw",
                marginRight: ".5vw",
              }}
              onMouseEnter={() => setHoveringInst("6vh")}
              onMouseLeave={() => setHoveringInst("5vh")}
            ></Button>
            <Button
              href="https://github.com/Pierre81385"
              style={{
                height: hoveringGit,
                width: hoveringGit,
                backgroundImage: `url(${GitHubLogo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
                borderColor: "transparent",
                marginLeft: ".5vw",
                marginRight: ".5vw",
              }}
              onMouseEnter={() => setHoveringGit("6vh")}
              onMouseLeave={() => setHoveringGit("5vh")}
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
                marginLeft: ".5vw",
                marginRight: ".5vw",
              }}
              onMouseEnter={() => setHoveringLk("6vh")}
              onMouseLeave={() => setHoveringLk("5vh")}
            ></Button>
          </Col>
        </Row>
      </Navbar>
      <Container>
        <h1>Peter John Bishop</h1>
      </Container>
      <Container>
        <h1>FULL STACK WEB DEVELOPER</h1>
      </Container>
      <Carousel
        activeIndex={index}
        style={style.carousel}
        indicators={false}
        controls={false}
      >
        <Carousel.Item id="home" style={style.imageContainer}></Carousel.Item>
        <Carousel.Item id="about" style={style.carouselItem}>
          <About />
        </Carousel.Item>
        <Carousel.Item id="experience" style={style.carouselItem}>
          <Experience />
        </Carousel.Item>
        <Carousel.Item id="portfolio" style={style.carouselItem}>
          <Portfolio />
        </Carousel.Item>
        <Carousel.Item id="contact" style={style.carouselItem}></Carousel.Item>
      </Carousel>
    </Container>
  );
}
