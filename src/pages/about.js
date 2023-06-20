import { Container, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import LilMe from "../assets/lilme.png";
import Me from "../assets/me.png";
import Oliver1 from "../assets/oliver1.jpg";
import AWS from "../assets/logos/aws.png";
import Dart from "../assets/logos/dart.svg";
import ExpressJS from "../assets/logos/expressjs.png";
import Firebase from "../assets/logos/Firebase_Logo.png";
import Firestore from "../assets/logos/Firestore.jpg";
import Flutter from "../assets/logos/flutter.svg";
import HTML from "../assets/logos/html5.png";
import Javascript from "../assets/logos/javascript.png";
import JSON from "../assets/logos/JSON.png";
import ReactBoostrap from "../assets/logos/logo.svg";
import MongoDB from "../assets/logos/mongodb.png";
import MySQL from "../assets/logos/mysql-logo.png";
import React from "../assets/logos/react.png";
import Sequelize from "../assets/logos/sequelize-logo.png";
import Node from "../assets/logos/node.png";
import Git from "../assets/logos/github-logo.png";
import iOS from "../assets/logos/iOS.jpg";
import Postman from "../assets/logos/logo.webp";

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
      width: width > height ? "33%" : "90%",
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

  const logos = [
    AWS,
    Dart,
    ExpressJS,
    Firebase,
    Firestore,
    Flutter,
    HTML,
    Javascript,
    JSON,
    React,
    ReactBoostrap,
    MongoDB,
    Sequelize,
    MySQL,
    Node,
    Git,
    Postman,
  ];

  function GenerateLogos(data) {
    return logos.map((asset) => (
      <img src={asset} style={style.logos} alt="logo"></img>
    ));
  }

  const content = [
    {
      img: Me,
      title: "Hey, I'm Peter!",
      text: "I'm a full stack developer with a passion for learning with unending curiosity that drives me to ask, 'How'd they do that?' on a daily basis. I currently work for ClickUp as a Technical Support Specialist, project basis QA Specialist, and API Subject Matter Expert. When I'm not doing a deep dive feature investigation, you can find me writing postman scripts or exploring various api endpoints to see where they lead!",
    },
    {
      img: LilMe,
      title: "From a young age...",
      text: "I was always a nerd at heart, and this consistent interest has carried me from building data processing formulas in spreadsheets, to pulling reports with MySql queries, to building full stack app projects. I graduated from CUNY Baruch College with a BBA in Economics, and after exploring a variety of career paths, I decided to take the plunge in a coding bootcamp with the University of Denver.  Following this I was happy to find new skills in self learning that have propelled me from the MERN stack foundation of the bootcamp curriculum to new skills using Flutter and Dart, Amazon Web Services, and Google Firebase to name a few.",
    },
    {
      img: Oliver1,
      title: "This is my dog Oliver",
      text: "How do I tell my dog I need to do this to afford his lavish lifestyle?",
    },
  ];
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
            <Container
              style={{ height: ".25vh", backgroundColor: "black" }}
            ></Container>
            {GenerateLogos(logos)}
            <Container
              style={{ height: ".25vh", backgroundColor: "black" }}
            ></Container>
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
