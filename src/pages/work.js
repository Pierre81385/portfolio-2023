import { Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ClickUp from "../assets/clickup.png";
import Foraged from "../assets/foraged.jpg";
import DU from "../assets/DU.png";
import MHS from "../assets/mhs.png";
import Baruch from "../assets/baruch.png";

export default function Work() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [display, setDisplay] = useState("none");
  const [blur, setBlur] = useState("0px");
  //const [index, setIndex] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const style = {
    container: {
      display: "flex",
      overflowX: "scroll",
      padding: "20px",
      width: "100%",
      height: "100%",
    },
  };

  const content = [
    {
      logo: ClickUp,
      company: "ClickUp",
      position: "Technical Support Specialist, QA, API Subject Matter Expert",
      subtitle: "June 2022 - Present",
      description: "job description",
    },
    { logo: Foraged, company: "", position: "", subtitle: "", description: "" },
    { logo: DU, company: "", position: "", subtitle: "", description: "" },
    { logo: MHS, company: "", position: "", subtitle: "", description: "" },
    { logo: Baruch, company: "", position: "", subtitle: "", description: "" },
  ];
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container style={style.container}>
      <Carousel
        variant="dark"
        style={style.carousel}
        indicators={false}
        controls={true}
      >
        {content.map((src) => (
          <Carousel.Item id={src}>
            <Card
              key={src.logo}
              style={{
                flexShrink: 0,
                width: width * 0.75,
                height: height * 0.6,
                borderRadius: "10px",
                marginLeft: "10px",
                marginTop: "20px",
                marginBottome: "20px",
                // backgroundSize: "contain",
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "center center",
                // backgroundImage: `url(${src.logo})`,
              }}
              onMouseEnter={() => {
                setDisplay("block");
                setBlur("10px");
              }}
              onMouseLeave={() => {
                setDisplay("none");
                setBlur("0px");
              }}
            >
              <Card.Img
                src={src.logo}
                style={{
                  filter: `blur(${blur})`,

                  margin: "auto",
                  padding: "auto",
                  maxHeight: "100%",
                  objectFit: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></Card.Img>
              <Card.ImgOverlay>
                <Container
                  style={{
                    display: display,
                    width: "90%",
                    height: "90%",
                    borderRadius: "10px",
                    textAlign: "center",
                    zIndex: "100",
                  }}
                >
                  <h1>{src.company}</h1>
                  <h2>{src.subtitle}</h2>
                  <h3>{src.position}</h3>
                </Container>
              </Card.ImgOverlay>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
