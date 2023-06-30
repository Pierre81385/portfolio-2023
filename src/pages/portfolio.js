import {
  Row,
  Card,
  Col,
  Button,
  Container,
  Carousel,
  CarouselItem,
  Nav,
} from "react-bootstrap";
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
import Sequelize from "../assets/logos/sequelize-logo.png";
import Node from "../assets/logos/node.png";
//import Git from "../assets/logos/github-logo.png";
//import Postman from "../assets/logos/logo.webp";
import RTD from "../assets/train1.gif";

export default function Portfolio() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [index, setIndex] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
      if (width > height) {
      } else {
      }
    };
  }, [height, width]);

  const style = {
    container: {
      margin: 0,
      padding: 0,
    },
    logos: {
      height: "5vh",
      margin: "5px",
      objectFit: "contain",
    },
    carousel: {
      justifyContent: "center",
      height: "80vh",
      width: "100%",
      marginTop: "2.5vh",
    },
    item: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      height: "100%",
      width: width,
    },
    nav: {
      justifyContent: "center",
      textAlign: "center",
      width: "100%",
      margin: 0,
    },
  };

  const projects = [
    {
      position: 0,
      gif: RTD,
      name: "GTFS-RT Project",
      role: "sole developer",
      description:
        "This is the first app I've really built out of need, finding that predicting when and where a train on the RTD Light Rail system is nearly impossible.  Using Flutter and Dart as my mobile app framework, I incorporate GTFS-RT data streams and GTFS datasets to show currnet information about light rail trains on this system.  Google Maps API provides the mapping. Improvements I'm currently working towards are the ability to display routes and stations on the Google Map, and showing an accurate schedule for each line.",
      tech: "Flutter, Dart, iOS, GoogleMaps API, GTFS-RT, GTFS datasets",
      git: "https://github.com/Pierre81385/rtd_flutter",
      site: "",
      type: "iOS Mobile App",
      logos: [Flutter, Dart],
    },
    {
      position: 1,
      gif: Match,
      name: "Social Networking App",
      role: "sole developer",
      description:
        "Think 'tinder' for dogs to connect people and their dogs to help them arrange play dates. Built in Flutter/Dart for iOS, and using Firebase as the backend for Auth and storage.  Providing image uploads, location services map view through GoogleMaps, and chat functionality.",
      tech: "Flutter, Dart, iOS, GoogleMaps API, Firebase Auth, Firestore",
      git: "https://github.com/Pierre81385/matchdotdog",
      site: "",
      type: "iOS Mobile App",
      logos: [Flutter, Dart, Firebase, Firestore],
    },
    {
      position: 2,
      gif: NightClub,
      name: "React Layout Project",
      role: "sole developer",
      description:
        "This site is primarly a demonstrator and experiment in creating a layout with sliding sections of moving content. The result is a night club themed site with 4 sections that each display a different video background with overlayed content. I relied heavily on the creative use of CSS, Bootstrap, and React states to solve a variety of creative challenges. Not mobile friendly, but a visually appealing experiment on desktop environments!",
      tech: "REACT, HTML, CSS, , Javascript, Bootstrap",
      git: "https://github.com/Pierre81385/super-duper-octo-waffle",
      site: "https://loving-panini-dbae11.netlify.app/",
      type: "Web app",
      logos: [React, ReactBoostrap, Javascript],
    },

    {
      position: 3,
      gif: Insta,
      name: "Social Media Project",
      role: "sole developer",
      description:
        "A tester for AWS. Auth services are handled by FirbaseAuth, and user information is stored in a Firestore database. Images are stored in a bucket through AWS S3, and are linked to posts in an AWS DynamoDB database. DynamoDB stores tables for Posts, Comments, Likes, and Replys with each document's creatAt number serving as their unique identifier. Uploading is handled by Mutler. Front end routing is done with React, while backend routing is done through Express. Temporary deployment to EC2 discontinued.",
      tech: "REACT, AWS S3, AWS DynamoDB, EC2, Express, FirbaseAuth, Firebase Firestore HTML, CSS, JAVASCRIPT, Bootstrap, and Mutler",
      git: "https://github.com/Pierre81385/authTester",
      site: "",
      type: "Web app",
      logos: [React, ReactBoostrap, AWS, ExpressJS, Firebase],
    },
    {
      position: 4,
      gif: POS,
      name: "FLUTTER/DART App",
      role: "sole developer",
      description:
        "This is my first Flutter/Dart application, which I modeled after a point of sale ordering system for use on mobile. Authorization is handled by Firebase Auth, with database services to store user profiles, menu items, and ordering information provided by Firestore. The focus of this project was to work with flutter to create a layout that was generated dynamically from database content.",
      tech: "Flutter, Dart, FirebaseAuth, Firestore",
      git: "https://github.com/Pierre81385/app_playground",
      site: "",
      type: "iOS Mobile App",
      logos: [Flutter, Dart, Firebase, Firestore],
    },
    {
      position: 5,
      gif: eComm,
      name: "MERN Project",
      role: "sole developer",
      description:
        "Scaling-Lamp is a demonstration of an ecommerce site built with React.js, MongoDB, Apollo GraphQL, and JWT. Users can create an account and login, with authenticaion via JWT enabling logged-in users to access the entire site. Logged-in users can go beyond viewing availible products, with the ability to create, update, and delete products, as well as adding products to a purchase cart.",
      tech: "REACT, MongoDB, JWT, GraphQL, ApolloServer-Express, HTML, CSS, JAVASCRIPT, Bootstrap",
      git: "https://github.com/Pierre81385/scaling-lamp",
      site: "https://hidden-inlet-42331.herokuapp.com/",
      type: "Web app",
      logos: [MongoDB, ExpressJS, React, Node, Sequelize],
    },
  ];

  function GenerateLogos(data) {
    return data.map((asset) => (
      <Col className="Col-1">
        <img src={asset} style={style.logos} alt="logo" fluid></img>
      </Col>
    ));
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Nav className="me-auto" style={style.nav}>
        {projects.map((link, cardIndex) => (
          <Button
            variant="link"
            value={link.name}
            onClick={() => {
              setIndex(cardIndex);
            }}
            style={{
              textDecoration: index === link.position ? "underline" : "none",
              color: index === link.index ? "black" : "grey",
              textAlign: "center",
              margin: "5px",
              padding: 0,
            }}
          >
            {link.name}
          </Button>
        ))}
      </Nav>
      <Carousel
        activeIndex={index}
        variant="dark"
        style={style.carousel}
        indicators={false}
        interval={null}
        controls={false}
        id="main-carousel"
        onSelect={handleSelect}
      >
        {projects.map((card) => (
          <CarouselItem>
            <Row>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                className="align-self-center"
                sm={12}
                md={6}
              >
                <Card
                  style={{
                    flexGrow: 1,
                    padding: ".5vw",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    borderColor: "white",
                    color: "white",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  <Card.Img
                    src={card.gif}
                    style={{ width: "100%" }}
                    alt="gif"
                  />
                  <Button
                    variant="dark"
                    style={{ margin: ".3vw" }}
                    onClick={() => window.open(card.git, "_blank")}
                  >
                    to GitHub Repo
                  </Button>
                  <Card.Subtitle></Card.Subtitle>
                </Card>
              </Col>
              <Col sm={12} md={6} className="align-self-center">
                <Row style={{ fontWeight: "bold" }}>{card.tech}</Row>
                <Row>{card.description}</Row>
                <Row>{GenerateLogos(card.logos)}</Row>
              </Col>
            </Row>
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}
