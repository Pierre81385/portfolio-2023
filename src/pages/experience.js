import { Container, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import ClickUp from "../assets/clickup.png";
import Foraged from "../assets/foraged.jpg";
import DU from "../assets/DU.png";
import MHS from "../assets/mhs.png";
import Baruch from "../assets/baruch.png";

export default function Experience() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [display, setDisplay] = useState("none");
  const [blur, setBlur] = useState("0px");
  //const [index, setIndex] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const style = {
    container: {
      display: "flex",
      overflowX: "scroll",
      padding: "20px",
      width: "100%",
      height: "100%",
    },
  };

  const content = [
    {
      logo: ClickUp,
      company: "ClickUp",
      position: "Technical Support Specialist, QA, API Subject Matter Expert",
      subtitle: "June 2022 - Present",
      description:
        "Working with the Engineering and Development teams I work to quickly validate bugs reported by users through reproduction, analysis of tools like Chrome DevTools and DataDog, and by examining the underlying code or API to provide concise and detailed reports to address confirmed defects. As the API Subject Matter Expert I maintain a thorough knowledge of the ClickUp API, testing it with Postman or custom javascript applications.  I’ve also taken the initiative to develop a growing library of custom scripts to build automate testing and build out content via the API which I share with my team.  I also help teach new and current team members with subjects including Git, web hooks, API testing, and the best testing methodology for these features.  I assist the Q/A team in regression testing, investigating, and documenting defects to help ensure the best quality product reaches the end user whenever possible.  ",
      skills:
        "REST API, Webhooks, Javascript, HTML, CSS, Git (Github, Bitbucket, and GitLab)",
    },
    {
      logo: Foraged,
      company: "For[a]ged",
      position: "Bartender",
      subtitle: "March 2021 - June 2022",
      description:
        "At Foraged I produced craft coctails for guests in a fast paced, high volumn, upscale establishment.  I developed a thurough knowledge of classic cocktails, custom craft coctails, and an extensive list of beers, wines, sake, and spirits to ensure each customer was presented with a clear understanding of availible choices. ",
      skills:
        "Leadership, book keeping, mixology, customer satisfaction, relationship building",
    },
    {
      logo: DU,
      company: "University of Denver",
      position: "Student",
      subtitle: "",
      description: "",
      skills: "",
    },
    {
      logo: MHS,
      company: "Mile High Spirits Distilery",
      position: "Bartender/Distilery Production/Educator",
      subtitle: "",
      description: "",
      skills: "",
    },
    {
      logo: Baruch,
      company: "CUNY Baruch College",
      position: "Student",
      subtitle: "",
      description: "",
      skills: "",
    },
  ];
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Container style={style.container}>
      <Carousel
        variant="dark"
        style={style.carousel}
        indicators={false}
        controls={true}
      >
        {content.map((src) => (
          <Carousel.Item id={src}>
            <Card
              key={src.logo}
              style={{
                flexShrink: 0,
                width: width * 0.75,
                height: height * 0.8,
                borderRadius: "10px",
                marginLeft: "10px",
                marginTop: "20px",
                marginBottome: "20px",
              }}
              onMouseEnter={() => {
                setDisplay("block");
                setBlur("30px");
              }}
              onMouseLeave={() => {
                setDisplay("none");
                setBlur("0px");
              }}
            >
              <Card.Img
                src={src.logo}
                style={{
                  filter: `blur(${blur})`,

                  margin: "auto",
                  padding: "auto",
                  maxHeight: "100%",
                  objectFit: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                }}
              ></Card.Img>
              <Card.ImgOverlay>
                <Container
                  style={{
                    display: display,
                    width: "80%",
                    height: "90%",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Card.Title>{src.company}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {src.subtitle}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {src.position}
                  </Card.Subtitle>
                  <Card.Text
                    style={{
                      height: "80%",
                      textAlign: "start",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {src.description}
                  </Card.Text>
                  <Card.Text>{src.skills}</Card.Text>
                </Container>
              </Card.ImgOverlay>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
