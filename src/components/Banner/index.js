import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'
import { Container, Row, Col } from 'react-bootstrap'
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import headerImg from '../../assets/img/header-img.svg'
import { useEffect, useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Backend", "Frontend", "Fullstack"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1000;


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => clearInterval(ticker);
        // eslint-disable-next-line
    }, [text]);

    const tick = () => {
        let i = index % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setIndex(index + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility once partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className='tagline'>Welcome to my Portfolio</span>
                                    <h1>Hi, I'm Simon -<br></br> <span className='wrap'>{text} Developer</span></h1>
                                    <p>I'm an ambitious fullstack developer looking for a role in an established IT company,
                                        where I could apply my skills and knowledge to help the company grow while working on
                                        challenging projects.</p>
                                    <p className="scroll-down animate__animated animate__shakeY animate__delay-2s"><FontAwesomeIcon icon={faDownLong}></FontAwesomeIcon> Scroll down <FontAwesomeIcon icon={faDownLong}></FontAwesomeIcon></p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Banner;