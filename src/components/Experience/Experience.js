import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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
                        <h4 className="vertical-timeline-element-title">Data Analyst Intern</h4>
                        <h5 className="vertical-timeline-element-subtitle">Indus University</h5>
                        <p>
                            Developed and implemented a multifunctional platform for social media creators, enabling them to optimize content strategy across YouTube, Twitter, and Instagram.
                            <br />
                            <br />
                            Incorporated machine learning techniques for Twitter sentiment analysis, providing creators with valuable insights and increasing engagement by about 10%.
                            <br />
                            <br />
                            Empowered creators to improve content and grow online presence by 8% with user-friendly trend analysis tools.
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
                        iconStyle={{ alignItems: 'center', background: 'white', justifyContent: 'center' }}
                        icon={<CodingNinjasIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Teaching Assistant</h4>
                        <h5 className="vertical-timeline-element-subtitle">Coding Ninjas</h5>
                        <p>
                            Guided students through the resolution of over 500 queries concerning Data Structures and Algorithms in JAVA.
                            <br />
                            <br />
                            Managed scenarios encompassing debugging, code enhancement, time complexity optimization, and explanation of
                            methodologies with effective problem-solving skills.
                            <br />
                            <br />
                            Received outstanding feedback, earning a rating of 4.7 out of 5 from students for effectively resolving queries.

                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </section>
    )
}