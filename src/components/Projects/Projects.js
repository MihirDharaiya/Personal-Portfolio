import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import indus from "../../assets/img/indusuniapp.png";
import airbnb from "../../assets/img/airbnb.png";
import churn from "../../assets/img/ChurnAnalysis.png";
import creatorit from "../../assets/img/creatorit.png";
import mobile from "../../assets/img/mobile-phone-evolution.jpg";
import python from "../../assets/img/Python.png";
import valorantstats from "../../assets/img/ValorantStatistics.png";
import gitflux from "../../assets/img/gitflux.png";
import ttc from "../../assets/img/ttc.webp";
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
            title: "Valorant Statistics",
            description: "Built a Power BI dashboard that reduced player scouting time by 8%, providing real-time insights on player statistics across agents and maps based on past tournament data. Analyzed a dataset of over 80,000 entries with diverse variables, offering comprehensive insights into player performance and strategic decisions.",
            imgUrl: valorantstats,
            urlLink: "https://app.powerbi.com/view?r=eyJrIjoiNGZiYWUyMjgtZmUyYS00NDY1LTlmYzgtNmY4MWYxMmVmYzUxIiwidCI6ImE4ZWVjMjgxLWFhYTMtNGRhZS1hYzliLTlhMzk4YjkyMTVlNyIsImMiOjN9&pageName=ReportSection6b109e940a393b49ebe0"
        },
        {
            title: "TTC Subway Delay Prediction",
            description: "Designed a platform using supervised machine learning techniques to predict subway delays, improving the commuter experience in Toronto by 15%. Executed ETL processes and conducted Exploratory Data Analysis (EDA) using Python and SQL, uncovering critical patterns that enhanced insights into delay factors.",
            imgUrl: ttc,
            urlLink: "https://github.com/MihirDharaiya/TTC-Subway-Delay-Prediction"
        },
        {
            title: "GitFlux",
            description: "Optimized GitHub account switching with a command-line app with seamless integration into npm, reducing manual switch time by 50% through an intuitive menu and safeguards for default accounts.",
            imgUrl: gitflux,
            urlLink: "https://github.com/MihirDharaiya/gitflux"
        },
        {
            title: "Creator-IT",
            description: "Creator-IT is SEO optimisation and recommendation website for Youtubers, Instagram creators and other platforms creators. Helps content creators in generating video titles, hashtags and much more.",
            imgUrl: creatorit,
            urlLink: "https://github.com/MihirDharaiya/creator_it"
        },
        {
            title: "Customer Churn Analysis",
            description: "This project aims to delve into customer churn within a company primarily operating in California. By analyzing different factors influencing customer attrition, we seek insights to guide strategic decision-making and improve efforts in retaining customers.",
            imgUrl: churn,
            urlLink: "https://github.com/MihirDharaiya/Telecom-Customer-Churn-Analysis"
        },
        {
            title: "Airbnb Real Estate Listings",
            description: "This project is focused on the analysis of the the Airbnb's Real Estate Listings dataset which is avaiable on kaggle.",
            imgUrl: airbnb,
            urlLink: "https://github.com/MihirDharaiya/Airbnb-Real-Estate-Listings-Analysis"
        },
        {
            title: "IndusUniApp",
            description: "The project is dedicated to addressing students inquiries and enhancing transparency between faculty members and students. There has been an 80% reduction in resolution time. The applications involved are IndusAchiever, IndusFaculty, and AdminPortal.",
            imgUrl: indus,
            urlLink: "https://github.com/MihirDharaiya/IndusUniApp"
        },
        {
            title: "Mobile Price Prediction",
            description: "Developed a Python-based Mobile Phone Price Prediction model for accurate forecasting of mobile phone prices, enhancing decision-making in the tech market.",
            imgUrl: mobile,
            urlLink: "https://github.com/MihirDharaiya/Mobile-Price-Prediction/blob/main/Mobile%20Price%20Prediction.ipynb"
        },

    ];

    const certifications = [
        {
            title: "Microsoft",
            description: "Power BI Data Analyst Associate",
            imgUrl: pl300,
            urlLink: "https://learn.microsoft.com/api/credentials/share/en-us/MihirDharaiya-5742/AE7F431C82055942?sharingId=D134CEE25DFE5F7C"
        },
        {
            title: "Google",
            description: "Google Data Analytics",
            imgUrl: google,
            urlLink: "https://www.coursera.org/account/accomplishments/professional-cert/N59F8ZVJFUVR"
        },
        {
            title: "University of Michigan",
            description: "Python for Everybody (Getting Started with Python)",
            imgUrl: python,
            urlLink: "https://www.coursera.org/account/accomplishments/verify/SVHUDB7ZKBKL"
        },
        {
            title: "DataCamp",
            description: "Data Analyst in Power BI",
            imgUrl: Datacamp1,
            urlLink: "https://www.datacamp.com/completed/statement-of-accomplishment/track/5508fcb1201a9e972ca3860c274f9bc12b842b13"
        },
        {
            title: "DataCamp",
            description: "Introduction to R",
            imgUrl: Datacamp2,
            urlLink: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a88ab67cfc600f069bdde176cac62c5495658b0f"
        },
        {
            title: "DataCamp",
            description: "Intermediate R",
            imgUrl: Datacamp3,
            urlLink: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4a2eea5342413daaeb48834c42e3f5912e055772"
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
                                    <p className='sub-heading'>I Excel in Crafting Powerful Analytics Projects, Business Intelligence Dashboards, and Insightful Data Reports.</p>
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
                                                        <Col md={6} lg={4} key={index} className="mb-4">
                                                            <MediaCard {...cards} />{/* <ImgMediaCard {...cards} /> */}
                                                            {/* <ImgMediaCard {...cards} /> */}
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row className="justify-content-center">
                                                    {certifications.map((cards, index) => (
                                                        <Col md={6} lg={4} key={index} className="mb-4">
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