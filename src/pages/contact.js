import {
  Row,
  Col,
  Button,
  Container,
  Image,
  Form,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";
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
  const [hoverPhone, setHoverPhone] = useState("grey");
  const [hoverEmail, setHoverEmail] = useState("grey");
  const [refresh, setRefresh] = useState(false);
  const [form, setForm] = useState({
    name: "",
    comment: "",
  });

  const [comments, setComments] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getComments() {
      const response = await fetch(`http://localhost:5050/comment/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const comments = await response.json();
      setComments(comments);
    }

    getComments();
    setRefresh(false);

    return;
  }, [comments.length, refresh]);

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newComment = { ...form };

    await fetch("http://localhost:5050/comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", comment: "" });
    setRefresh(true);
  }

  async function deleteComment(id) {
    await fetch(`http://localhost:5050/comment/${id}`, {
      method: "DELETE",
    });

    const newComments = comments.filter((el) => el._id !== id);
    setComments(newComments);
  }

  const style = {
    container: {
      margin: "0",
      padding: "0",
      height: "100%",
      backgroundColor: "transparent",
      display: "flex",
      overflow: "scroll",
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
            onMouseEnter={() => setHoverEmail("white")}
            onMouseLeave={() => setHoverEmail("grey")}
          >
            pjb.den@gmail.com
          </Button>
        </Col>
        <Col style={{ textAlign: "center" }} sm={12}>
          <Button
            href="tel:7202725223"
            variant="link"
            style={style.phoneLink}
            onMouseEnter={() => setHoverPhone("white")}
            onMouseLeave={() => setHoverPhone("grey")}
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
      <Container
        style={{
          marginTop: "2vh",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
        }}
      >
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="name.ControlInput">
            <Form.Label style={{ color: "white" }}>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="ex. John Appleseed"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="comment.ControlTextarea">
            <Form.Label style={{ color: "white" }}>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={form.comment}
              onChange={(e) => updateForm({ comment: e.target.value })}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Container
        style={{
          marginTop: "2vh",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
        }}
      >
        {comments.map((data) => (
          <Card style={{ margin: "5%", padding: "5%" }}>
            <Card.Title>{data.name}</Card.Title>
            <Card.Body>{data.comment}</Card.Body>

            <Card.Subtitle>
              <Button
                variant="dark"
                onClick={() => {
                  deleteComment(data._id);
                }}
              >
                Delete
              </Button>
            </Card.Subtitle>
          </Card>
        ))}
      </Container>
    </Container>
  );
}
