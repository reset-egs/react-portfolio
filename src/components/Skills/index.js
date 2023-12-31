import './index.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility once partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Over the course of my education and relevant experience I have touched upon many skills. Some of the highlighted ones are: </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={meter1} alt="Meter 1" />
                                    <h5>Software Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Meter 2" />
                                    <h5>Software Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Meter 3" />
                                    <h5>Agile Methodologies</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Meter 4" />
                                    <h5>Requirements Gathering</h5>
                                </div>
                            </Carousel>
                        </div>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            
            <img className="background-image-left" src={colorSharp} alt="Gradient" />
        </section>
    );
};

export default Skills;