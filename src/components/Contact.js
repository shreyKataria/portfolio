import "./Contact.css";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/—Pngtree—white call icon png_3562069.png";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Footer } from "./Footer";

export const Contact = () => {
  const PublicKey = "birBZeNvQeMxs72cE";
  const serviceID = "service_1q48w7i";
  const templateParams = "template_aixbi1v";

  const form = useRef();
  //  const [buttonText , setButtonText] = useState('send')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setButtonText("Sending...");

    emailjs.sendForm(serviceID, templateParams, form.current, PublicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  const notify = () => toast("Messege send successfully");

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Contact Me</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                      <label>Name</label>
                      <input type="text" name="user_name" />
                      <label>Email</label>
                      <input type="email" name="user_email" />
                      <label>Message</label>
                      <textarea name="message" />
                      <input type="submit" value="send" onClick={notify} />
                      <Toaster />
                    </form>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
