import { Button, Container, Stack } from "react-bootstrap";
import { useState } from "react";
import CodeBW from "../assets/codeBW.png";
import CodeInsta from "../assets/codeInsta.png";
import CodeNight from "../assets/codeNIGHT.png";
import CodePOS from "../assets/codePOS.png";
import CodeSnif from "../assets/codeSNIF.png";
import Header from "../components/header";

export default function Work() {
  const [background, setBackground] = useState(CodeBW);

  const style = {
    backgroundImg: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      height: "100vh",
      width: "100vw",
    },
    container: {
      height: "100%",
      width: "100vw",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    stack: {
      width: "100%",
      marginTop: "41%",
      marginLeft: "60%",
    },
    button1: {
      marginTop: "2%",
      marginBottom: "2.5%",
      marginLeft: "-33%",
      width: "13vw",
      height: "2.5vh",
    },
    button2: {
      marginTop: "2.5%",
      marginBottom: "2.5%",
      marginLeft: "-25%",
      width: "15vw",
      height: "2.5vh",
    },
    button3: {
      marginTop: "2.5%",
      marginBottom: "2.5%",
      marginLeft: "-17%",
      width: "16vw",
      height: "2.5vh",
    },
    button4: {
      marginTop: "2.5%",
      marginBottom: "2%",
      marginLeft: "-27%",
      width: "12vw",
      height: "2.5vh",
    },
  };

  return (
    <Container fluid style={style.backgroundImg}>
      <Stack direction="verticle">
        <Header />

        <Container sm={4} style={style.container}>
          <Stack direction="verticle" style={style.stack}>
            <Container
              onMouseEnter={() => setBackground(CodeSnif)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button1}
            ></Container>
            <Container
              onMouseEnter={() => setBackground(CodeInsta)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button2}
            ></Container>
            <Container
              onMouseEnter={() => setBackground(CodeNight)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button3}
            ></Container>
            <Container
              onMouseEnter={() => setBackground(CodePOS)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button4}
            ></Container>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}
