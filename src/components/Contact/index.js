import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg';
import TrackVisibility from 'react-on-screen';
import './index.css';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                'service_kgqe9h8',
                'template_g9863ua',
                refForm.current,
                'ijdWeVvcPjIVNy0zT'
            )
            .then(
                (result) => {
                    new Swal({
                        title: 'Success!',
                        text: 'Your message has been sent.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ffd700',
                    }).then(() => {
                        refForm.current.reset();
                    });
                },
                (error) => {
                    new Swal({
                        title: 'Error!',
                        text: 'Something went wrong. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#ffd700',
                    });
                }
            )
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <>
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility once partialVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility once partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form ref={refForm} onSubmit={sendEmail}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="name" placeholder="Name" required />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" name="email" placeholder="Email" required />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size={12} className="px-1">
                                                <textarea row="6" placeholder='Message' name="message" required></textarea>
                                                <input type="submit" className="flat-button" value="SEND" />
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
        {isLoading && <Loader type="ball-pulse-sync" className="email-loader"/>}
        <Loader type="ball-pulse-sync" />
        </>
    );
}

export default Contact;