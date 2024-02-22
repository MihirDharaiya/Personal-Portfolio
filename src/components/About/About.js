import { Col, Container, Row } from "react-bootstrap"
import profileImg from "../../assets/img/ProfileImg2.jpeg";
import stream from "../../assets/img/stream.svg";
import metro from "../../assets/img/metro.svg";
import console from "../../assets/img/console.svg";
import { Skills } from '../Skills/Skills.js';

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
                                <h2>ABOUT ME</h2>
                                <p>
                                    Dedicated data enthusiast with a knack for transforming raw data into actionable insights. Proficient in statistical analysis, data visualization, and machine learning. I'm passionate about solving complex problems through data-driven decision-making. In addition to this, I am a major fan of esports. I enjoy playing first-person shooter games and learning about this expanding sector, which will soon rule the world. Let's connect to explore the exciting intersection of data analytics and esports!
                                </p>
                                <h4>MY HOBBY</h4>
                                <Row>
                                    <Col>
                                        <div className="hobby-container">
                                            <div className="stream-container">
                                                <img className={"stream"} src={stream} alt="Contact Us" />
                                                <span>STREAMS</span>
                                                <img className={"stream"} src={metro} alt="Contact Us" />
                                                <span>TRAVELLING</span>
                                                <img className={"stream"} src={console} alt="Contact Us" />
                                                <span>GAMING</span>
                                            </div>

                                        </div>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Skills /> */}
            </section>
        </div>
    )
}