import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/download.webp";
import Linkedin from "../assets/img/LinkedIn-icon.svg";
import Github from "../assets/img/github-mark-white.svg";
import Instagram from "../assets/img/Instagram-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shrey-kataria-89680b122/">
                <img src={Linkedin} alt="Icon" />
              </a>
              <a href="https://github.com/shreyKataria">
                <img src={Github} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/why_shrey/">
                <img src={Instagram} alt="Icon" />
              </a>
            </div>
            <p>Thanks!! Shrey Kataria</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
