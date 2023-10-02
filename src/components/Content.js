import "./Content.css";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyImage from "../assets/img/Untitled design.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import { Skills } from "./Skills";

export const Content = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);

  const toRotate = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, [delta]);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Hi! My Name is Shrey</span>
                    <h1>
                      {`I'm a `}{" "}
                      <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Full Stack Developer", "Frontend Developer", "Backend Developer" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Self- driven, B-tech Graduate from Patel Institute of
                      Science And Technology. I work as a Full Stack Developer
                      at Compport Solutions. I find my passion in building apps
                      from scratch and learning new things.
                    </p>
                    <span>
                      <a href="#connect" className="button">
                        Let’s Connect
                        <ArrowRightCircle size={25} />
                      </a>
                    </span>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={MyImage} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <Skills />
    </>
  );
};
