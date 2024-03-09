import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import indus from "../../assets/img/indus.webp.png";
import codingNinjas from "../../assets/img/CodingNinjas.png";
import '../Experience/Experience.css'
import { IndusIcon } from "../IndusIcon";
import { CodingNinjasIcon } from "../CodingNinjasIcon";

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
                        icon={<IndusIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Software Developer Intern</h4>
                        <h5 className="vertical-timeline-element-subtitle">Indus University</h5>
                        <p>
                            -Creator-IT functions as a platform designed to enhance SEO and offer personalized suggestions for individuals on YouTube, Instagram, and other diverse creator platforms.                            <br />
                            <br />
                            -The project aimed to propose captivating titles, thumbnails, and hashtags with the goal of elevating engagement rates from 5-10% to 25-30%.                        </p>
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
                        iconStyle={{ alignItems: 'center', background: 'white', justifyContent: 'center' }}
                        icon={<CodingNinjasIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Teaching Assistant</h4>
                        <h5 className="vertical-timeline-element-subtitle">Coding Ninjas</h5>
                        <p>
                            -Mentored students, resolving 500+ queries with a 4.7 rating.
                            <br />
                            <br />
                            -Managed situations involving debugging, code optimization, enhanced time complexity, and elucidated approaches.

                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </section>
    )
}