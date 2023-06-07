import { Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

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
    "https://images.unsplash.com/photo-1564067886520-e1ff2767eb1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2348&q=80",
    "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    "https://images.unsplash.com/photo-1600637080351-8e19e137c349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1382&q=80",
    "https://images.unsplash.com/photo-1607155906501-f0e68e911649?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=966&q=80",
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
            backgroundImage: `url(${src})`,
          }}
        />
      ))}
    </Container>
  );
}
