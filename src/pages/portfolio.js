import { Container, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Match from "../assets/match.gif";
import eComm from "../assets/ecom.gif";
import Insta from "../assets/insta.gif";
import NightClub from "../assets/nightclub.gif";
import POS from "../assets/pos.gif";
import AWS from "../assets/logos/aws.png";
import Dart from "../assets/logos/dart.svg";
import ExpressJS from "../assets/logos/expressjs.png";
import Firebase from "../assets/logos/Firebase_Logo.png";
import Firestore from "../assets/logos/Firestore.jpg";
import Flutter from "../assets/logos/flutter.svg";
//import HTML from "../assets/logos/html5.png";
import Javascript from "../assets/logos/javascript.png";
//import JSON from "../assets/logos/JSON.png";
import ReactBoostrap from "../assets/logos/logo.svg";
import MongoDB from "../assets/logos/mongodb.png";
//import MySQL from "../assets/logos/mysql-logo.png";
import React from "../assets/logos/react.png";
//import Sequelize from "../assets/logos/sequelize-logo.png";

export default function Portfolio() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [selected, setSelected] = useState("");
  const [details, setDetails] = useState("");

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const style = {
    container: {
      flexDirection: "row",
      overflow: "scroll",
      minWidth: width,
      height: height,
      justifyContent: "center",
    },

    logos: {
      height: "4vh",
      width: "auto",
    },
  };

  const projects = [
    {
      gif: Match,
      name: "FLUTTER/DART, FIREBASE, GoogleMaps API",
      description:
        "Think 'tinder' for dogs to connect people and their dogs to help them arrange play dates. Built in Flutter/Dart for iOS, and using Firebase as the backend for Auth and storage.  Providing image uploads, location services map view through GoogleMaps, and chat functionality.",
      tech: "Flutter, Dart, iOS, GoogleMaps API, Firebase Auth, Firestore",
      git: "https://github.com/TJCourey/beerMe-international",
      site: "https://tjcourey.github.io/beerMe-international/",
      type: "web",
      logos: [Flutter, Dart, Firebase, Firestore],
    },
    {
      gif: POS,
      name: "FLUTTER/DART",
      description:
        "This is my first Flutter/Dart application, which I modeled after a point of sale ordering system for use on mobile. Authorization is handled by Firebase Auth, with database services to store user profiles, menu items, and ordering information provided by Firestore. The focus of this project was to work with flutter to create a layout that was generated dynamically from database content.",
      tech: "Flutter, Dart, FirebaseAuth, Firestore",
      git: "https://github.com/Pierre81385/app_playground",
      site: "",
      type: "app",
      logos: [Flutter, Dart, Firebase, Firestore],
    },
    {
      gif: Insta,
      name: "REACT/AWS/FIRESTORE",
      description:
        "A tester for AWS. Auth services are handled by FirbaseAuth, and user information is stored in a Firestore database. Images are stored in a bucket through AWS S3, and are linked to posts in an AWS DynamoDB database. DynamoDB stores tables for Posts, Comments, Likes, and Replys with each document's creatAt number serving as their unique identifier. Uploading is handled by Mutler. Front end routing is done with React, while backend routing is done through Express. Temporary deployment to EC2 discontinued.",
      tech: "REACT, AWS S3, AWS DynamoDB, EC2, Express, FirbaseAuth, Firebase Firestore HTML, CSS, JAVASCRIPT, Bootstrap, and Mutler",
      git: "https://github.com/Pierre81385/authTester",
      site: "",
      type: "app",
      logos: [React, ReactBoostrap, AWS, ExpressJS, Firebase, Firestore],
    },
    {
      gif: NightClub,
      name: "REACT",
      description:
        "This site is primarly a demonstrator and experiment in creating a layout with sliding sections of moving content. The result is a night club themed site with 4 sections that each display a different video background with overlayed content. I relied heavily on the creative use of CSS, Bootstrap, and React states to solve a variety of creative challenges. Not mobile friendly, but a visually appealing experiment on desktop environments!",
      tech: "REACT, HTML, CSS, , Javascript, Bootstrap",
      git: "https://github.com/Pierre81385/super-duper-octo-waffle",
      site: "https://loving-panini-dbae11.netlify.app/",
      type: "web",
      logos: [React, ReactBoostrap, Javascript],
    },
    {
      gif: eComm,
      name: "MERN Stack",
      description:
        "Scaling-Lamp is a demonstration of an ecommerce site built with React.js, MongoDB, Apollo GraphQL, and JWT. Users can create an account and login, with authenticaion via JWT enabling logged-in users to access the entire site. Logged-in users can go beyond viewing availible products, with the ability to create, update, and delete products, as well as adding products to a purchase cart.",
      tech: "REACT, MongoDB, JWT, GraphQL, ApolloServer-Express, HTML, CSS, JAVASCRIPT, Bootstrap",
      git: "https://github.com/Pierre81385/scaling-lamp",
      site: "https://hidden-inlet-42331.herokuapp.com/",
      type: "web",
      logos: [React, ReactBoostrap, MongoDB, ExpressJS],
    },
  ];

  function GenerateLogos(data) {
    return data.map((asset) => (
      <img src={asset} style={style.logos} alt="logo"></img>
    ));
  }

  return (
    <Container style={style.container} className="d-flex">
      {projects.map((src) => (
        <Col
          lg={selected === src.name ? 6 : 2}
          style={{
            margin: "1vh",

            display:
              selected === src.name
                ? "block"
                : selected === ""
                ? "block"
                : "none",
          }}
        >
          <Card
            key={src.gif}
            style={{
              flexShrink: 1,
              width: "100%",
              height: "60%",
              borderRadius: "10px",
              flexDirection: "column-reverse",
              backgroundSize: selected === src.name ? "contain" : "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${src.gif})`,
            }}
            onClick={() => {
              if (selected === src.name) {
                setSelected("");
              } else {
                setSelected(src.name);
                setDetails("");
                setDetails("");
              }
            }}
            onMouseEnter={() => {
              if (selected === src.name) {
                setDetails("");
              }
              if (selected === "") {
                setDetails(src.name);
              }
            }}
            onMouseLeave={() => {
              setDetails("");
            }}
          >
            <Container
              style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                width: "100%",
                height: "100%",
                borderRadius: "7px",
                display: details === src.name ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h1>+</h1>
            </Container>
            <Row style={{ margin: "-1vh" }}>
              <Col
                lg={selected === src.nam ? 1 : 6}
                style={{ height: "100%", width: "100%" }}
              ></Col>
              <Col
                lg={selected === src.nam ? 6 : 1}
                style={{ height: "100%", width: "100%" }}
              >
                <Container
                  style={{
                    display: selected === src.name ? "block" : "none",
                    backgroundColor: "rgba(255,255,255,0.75)",
                    borderRadius: "7px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Row>
                    <Card.Title style={style.cardText}>{src.name}</Card.Title>
                  </Row>
                  <Row>
                    <Col style={style.cardText}>{src.description}</Col>
                  </Row>
                  <Row style={{ margin: "1vh" }}>
                    {GenerateLogos(src.logos)}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Container>
  );
}
