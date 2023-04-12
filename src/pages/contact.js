import { Container, Image, Stack } from "react-bootstrap";
import Header from "../components/header";
import PostIt1 from "../assets/post1.png";

export default function Contact() {
  const style = {
    container: {
      height: "100%",
      width: "100%",
    },
    img: {
      marginTop: "10%",
      marginLeft: "30%",
    },
  };

  return (
    <Container fluid style={style.backgroundImg}>
      <Stack direction="vertical">
        <Header />
        <Container fluid style={style.container}>
          <Image src={PostIt1} alt="post it" style={style.img}></Image>
        </Container>
      </Stack>
    </Container>
  );
}
