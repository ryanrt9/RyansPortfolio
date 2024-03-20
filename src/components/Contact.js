import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Col id="contact">
      <hr class="bar"></hr>
      <h1 class="cont">Contact Me</h1>
      <Row>
        <a class="contacts" href="mailto: ryan.r.thomas1@gmail.com">
          <MdOutlineMail /> Ryan.r.thomas1@gmail.com
        </a>
        <a class="contacts" href="http://www.linkedin.com/in/ryan-r-thomas">
          <FaLinkedin /> LinkedIn.com/in/ryan-r-thomas
        </a>
        <a class="contacts" href="https://github.com/ryanrt9">
          <FaGithubSquare /> Github.com/ryanrt9
        </a>
      </Row>
    </Col>
  );
};

export default Contact;
