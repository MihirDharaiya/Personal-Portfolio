import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const [Disable, setDisable] = useState(false)
    const form = useRef();

    const notify = () => {

        setDisable(true)

        setTimeout(() => {
            setDisable(false)

        }, 10000)

        // Form clearance logic Mk.1
        document.getElementById("myForm").reset();

        //react-toastify || promise function to be added
        toast.success('Message sent successfully!', {
            position: "bottom-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            bodyStyle: { padding: "5px", marginInline: "10px", display: "flex", gap: "7px" },
        });

        // // Form clearance logic Mk.2
        // console.log("FORM", form)
        // form.current[0].value = ""
        // form.current[1].value = ""
        // form.current[2].value = ""


    };

    // Disable this function while testing react-toastify
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('gmail_service', 'contactMeForm', form.current, {
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

    // // Enable this function while testing react-toastify
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     console.log("button working!");
    // };


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
                                <form id="myForm" ref={form} onSubmit={sendEmail}>
                                    <Row>
                                        <Col size={12} sm={12} className="px-1">
                                            <input type="text" name="user_name" placeholder="Full Name" />
                                        </Col>
                                        <Col size={12} sm={12} className="px-1">
                                            <input type="email" name="user_email" placeholder="Email Address" />
                                        </Col>
                                        <Col size={12} className="px-1 ">
                                            <textarea rows="6" name="message" placeholder="Message"></textarea>
                                            <button onClick={notify} disabled={Disable} value="Send" type="submit" style={Disable ? { backgroundColor: "black" } : { backgroundColor: "#4275FA" }}><span>Send Message</span></button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>
            </section>
        </div>
    )
}
