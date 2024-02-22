import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../../assets/img/MD.svg";
import '../Footer/Footer.css';

export const Footer = () => {
    const mailtoHref = "mailto:mdharaiya800@gmail.com?subject=SendMail&body=Description";
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col size={10} sm={6}>
                        <img src={logo} alt="" />
                        {/* <p>Mihir Dharaiya</p>
                        <p>+1 437-557-6807</p>
                        <p>mdharaiya800@gmail.com</p> */}
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="icon">
                            {/* <div className="social-icon">
                                <a href="tel:4375576807"><img src={navIcon2} alt="Icon" /></a>
                                <a href={mailtoHref}><img src={navIcon1} alt="Icon" /></a>
                                <p>+1 437-557-6807&nbsp;&nbsp;mdharaiya800@gmail.com</p> 
                            </div> */}
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}