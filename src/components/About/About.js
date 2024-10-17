import { Col, Container, Row } from "react-bootstrap"
import profileImg from "../../assets/img/ProfileImg2.jpeg";
import stream from "../../assets/img/stream.svg";
import metro from "../../assets/img/metro.svg";
import console from "../../assets/img/console.svg";

import '../About/About.css';

export const About = () => {
    return (
        <div className="main-about">
            <section>
                <Container>
                    <Row>
                        <Col size={12} md={6}>
                            <div className="image-container">
                                <img className={"image-profile"} src={profileImg} alt="Contact Us" />
                            </div>
                        </Col>
                        <Col size={12} md={6}>
                            <div>
                                <h2>About Me</h2>
                                <p>
                                👋 Hello! I'm a 🎯 Data Enthusiast, passionate about transforming raw data into actionable insights.
                                <br/>
                                <br/>
                                I've applied these skills in real-world projects, like predicting subway delays to improve commuter experience by 15% and creating a Power BI dashboard that reduced player scouting time by 8% in the gaming industry.
                                <br/>
                                <br/>
💡 My experience with Google Analytics 4 and social media analytics highlights my ability to leverage cutting-edge tools for impactful insights. I've successfully led data migration projects, improving data accuracy by 25%, and developed strategies that increased website traffic by 30%.
<br/>
<br/>

Let's connect to explore how we can drive your business success with data-driven strategies and actionable insights!
                                </p>
                                <br />
                                <br />
                                <br />
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Skills /> */}
            </section>
        </div >
    )
}