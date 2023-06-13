// import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import BeerMe from "../assets/beer.gif";
// import eComm from "../assets/ecom.gif";
// import Insta from "../assets/insta.gif";
// import NightClub from "../assets/nightclub.gif";
// import POS from "../assets/pos.gif";

// export default function Portfolio() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   const updateDimensions = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, []);

//   const style = {};

//   const projects = [
//     {
//       gif: POS,
//       name: "Mobile Point of Sale",
//       description:
//         "This is my first Flutter/Dart application, which I modeled after a point of sale ordering system for use on mobile. Authorization is handled by Firebase Auth, with database services to store user profiles, menu items, and ordering information provided by Firestore. The focus of this project was to work with flutter to create a layout that was generated dynamically from database content.",
//       tech: "Flutter, Dart, FirebaseAuth, Firestore",
//       git: "https://github.com/Pierre81385/app_playground",
//       site: "",
//       type: "app",
//     },
//     {
//       gif: Insta,
//       name: "InstaClone",
//       description:
//         "This repo was originially intended to test out different auth API's, but the scope expanded into essentially an Instagram clone. Auth services are handled by FirbaseAuth, and user information is stored in a Firestore database. Images are stored in a bucket through AWS S3, and are linked to posts in an AWS DynamoDB database. DynamoDB stores tables for Posts, Comments, Likes, and Replys with each document's creatAt number serving as their unique identifier. Uploading is handled by Mutler. Front end routing is done with React, while backend routing is done through Express. This was deployed to EC2 to learn how this was done, but the instance is not active at this time.",
//       tech: "REACT, AWS S3, AWS DynamoDB, EC2, Express, FirbaseAuth, Firebase Firestore HTML, CSS, JAVASCRIPT, Bootstrap, and Mutler",
//       git: "https://github.com/Pierre81385/authTester",
//       site: "",
//       type: "app",
//     },
//     {
//       gif: NightClub,
//       name: "NightClub",
//       description:
//         "This site is primarly a demonstrator and experiment in creating a layout with sliding sections of moving content. The result is a night club themed site with 4 sections that each display a different video background with overlayed content. I relied heavily on the creative use of CSS, Bootstrap, and React states to solve a variety of creative challenges. Not mobile friendly, but a visually appealing experiment on desktop environments!",
//       tech: "REACT, HTML, CSS, , Javascript, Bootstrap",
//       git: "https://github.com/Pierre81385/super-duper-octo-waffle",
//       site: "https://loving-panini-dbae11.netlify.app/",
//       type: "web",
//     },
//     {
//       gif: eComm,
//       name: "Scaling Lamp",
//       description:
//         "Scaling-Lamp is a demonstration of an ecommerce site built with React.js, MongoDB, Apollo GraphQL, and JWT. Users can create an account and login, with authenticaion via JWT enabling logged-in users to access the entire site. Logged-in users can go beyond viewing availible products, with the ability to create, update, and delete products, as well as adding products to a purchase cart.",
//       tech: "REACT, MongoDB, JWT, GraphQL, ApolloServer-Express, HTML, CSS, JAVASCRIPT, Bootstrap",
//       git: "https://github.com/Pierre81385/scaling-lamp",
//       site: "https://hidden-inlet-42331.herokuapp.com/",
//       type: "web",
//     },
//     {
//       gif: BeerMe,
//       name: "Beer Me!",
//       description:
//         "BeerMe is an app designed to provide beer suggestions based on user selected ABV and IBU preferences. This was a group project, focusing primarily on the use of multiple API's to provide data for beers and translations. I was primarily responsible for designing the logic on the backend that returns beers based on user input.",
//       tech: "FunTranslations API, Punk API, JQUERY, HTML, CSS",
//       git: "https://github.com/TJCourey/beerMe-international",
//       site: "https://tjcourey.github.io/beerMe-international/",
//       type: "web",
//     },
//   ];

//   return <Container></Container>;
// }
