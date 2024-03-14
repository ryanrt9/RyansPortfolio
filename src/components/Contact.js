import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Col id="contact">
      <h1>Contact Me</h1>
      <Row>
        <a href="mailto: ryan.r.thomas1@gmail.com">
          <MdOutlineMail /> Ryan.r.thomas1@gmail.com
        </a>
        <a href="http://www.linkedin.com/in/ryan-r-thomas">
          <FaLinkedin /> LinkedIn.com/in/ryan-r-thomas
        </a>
        <a href="https://github.com/ryanrt9">
          <FaGithubSquare /> Github.com/ryanrt9
        </a>
      </Row>
    </Col>
  );
};

export default Contact;
