import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import indus from "../../assets/img/indus.webp.png";
import codingNinjas from "../../assets/img/CodingNinjas.png";
import '../Experience/Experience.css'

export const Experience = () => {
    return (
        <section className="experience">
            <Container>
                <div>
                    <h2>Experience</h2>
                </div>

                <VerticalTimeline lineColor="#4275FA">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rbga(53, 61, 219, 0.24)",
                            color: '#4275FA',
                            borderRadius: '10px',
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  rbga(53, 61, 219, 0.24)' }}
                        date="Jun 2022 - Aug 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={ }
                    >
                        <h4 className="vertical-timeline-element-title">Software Developer Intern</h4>
                        <h5 className="vertical-timeline-element-subtitle">Indus University</h5>
                        <p>
                            -Creator-IT serves as a platform for optimizing SEO and providing recommendations tailored to YouTubers, Instagram creators, and creators on various other platforms.                            <br />
                            <br />
                            -Project's objective was to suggest catchy titles, thumbnails, and Hashtags to increase engagement from 5 - 10% to 25 - 30%.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "rbga(53, 61, 219, 0.24)",
                            color: '#4275FA',
                            borderRadius: '10px',
                            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                        }}
                        contentArrowStyle={{ borderRight: '7px solid  rbga(53, 61, 219, 0.24)' }}
                        date="Sep 2021 - Jan 2022"
                        iconStyle={{ alignItems: 'center', background: 'white' }}
                        icon={
                            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <img src={codingNinjas} alt="CN" style={{ width: "70%" }} />
                            </div>}
                    >
                        <h4 className="vertical-timeline-element-title">Teaching Assistant</h4>
                        <h5 className="vertical-timeline-element-subtitle">Coding Ninjas</h5>
                        <p>
                            -Mentored students and solved more than 500+ doubts with rating of 4.7 aggregate.
                            <br />
                            <br />
                            -Handled scenarios associated with debugging, optimising code, improving time complexity, and explaining approach.


                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </section>
    )
}