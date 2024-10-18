import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Experience/Experience.css'
import { IndusIcon } from "../IndusIcon";
import { CodingNinjasIcon } from "../CodingNinjasIcon";
import { RcisIcon } from "../RcisIcon";


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
                        date="Apr 2024 - Jun 2024"
                        iconStyle={{ alignItems: 'center', background: 'white', justifyContent: 'center' }}
                        icon={<RcisIcon/>}
                    >
                        <h4 className="vertical-timeline-element-title">Student Data Analyst</h4>
                        <h5 className="vertical-timeline-element-subtitle">Royal Canadian Institute for Science</h5>
                        <p>
                        Led a cross-functional team to design and implement an ETL data migration architecture from Universal Analytics to Google Analytics 4, ensuring seamless data tracking continuity and improving data accuracy by 25%.                            <br />
                            <br />
                            Evaluated social network traffic data in depth and leveraged data-driven insights to enhance the social media content strategy, driving a 30% increase in website traffic.
                            <br />
                            <br />
                            Developed comprehensive data reports in Tableau by conducting Exploratory Data Analysis (EDA), delivering actionable insights and practical recommendations that aligned with key business goals.
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
                        date="Jun 2022 - Aug 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<IndusIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Data Analyst Intern</h4>
                        <h5 className="vertical-timeline-element-subtitle">Indus University</h5>
                        <p>
                        Directed the development of a versatile platform for social media creators, addressing the challenge of enhancing content strategy across YouTube, Twitter, and Instagram, successfully meeting business requirements.
                        <br />
                            <br />
                            Implemented machine learning techniques for Twitter sentiment analysis using Python, automating insight generation for creators, leading to a 10% increase in engagement and demonstrating proficiency in advanced analytics.
                            <br />
                            <br />
                            Facilitated creators growth by designing user-friendly Power BI dashboards, enabling them to independently enhance content, resulting in an 8% increase in online presence.
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
                        Mentored over 500 students in resolving complex inquiries related to Data Structures and Algorithms in Java, showcasing strong domain expertise and communication skills.
                        <br />
                            <br />
                            Managed challenging debugging and optimization scenarios, improving code efficiency and problem-solving approaches, while fostering a learning-focused environment.
                            <br />
                            <br />
                            Earned a 4.7/5 rating for consistently delivering high-quality assistance, demonstrating active listening, problem resolution, and clear communication skills.

                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </section>
    )
}