import { Button, Container, Image, Stack } from "react-bootstrap";
import { useState, useRef } from "react";
import CodeBW from "../assets/codeBW.png";
import CodeInsta from "../assets/codeInsta.png";
import CodeNight from "../assets/codeNIGHT.png";
import CodePOS from "../assets/codePOS.png";
import CodeSnif from "../assets/codeSNIF.png";
import Header from "../components/header";

export default function Work() {
  const [background, setBackground] = useState(CodeBW);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const style = {
    backgroundImg: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain",
      minHeight: "100vh",
      minWidth: "100%",
    },
    container: {
      height: "100vh",
      width: "100%",
    },
    mainStack: {
      height: "100vh",
      width: "100%",
    },
    buttonStack: {
      height: "100vh",
      width: "100%",
      paddingTop: "59.5vh",
      paddingLeft: "12.5%",
    },
    button1: {
      width: "100%",
      height: "2vh",
      marginBottom: "3.6vh",
      opacity: 0.0,
    },
    button2: {
      width: "100%",
      height: "2vh",
      marginBottom: "3.7vh",
      opacity: 0.0,
    },
    button3: {
      width: "100%",
      height: "2vh",
      marginBottom: "3.7vh",
      opacity: 0.0,
    },
    button4: {
      width: "100%",
      height: "2vh",
      opacity: 0.0,
    },
  };

  return (
    <Container style={style.backgroundImg}>
      <Stack direction="verticle" style={style.mainStack}>
        <Header />
        <Container style={style.container}>
          <Stack direction="verticle" style={style.buttonStack}>
            <Button
              onMouseEnter={() => setBackground(CodeSnif)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button1}
            ></Button>
            <Button
              onMouseEnter={() => setBackground(CodeInsta)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button2}
            ></Button>
            <Button
              onMouseEnter={() => setBackground(CodeNight)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button3}
            ></Button>
            <Button
              onMouseEnter={() => setBackground(CodePOS)}
              onMouseLeave={() => setBackground(CodeBW)}
              style={style.button4}
            ></Button>
          </Stack>
        </Container>
      </Stack>
    </Container>
  );
}
