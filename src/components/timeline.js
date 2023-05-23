import { Container, Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ClickUp from "../assets/clickup.png";
import Foraged from "../assets/foraged.jpg";
import Sushi from "../assets/sushi.png";
import Mhs from "../assets/mhs.png";
import DU from "../assets/du.jpg";
import DataConnect from "../assets/dataconnect.jpg";
import Perenso from "../assets/perenso.png";

export default function Work() {
  const [isShown, setIsShown] = useState(false);

  const style = {
    timeline: {
      width: "100%",
      height: "100%",
      flexDirection: "flex-row",
    },
    timelineLogo: {
      width: "100%",
      height: "100%",
    },
    timelineContent: {
      width: "100%",
      height: "100%",
      zIndex: "200",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      borderRadius: "5px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      padding: "15px",
    },
  };

  const dataEntry = [
    {
      title: "Technical Support Specialist",
      date: "June 06 2022",
      description: "",
      logo: ClickUp,
      link: {
        url: "http://www.clickup.com",
        text: "ClickUp",
      },
    },
    {
      text: "Wrote my first blog post ever on Medium",
      date: "March 03 2017",
      logo: Foraged,
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      text: "Wrote my first blog post ever on Medium",
      date: "March 03 2017",
      logo: Sushi,
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      text: "Wrote my first blog post ever on Medium",
      date: "March 03 2017",
      logo: Mhs,
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      text: "Wrote my first blog post ever on Medium",
      date: "March 03 2017",
      logo: DU,
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      text: "Wrote my first blog post ever on Medium",
      date: "March 03 2017",
      logo: Perenso,
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
    {
      text: "Wrote my first blog post ever on Medium",
      date: "March 03 2017",
      logo: DataConnect,
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
      },
    },
  ];

  const TimelineLogos = ({ data }) => (
    <Container style={{ width: "100%", textAlign: "center" }}>
      <Button
        style={{
          backgroundImage: `url(${data.logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
          borderColor: "black",
          border: "3px solid",
          //borderRadius: "100%",
          width: "200px",
          height: "100px",
          zIndex: "100",
          margin: "auto",
          padding: "auto",
        }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        id="timelineLogo"
      ></Button>
    </Container>
  );

  const TimelineText = ({ data }) => (
    <Col id="timelineText">
      <Row>{data.date}</Row>
      <Row>{data.text}</Row>
    </Col>
  );

  const Timeline = () =>
    dataEntry.length > 0 && (
      <Container fluid id="timelineContainer">
        {dataEntry.map((data, idx) => (
          <TimelineLogos data={data} key={idx} id="timelineLogoContainer" />
        ))}
      </Container>
    );

  return <Timeline />;
}
