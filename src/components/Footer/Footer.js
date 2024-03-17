import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/MD.svg";
import '../Footer/Footer.css';

export const Footer = () => {
    const mailtoHref = "mailto:mdharaiya800@gmail.com?subject=SendMail&body=Description";
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col className="footer" size={10} sm={6}>
                        <img src={logo} alt="" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="icon">
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}