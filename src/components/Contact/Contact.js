import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import navIcon1 from "../../assets/img/message.svg";
import navIcon2 from "../../assets/img/call.svg";
import navIcon3 from "../../assets/img/account.svg";
import linkedin from '../../assets/img/nav-icon1.svg';
import github from '../../assets/img/github.svg';
import twitter from '../../assets/img/twitter.svg';
import '../Contact/Contact.css';

export const Contact = () => {

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail_service', 'contact_me_form', form.current, {
        publicKey: 'oUl30g-qhCSyzmY-x',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
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
                                    <p>Want to collaborate on a project? Or maybe just wanna say hello? I’d love to hear from you!</p>
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
                            <div className="card-form">
                                <form ref={form} onSubmit={sendEmail}>
                                    <Row>
                                        <Col size={12} sm={12} className="px-1">
                                            <input type="text" name="user_name" placeholder="Full Name"/>
                                        </Col>
                                        <Col size={12} sm={12} className="px-1">
                                            <input type="email" name="user_email" placeholder="Email Address"/>
                                        </Col>
                                        <Col size={12} className="px-1">
                                            <textarea rows="6" name="message" placeholder="Message"></textarea>
                                            <button value="Send" type="submit"><span>Send Message</span></button>
                                        </Col>
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
