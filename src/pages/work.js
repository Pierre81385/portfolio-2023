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
    {
      logo: Foraged,
      company: "For[a]ged",
      position: "Bartender",
      subtitle: "",
      description: "",
    },
    {
      logo: DU,
      company: "University of Denver",
      position: "Student",
      subtitle: "",
      description: "",
    },
    {
      logo: MHS,
      company: "Mile High Spirits Distilery",
      position: "Bartender/Distilery Production/Educator",
      subtitle: "",
      description: "",
    },
    {
      logo: Baruch,
      company: "CUNY Baruch College",
      position: "Student",
      subtitle: "",
      description: "",
    },
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
                height: height * 0.8,
                borderRadius: "10px",
                marginLeft: "10px",
                marginTop: "20px",
                marginBottome: "20px",
              }}
              onMouseEnter={() => {
                setDisplay("block");
                setBlur("30px");
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
                    width: "80%",
                    height: "90%",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Card.Title>{src.company}</Card.Title>
                  <Card.Subtitle>{src.subtitle}</Card.Subtitle>
                  <Card.Subtitle>{src.position}</Card.Subtitle>
                  <Card.Text
                    style={{
                      height: "80%",
                      textAlign: "start",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></Card.Text>
                </Container>
              </Card.ImgOverlay>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
