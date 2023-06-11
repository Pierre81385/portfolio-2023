import { Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Oliver0 from "../assets/oliver0.jpg";
import Oliver1 from "../assets/oliver1.jpg";
import Oliver2 from "../assets/oliver2.jpg";
import Oliver3 from "../assets/oliver3.jpg";
import Oliver4 from "../assets/oliver4.png";
import Oliver5 from "../assets/oliver5.png";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const style = {
    container: {
      display: "flex",
      flexDirection: "column",
      overflowX: "scroll",
      padding: "20px",
      width: "100%",
      height: "100%",
    },
  };

  const content = [
    {
      img: Oliver0,
    },
    {
      img: Oliver1,
    },
    {
      img: Oliver2,
    },
    {
      img: Oliver3,
    },
    {
      img: Oliver4,
    },
    {
      img: Oliver5,
    },
  ];
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
            height: height * 0.8,
            borderRadius: "10px",
            marginLeft: "10px",
            marginTop: "20px",
            marginBottome: "20px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundImage: `url(${src.img})`,
          }}
        />
      ))}
    </Container>
  );
}
