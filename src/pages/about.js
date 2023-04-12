import { Stack, Row, Col, Container } from "react-bootstrap";
import Me from "../assets/me.png";
import AboutMe from "../assets/about.png";
import Header from "../components/header";

export default function About() {
  const style = {
    backgroundImg: {
      backgroundImage: `url(${Me})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      minHeight: "100vh",
      minWidth: "100%",
    },
    container: {
      height: "100%",
      width: "100%",
    },
    img: {
      height: "10vh",
    },
  };

  return (
    <Container style={style.backgroundImg}>
      <Stack direction="vertical">
        <Header />
        <Container fluid style={style.container}>
          <Stack direction="horizontal">
            <Container sm={4} style={style.container}>
              <img src={AboutMe} alt="about me" style={style.img}></img>
            </Container>
            <Container sm={4} style={style.container}>
              {/* <h1>container</h1> */}
            </Container>
            <Container sm={4} style={style.container}>
              {/* <h1>container</h1> */}
            </Container>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}
