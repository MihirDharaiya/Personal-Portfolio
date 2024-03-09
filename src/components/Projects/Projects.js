import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../../assets/img/indusuniapp.png";
import projImg2 from "../../assets/img/D2.jpg";
import projImg3 from "../../assets/img/D3.png";
import Datacamp1 from "../../assets/img/DataCamp1.png";
import Datacamp2 from "../../assets/img/Datacamp2.png";
import Datacamp3 from "../../assets/img/Datacamp3.png";
import pl300 from "../../assets/img/PL300.png";
import google from "../../assets/img/google.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../Projects/Projects.css'
import MediaCard from '../MediaCard';

export const Projects = () => {
    // const history = useHistory();
    const button1 = "https://github.com/MihirDharaiya"
    const handleButtonClick = (event) => {
        event.preventDefault();
        window.location.href = "./ProjectsList.js";
    };

    const projects = [
        {
            title: "Student-Faculty Interaction Portal (IndusUniApp)",
            description: "-Mentored students, resolving 500+ queries with a 4.7 rating.            ",
            imgUrl: projImg1,
        },
        {
            title: "Dashboard",
            description: "Walmart Sales Analysis",
            imgUrl: projImg1,
        },
        {
            title: "Dashboard",
            description: "Stock Market Analysis",
            imgUrl: projImg2,
        },
        {
            title: "Dashboard",
            description: "Churn Analysis",
            imgUrl: projImg3,
        },

    ];

    const certifications = [
        {
            title: "Microsoft",
            description: "Power BI Data Analyst Associate",
            imgUrl: pl300,
            link: "https://learn.microsoft.com/en-us/users/mihirdharaiya-5742/credentials/certification/data-analyst-associate?tab=credentials-tab"
        },
        {
            title: "Google",
            description: "Google Data Analytics",
            imgUrl: google,
            link: "https://www.coursera.org/account/accomplishments/professional-cert/N59F8ZVJFUVR"
        },
        {
            title: "DataCamp",
            description: "Data Analyst in Power BI",
            imgUrl: Datacamp1,
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/5508fcb1201a9e972ca3860c274f9bc12b842b13"
        },
        {
            title: "DataCamp",
            description: "Introduction to R",
            imgUrl: Datacamp2,
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a88ab67cfc600f069bdde176cac62c5495658b0f"
        },
        {
            title: "DataCamp",
            description: "Intermediate R",
            imgUrl: Datacamp3,
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4a2eea5342413daaeb48834c42e3f5912e055772"
        },

    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects & Certifications</h2>
                                    <p>I Excel in Crafting Powerful Analytics Projects, Business Intelligence Dashboards, and Insightful Data Reports.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Certifications</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row className="justify-content-center" style={{ alignItems: 'center', display: 'flex' }}>
                                                    {projects.map((cards, index) => (
                                                        <Col md={6} lg={6} key={index} className="mb-4">
                                                            <MediaCard {...cards} />{/* <ImgMediaCard {...cards} /> */}
                                                            {/* <ImgMediaCard {...cards} /> */}
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row className="justify-content-center">
                                                    {certifications.map((cards, index) => (
                                                        <Col md={6} lg={6} key={index} className="mb-4">
                                                            <MediaCard {...cards} />{/* <ImgMediaCard {...cards} /> */}
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            {/* ... (other Tab.Pane sections remain unchanged) */}
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background"></img>
        </section>
    )
}