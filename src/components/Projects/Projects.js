import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard";
import { Card } from '../Card/Card';
import projImg1 from "../../assets/img/Login.png";
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
// import { useHistory } from 'react-router-dom';
import '../Projects/Projects.css'

export const Projects = () => {
    // const history = useHistory();
    const button1 = "https://github.com/MihirDharaiya"
    const handleButtonClick = (event) => {
        event.preventDefault();
        window.location.href = "./ProjectsList.js";
    };

    const projects = [
        {
            title: "Dashboard",
            description: "Video Game Analysis",
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
            title: "License/Certification",
            description: "Microsoft: Power BI Data Analyst Associate",
            imgUrl: pl300,
            link: "https://learn.microsoft.com/en-us/users/mihirdharaiya-5742/credentials/certification/data-analyst-associate?tab=credentials-tab"
        },
        {
            title: "Professional Certificate",
            description: "Google Data Analytics",
            imgUrl: google,
            link: "https://www.coursera.org/account/accomplishments/professional-cert/N59F8ZVJFUVR"
        },
        {
            title: "Certificate",
            description: "Data Analyst Track",
            imgUrl: Datacamp1,
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/5508fcb1201a9e972ca3860c274f9bc12b842b13"
        },
        {
            title: "Certificate",
            description: "Introduction to R",
            imgUrl: Datacamp2,
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a88ab67cfc600f069bdde176cac62c5495658b0f"
        },
        {
            title: "Certificate",
            description: "Intermediate R",
            imgUrl: Datacamp3,
            link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4a2eea5342413daaeb48834c42e3f5912e055772"
        },

    ];
    const [cards, setCards] = useState(projects);
    const loadMoreCards = () => {
        const cards = [{
            title: "Dashboard",
            description: "Stock Market Analysis",
            imgUrl: projImg2,
        },
        {
            title: "Dashboard",
            description: "Churn Analysis",
            imgUrl: projImg3,
        },];
        const newCards = Array.from({ length: 4 }, (_, index) => ({
            title: `Card ${cards.length + index + 1}`,
            description: `Card ${cards.length + index + 1}`,
            imgUrl: `Card ${cards.length + index + 1}`
        }));

        setCards([...cards, ...newCards]);
    };
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
                                                <Row>
                                                    {
                                                        projects.map((cards, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...cards}
                                                                />

                                                            )

                                                        })

                                                    }
                                                    {/* <button onClick={loadMoreCards} style={{ width: "100%", color: "white", fontSize: "20px", marginTop: "10px" }}>Explore More</button> */}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        certifications.map((certifications, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...certifications}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    {/* <button style={{ width: "100%", color: "white", fontSize: "20px", marginTop: "10px" }}><span>Explore More</span></button> */}

                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}