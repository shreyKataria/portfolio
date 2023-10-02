import "./Projects.css";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/Screenshot from 2023-10-02 12-20-44.png";
import projImg2 from "../assets/img/Screenshot from 2023-10-02 12-21-35.png";
import projImg3 from "../assets/img/Screenshot from 2023-10-02 13-44-40.png";
import TrackVisibility from "react-on-screen";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export const Projects = () => {
  const project1 = [
    {
      title: "Redbus Clone",
      description: "Bus Booking app",
      imgUrl: projImg1,
    },
  ];
  const project2 = [
    {
      title: "Tesla.com Clone",
      description: "Buy .ev in ease",
      imgUrl: projImg2,
    },
  ];
  const project3 = [
    {
      title: "ISRO",
      description: "Space-station Search",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {project1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          <p>
                            {
                              "RedBus offers a convenient way to plan and book bus journeys across a wide range of routes, making it a go-to choice for travelers seeking hassle-free bus ticket bookings. The website provides essential information such as bus schedules, seat availability, and payment options, simplifying the process of arranging bus travel for millions of passengers."
                            }
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          <p>
                            {
                              "Tesla's website offers details on their diverse vehicle lineup, including electric cars like the Model S, Model 3, Model X, and Model Y, as well as energy products like solar panels and Powerwall. It also provides resources for potential buyers, Tesla owners, and those interested in Tesla's vision for a more sustainable future."
                            }
                          </p>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {project3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          <p>
                            {
                              "Users can search for ISRO centers by name or location, and the website offers detailed information on each center, including its location, mission focus, and contributions to India's space efforts. Whether you want to learn about a specific center or plan a visit, this feature simplifies the exploration of ISRO's diverse research facilities, making it a valuable resource for space enthusiasts. "
                            }
                          </p>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
