import RyanThomasSignature from "../images/RyanThomasSignatureLogo.png";
import "./MenuBar.css";
import { Nav, Navbar, Container, Image, Row } from "react-bootstrap";

const MenuBar = () => {
  return (
    <Row id="top">
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={RyanThomasSignature}
              alt="Ryan Thomas Signature "
              // rounded
              id="ryan-signature"
            ></Image>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Row>
  );
};

export default MenuBar;
