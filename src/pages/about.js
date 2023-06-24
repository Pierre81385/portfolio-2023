import { Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Me from "../assets/me.png";

export default function About() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [show, setShow] = useState(true);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const style = {
    container: {
      width: width,
      height: height,
      margin: 0,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      overflow: "scroll",
    },
    img: {
      height: "100%",
      objectFit: "contain",
      position: "fixed",
      display: show === true ? "block" : "none",
    },
    card: {
      width: width > height ? "40%" : "90%",
      borderColor: "white",
    },
    logos: {
      height: "4vh",
      width: "auto",
      margin: "2vh",
    },
    quotes: {
      fontStyle: "italic",
      color: "grey",
    },
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container style={style.container} fluid={true}>
      <Card
        style={style.card}
        onMouseEnter={() => {
          setShow(false);
        }}
        onMouseLeave={() => {
          setShow(true);
        }}
        onClick={() => {
          if (show === true) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        <Container style={{ textAlign: "center" }}>
          <Container style={{ marginTop: "2vh" }}>
            <Container style={{ textAlign: "center" }}>
              <h1>PETER JOHN BISHOP</h1>
            </Container>
            <Container style={{ textAlign: "center" }}>
              <h4 style={{ color: "grey" }}>FULL STACK DEVELOPER</h4>
            </Container>

            <Container style={{ marginTop: "2vh" }}>
              <h5 style={style.quotes}>
                "Peter is a highly intelligent and motivated person. He is a
                well-organized professional, genuinely interested in improving
                the operation of his team. Peter and I worked together on many
                occasions and his hard working and professional approach made an
                enduring impression. I will recommend Peter for any company and
                for any high-level role."{" "}
                <h3 style={{ color: "black" }}>- G. McNulty</h3>
              </h5>
              <h5 style={style.quotes}>
                "he does computer-y stuff"{" "}
                <h3 style={{ color: "black" }}>- girlfriend</h3>
              </h5>
              <h5 style={style.quotes}>
                "Peter's work ethic, understanding of code and ability to
                explain what is going on behind the scenes is exemplary."{" "}
                <h3 style={{ color: "black" }}>- J. Neuner</h3>
              </h5>
            </Container>
          </Container>
        </Container>
        <img src={Me} alt="me-foreground" style={style.img}></img>
      </Card>
    </Container>
  );
}
