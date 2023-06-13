import { Row, Col, Button, Container, Image } from "react-bootstrap";
import { useState } from "react";
import FacebookLogo from "../assets/face.png";
import InstagramLogo from "../assets/insta.png";
import LinkedInLogo from "../assets/linkd.png";
import GitHubLogo from "../assets/git.png";
import CallMe from "../assets/callme.jpg";

export default function Contact() {
  const [hoveringFb, setHoveringFb] = useState("5vh");
  const [hoveringLk, setHoveringLk] = useState("5vh");
  const [hoveringInst, setHoveringInst] = useState("5vh");
  const [hoveringGit, setHoveringGit] = useState("5vh");
  const [hoverPhone, setHoverPhone] = useState("black");
  const [hoverEmail, setHoverEmail] = useState("black");

  const style = {
    container: {
      margin: "0",
      padding: "0",
      height: "10vh",
      backgroundColor: "transparent",
      flexWrap: "wrap",
    },
    row: {
      justifyContent: "center",
      margin: 0,
      padding: 0,
      width: "100%",
    },
    phoneLink: {
      color: hoverPhone,
    },
    emailLink: {
      color: hoverEmail,
    },
    imgContainer: {
      textAlign: "center",
    },
  };

  return (
    <Container style={style.container} fluid={true}>
      <Container style={style.imgContainer}>
        <Image src={CallMe} rounded />
      </Container>
      <Row style={style.row} noGutters={true}>
        <Col style={{ textAlign: "center" }} sm={12}>
          <Button
            href="mailto: pjb.den@gmail.com"
            variant="link"
            style={style.emailLink}
            onMouseEnter={() => setHoverEmail("grey")}
            onMouseLeave={() => setHoverEmail("black")}
          >
            pjb.den@gmail.com
          </Button>
        </Col>
        <Col style={{ textAlign: "center" }} sm={12}>
          <Button
            href="tel:7202725223"
            variant="link"
            style={style.phoneLink}
            onMouseEnter={() => setHoverPhone("grey")}
            onMouseLeave={() => setHoverPhone("black")}
          >
            720-272-5223
          </Button>
        </Col>

        <Col sm={12} style={{ textAlign: "center" }}>
          <Row>
            <Col sm={4}></Col>
            <Col>
              <Button
                href="https://www.facebook.com/PeterJBishop"
                style={{
                  height: hoveringFb,
                  width: hoveringFb,
                  backgroundImage: `url(${FacebookLogo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginLeft: ".5vw",
                  marginRight: ".5vw",
                  marginTop: "3vh",
                }}
                onMouseEnter={() => setHoveringFb("6vh")}
                onMouseLeave={() => setHoveringFb("5vh")}
              ></Button>
            </Col>
            <Col>
              <Button
                href="https://www.instagram.com/pjb.den/"
                style={{
                  height: hoveringInst,
                  width: hoveringInst,
                  backgroundImage: `url(${InstagramLogo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginLeft: ".5vw",
                  marginRight: ".5vw",
                  marginTop: "3vh",
                }}
                onMouseEnter={() => setHoveringInst("6vh")}
                onMouseLeave={() => setHoveringInst("5vh")}
              ></Button>
            </Col>
            <Col>
              <Button
                href="https://github.com/Pierre81385"
                style={{
                  height: hoveringGit,
                  width: hoveringGit,
                  backgroundImage: `url(${GitHubLogo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginLeft: ".5vw",
                  marginRight: ".5vw",
                  marginTop: "3vh",
                }}
                onMouseEnter={() => setHoveringGit("6vh")}
                onMouseLeave={() => setHoveringGit("5vh")}
              ></Button>
            </Col>
            <Col>
              <Button
                href="https://www.linkedin.com/in/peter-bishop-46a51597/"
                style={{
                  height: hoveringLk,
                  width: hoveringLk,
                  backgroundImage: `url(${LinkedInLogo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  marginLeft: ".5vw",
                  marginRight: ".5vw",
                  marginTop: "3vh",
                }}
                onMouseEnter={() => setHoveringLk("6vh")}
                onMouseLeave={() => setHoveringLk("5vh")}
              ></Button>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
