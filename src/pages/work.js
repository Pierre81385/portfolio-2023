import { Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import ClickUp from "../assets/clickup.png";
import Foraged from "../assets/foraged.jpg";
import DU from "../assets/DU.png";
import MHS from "../assets/mhs.png";
import Baruch from "../assets/baruch.png";

export default function Work() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
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

  const content = [ClickUp, Foraged, DU, MHS, Baruch];
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container style={style.container}>
      {content.map((src) => (
        <Card
          key={src}
          style={{
            flexShrink: 0,
            width: width * 0.75,
            height: height * 0.6,
            borderRadius: "10px",
            marginLeft: "10px",
            marginTop: "20px",
            marginBottome: "20px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundImage: `url(${src})`,
          }}
        />
      ))}
    </Container>
  );
}
