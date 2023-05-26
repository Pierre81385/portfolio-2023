import { Container, Row, Button } from "react-bootstrap";
import Me from "../assets/me.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import FacebookLogo from "../assets/face.png";
import InstagramLogo from "../assets/insta.png";
import LinkedInLogo from "../assets/linkd.png";
import GitHubLogo from "../assets/git.png";
import About from "../pages/about";

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [hoveringFb, setHoveringFb] = useState("5vh");
  const [hoveringLk, setHoveringLk] = useState("5vh");
  const [hoveringInst, setHoveringInst] = useState("5vh");
  const [hoveringGit, setHoveringGit] = useState("5vh");

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

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
      position: "relative",
      //
    },
    backContainer: {
      minHeight: "100vh",
      minWidth: "100%",
      padding: "0",
      position: index === 2 ? "relative" : "fixed",
      //
    },
    carousel: {
      minHeight: index === 2 ? "200vh" : "100vh",
      minWidth: "100%",
      position: "absolute",
      zIndex: "100",
    },
    carouselItem: {
      minHeight: "100vh",
      minWidth: "100%",
      //
    },
    // card: {
    //   margin: "15px",
    //   padding: "25px",
    //   boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    //   borderRadius: "15px",
    //   backgroundColor: "#fff",
    // },

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
          <h1>|</h1>
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
              setIndex(3);
            }}
            style={{
              textDecoration: index === 3 ? "underline" : "none",
              color: index === 3 ? "black" : "grey",
            }}
          >
            contact
          </Button>
        </Nav>
        <Row style={{ marginRight: "1%" }}>
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
              margin: "auto",
            }}
            onMouseEnter={() => setHoveringInst("6vh")}
            onMouseLeave={() => setHoveringInst("5vh")}
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
              margin: "auto",
            }}
            onMouseEnter={() => setHoveringLk("6vh")}
            onMouseLeave={() => setHoveringLk("5vh")}
          ></Button>
        </Row>
      </Navbar>
      <Carousel
        activeIndex={index}
        style={style.carousel}
        indicators={false}
        controls={false}
      >
        <Carousel.Item id="home" style={style.imageContainer}>
          <About />
        </Carousel.Item>
        {/* <Container
          style={style.imageContainer}
          id="backgroundImageContainer"
        ></Container> */}
        <Carousel.Item id="about" style={style.carouselItem}></Carousel.Item>
        <Carousel.Item id="contact" style={style.carouselItem}></Carousel.Item>
        <Carousel.Item id="work" style={style.carouselItem}></Carousel.Item>
      </Carousel>
    </Container>
  );
}
