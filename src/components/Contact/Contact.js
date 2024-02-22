import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/bgcontact.svg";
import back from "../../assets/img/bg_contact.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import navIcon1 from "../../assets/img/message.svg";
import navIcon2 from "../../assets/img/call.svg";
import navIcon3 from "../../assets/img/account.svg";
import linkedin from '../../assets/img/nav-icon1.svg';
import github from '../../assets/img/github.svg';
import twitter from '../../assets/img/twitter.svg';
import '../Contact/Contact.css';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    };

    return (
        <div className="main-contact">
            <section className="contact" id="connect">
                <Container>
                    <h2>Contact Me</h2>
                    <Row className="align-items-center">
                        <Col size={12} md={6}>
                            <div className="image-container">
                                <div className="info-contain">
                                    <h3>Contact Information</h3>
                                    <p>Have some project? or maybe just want to say hello? I’d love to hear from you</p>
                                    <div className="contact-info">
                                        <div className="icon">
                                            <img src={navIcon3} alt="" />
                                            <p>Mihir Dharaiya</p>
                                        </div>
                                        <div className="icon">
                                            <img src={navIcon2} alt="" />
                                            <p>+1 437-557-6807</p>
                                        </div>
                                        <div className="icon">
                                            <img src={navIcon1} alt="" />
                                            <p>mdharaiya800@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="social-icon">
                                        <a href="https://www.linkedin.com/in/mihir-dharaiya/"><img src={linkedin} alt="" /></a>
                                        <a href="https://github.com/MihirDharaiya"><img src={github} alt="" /></a>
                                        <a href="https://twitter.com/DharaiyaMihir"><img src={twitter} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col size={12} md={6}>
                            <div className={"card-form"}>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                        </Col>
                                        <Col size={12} className="px-1">
                                            <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                            <button type="submit"><span>Send Message</span></button>
                                        </Col>
                                        {
                                            status.message &&
                                            <Col>
                                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                            </Col>
                                        }
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </section>
        </div>
    )
}