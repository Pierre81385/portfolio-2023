import { useState, useEffect } from "react";
import { Container, Nav, Button, Carousel } from "react-bootstrap";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";

export default function Main() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobie] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const style = {
    nav: {
      justifyContent: "center",
      textAlign: "center",
      width: width,
      margin: 0,
    },
    carousel: {
      heightt: height,
      width: width,
    },
    carouselItem: {
      height: height,
      width: width,
      justifyContent: "center",
    },
  };

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    if (window.innerWidth < 720) {
      setIsMobie(true);
    } else {
      setIsMobie(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container
      id="main"
      fluid={true}
      style={{ margin: "0", padding: "0", width: "100vw" }}
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
            textAlign: "center",
            margin: "5px",
            padding: 0,
          }}
        >
          about
        </Button>
        <Button
          variant="link"
          value="portfolio"
          onClick={() => {
            setIndex(1);
          }}
          style={{
            textDecoration: index === 1 ? "underline" : "none",
            color: index === 1 ? "black" : "grey",
            textAlign: "center",
            margin: "5px",
            padding: 0,
          }}
        >
          featured projects
        </Button>
        <Button
          variant="link"
          value="contact"
          onClick={() => {
            setIndex(2);
          }}
          style={{
            textDecoration: index === 2 ? "underline" : "none",
            color: index === 2 ? "black" : "grey",
            textAlign: "center",
            margin: "5px",
            padding: 0,
          }}
        >
          contact
        </Button>
      </Nav>
      {isMobile === true ? (
        <div>
          {index === 0 ? (
            <Container id="about-container">
              <About />
            </Container>
          ) : index === 1 ? (
            <Container id="portfolio-container">
              <Portfolio />
            </Container>
          ) : (
            <Container id="contact-container">
              <Contact />
            </Container>
          )}
        </div>
      ) : (
        <Container
          id="carousel-container"
          fluid={true}
          style={{ padding: 0, margin: 0, height: "100%" }}
        >
          <Carousel
            activeIndex={index}
            variant="dark"
            style={style.carousel}
            indicators={false}
            controls={false}
            id="main-carousel"
          >
            <Carousel.Item id="about-view" style={style.carouselItem}>
              <About />
            </Carousel.Item>
            <Carousel.Item id="portfolio-view" style={style.carouselItem}>
              <Portfolio />
            </Carousel.Item>
            <Carousel.Item id="contact-view" style={style.carouselItem}>
              <Contact />
            </Carousel.Item>
          </Carousel>
        </Container>
      )}
      ;
    </Container>
  );
}
