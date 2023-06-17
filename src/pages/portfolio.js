import { Container, Card, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Match from "../assets/match.gif";
import eComm from "../assets/ecom.gif";
import Insta from "../assets/insta.gif";
import NightClub from "../assets/nightclub.gif";
import POS from "../assets/pos.gif";

export default function Portfolio() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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
      maxWidth: width,
      height: "100%",
      justifyContent: "start",
    },
    card: {
      margin: ".5vw",
      borderRadius: "10px",
      backgroundColor: "white",
    },
    img: {
      objectFit: "contain",
      height: "100%",
      width: "100%",
      display: "flex",
      borderRadius: "10px",
      objectPosition: "top",
      padding: "1vw",
    },
  };

  const projects = [
    {
      gif: Match,
      name: "Puppy Play Date",
      description:
        "Think 'tinder' for dogs to connect people and their dogs to help them arrange play dates. Built in Flutter/Dart for iOS, and using Firebase as the backend for Auth and storage.  Providing image uploads, location services, and chat functionality.",
      tech: "Flutter, Dart, iOS, GoogleMaps API, Firebase Auth, Firestore",
      git: "https://github.com/TJCourey/beerMe-international",
      site: "https://tjcourey.github.io/beerMe-international/",
      type: "web",
    },
    {
      gif: POS,
      name: "Mobile Point of Sale",
      description:
        "This is my first Flutter/Dart application, which I modeled after a point of sale ordering system for use on mobile. Authorization is handled by Firebase Auth, with database services to store user profiles, menu items, and ordering information provided by Firestore. The focus of this project was to work with flutter to create a layout that was generated dynamically from database content.",
      tech: "Flutter, Dart, FirebaseAuth, Firestore",
      git: "https://github.com/Pierre81385/app_playground",
      site: "",
      type: "app",
    },
    {
      gif: Insta,
      name: "InstaClone",
      description:
        "A tester for AWS. Auth services are handled by FirbaseAuth, and user information is stored in a Firestore database. Images are stored in a bucket through AWS S3, and are linked to posts in an AWS DynamoDB database. DynamoDB stores tables for Posts, Comments, Likes, and Replys with each document's creatAt number serving as their unique identifier. Uploading is handled by Mutler. Front end routing is done with React, while backend routing is done through Express. Temporary deployment to EC2 discontinued.",
      tech: "REACT, AWS S3, AWS DynamoDB, EC2, Express, FirbaseAuth, Firebase Firestore HTML, CSS, JAVASCRIPT, Bootstrap, and Mutler",
      git: "https://github.com/Pierre81385/authTester",
      site: "",
      type: "app",
    },
    {
      gif: NightClub,
      name: "NightClub",
      description:
        "This site is primarly a demonstrator and experiment in creating a layout with sliding sections of moving content. The result is a night club themed site with 4 sections that each display a different video background with overlayed content. I relied heavily on the creative use of CSS, Bootstrap, and React states to solve a variety of creative challenges. Not mobile friendly, but a visually appealing experiment on desktop environments!",
      tech: "REACT, HTML, CSS, , Javascript, Bootstrap",
      git: "https://github.com/Pierre81385/super-duper-octo-waffle",
      site: "https://loving-panini-dbae11.netlify.app/",
      type: "web",
    },
    {
      gif: eComm,
      name: "Scaling Lamp",
      description:
        "Scaling-Lamp is a demonstration of an ecommerce site built with React.js, MongoDB, Apollo GraphQL, and JWT. Users can create an account and login, with authenticaion via JWT enabling logged-in users to access the entire site. Logged-in users can go beyond viewing availible products, with the ability to create, update, and delete products, as well as adding products to a purchase cart.",
      tech: "REACT, MongoDB, JWT, GraphQL, ApolloServer-Express, HTML, CSS, JAVASCRIPT, Bootstrap",
      git: "https://github.com/Pierre81385/scaling-lamp",
      site: "https://hidden-inlet-42331.herokuapp.com/",
      type: "web",
    },
  ];

  return (
    <Container style={style.container} className="d-flex">
      <Row>
        {projects.map((src) => (
          <Col sm={12} md={4}>
            <Container
              style={{
                padding: "1vw",
                borderRadius: "10px",
                flexDirection: "column",
                width: "100%",
              }}
              className="d-flex"
            >
              <Card style={style.card}>
                <Card.Title style={{ margin: ".5vw" }}>{src.name}</Card.Title>
                <Card.Img variant="top" src={src.gif} style={style.img} />
                <Card.Text style={{ margin: ".5vw" }}>
                  {src.description}
                </Card.Text>
                <Card.Subtitle style={{ margin: ".5vw" }}>
                  {src.tech}
                </Card.Subtitle>
              </Card>
            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
