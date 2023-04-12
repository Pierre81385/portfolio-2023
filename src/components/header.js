import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  const style = {
    mainNav: {
      marginLeft: "auto",
      marginRight: "0",
    },
    nav: {
      justifyContent: "center",
    },
    navLink: {
      fontSize: "large",
    },
  };

  return (
    <Navbar style={style.mainNav}>
      <Nav className="me-auto" style={style.nav}>
        <Nav.Link href="/about" style={style.navLink}>
          about
        </Nav.Link>
        <Nav.Link href="/work" style={style.navLink}>
          work
        </Nav.Link>
        <Nav.Link href="/contact" style={style.navLink}>
          contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
