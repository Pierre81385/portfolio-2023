import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import Header from "./header";
import ClickUp from "../assets/clickup.png";
import Foraged from "../assets/foraged.jpg";
import Sushi from "../assets/sushi.png";
import Mhs from "../assets/mhs.png";
import DU from "../assets/du.jpg";
import DataConnect from "../assets/dataconnect.jpg";
import Perenso from "../assets/perenso.png";

export default function Work() {
  const [showContianer, setShowContainer] = useState(false);

  const style = {
    mainContainer: {
      minHeight: "100vh",
      minWidth: "100%",
    },
    timelineItem: {
      display: showContianer ? "flex" : "none",
      justifyContent: "flex-end",
      //paddingRight: "30px",
      position: "relative",
      margin: "10px 0",
      width: "100%",
    },
    timelineItemContent: {
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      borderRadius: "5px",
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      padding: "15px",
      position: "relative",
      width: "400px",
      maxWidth: "70%",
      textRlign: "right",
    },
    timelineContainer: {
      display: "flex",
      flexDirection: "row",
      position: "relative",
      width: "100%",
      //margin: "40px 0",
    },
    circle: {
      backgroundColor: "#fff",
      border: "3px solid #e17b77",
      borderRadius: "100%",
      position: "absolute",
      top: "calc(50% - 10px)",
      left: "-120px",
      width: "50px",
      height: "50px",
      zIndex: "100",
    },
    timelineContainerAfter: {
      backgroundColor: "#e17b77",
      content: "",
      position: "absolute",
      //left: "calc(50% - 2px)",
      width: "4px",
      height: "100%",
    },
  };

  const dataEntry = [
    {
      text: "Wrote my first blog post ever on Medium Wrote my first blog post ever on Medium Wrote my first blog post ever on Medium Wrote my first blog post ever on Medium",
      date: "March 03 2017",
      logo: ClickUp,
      link: {
        url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
        text: "Read more",
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

  const TimelineItem = ({ data }) => (
    <Container>
      <Container style={style.timelineItem}>
        <Container style={style.timelineItemContent}>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
            <a href={data.link.url} target="_blank" rel="noopener noreferrer">
              {data.link.text}
            </a>
          )}
          <Container
            style={{
              position: "absolute",
              //top: "calc(50% - 10px)",
              left: "-70px",
              width: "50px",
              height: "50px",
              zIndex: "100",
            }}
          >
            <p>hi</p>

            {/* <Container
            style={{
              backgroundImage: `url(${data.logo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              border: "1px solid",
              borderRadius: "100%",
              // position: "absolute",
              // top: "calc(50% - 10px)",
              // left: "-70px",
              width: "50px",
              height: "50px",
              // zIndex: "100",
            }}
          ></Container> */}

            <p>hi</p>
          </Container>
        </Container>
      </Container>
      <Button
        style={{
          backgroundImage: `url(${data.logo})`,
          backgroundSize: "cover",
          backgroundColor: "white",
          borderColor: "black",
          border: "3px solid",
          borderRadius: "100%",
          width: "100px",
          height: "100px",
        }}
        onClick={() => {
          setShowContainer(true);
        }}
      ></Button>
    </Container>
  );

  const Timeline = () =>
    dataEntry.length > 0 && (
      <Container style={style.timelineContainer} className="overflow-auto">
        {dataEntry.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </Container>
    );

  return <Timeline />;
}
