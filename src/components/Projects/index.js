import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./card";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVuejs, faHtml5, faCss3, faReact, faLaravel, faGitAlt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import cSharp from '../../assets/img/c-sharp-c.svg';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {

    const projects = [
        {
            title: "Vue Weather App",
            description: "A functional weather app with a dynamic background based on the current weather conditions.",
            imgUrl: projImg1,
        },
        {
            title: "ZSAT - Zealand Student Administration System",
            description: "A student administration system for Zealand Academy of Technologies and Business.",
            imgUrl: projImg2,
        },
        {
            title: "Zeaploy",
            description: "A job portal for students of Zealand Academy of Technologies and Business.",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility once partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>About me</h2>
                                    <p>I believe that there is no task too hard to handle and I'm always ready to learn new things and improve my skills,
                                        as continuous learning is the key to success, especially in programming.
                                        If I were to describe myself in one sentence it would be a
                                        a coffee-driven e-sport enthusiast, music lover and technology geek.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Technologies</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="first">
                                                <Row>

                                                    <Col xs={12} lg={6}>
                                                        <p>
                                                            I'm proficient in a variety of technologies and languages, including:
                                                        </p>
                                                        <div className="technology">
                                                            <div className="technology-name">
                                                                <img className="c-icon" src={cSharp} /> C#/.NET
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" style={{ width: '80%' }}>
                                                                    80%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="technology">
                                                            <div className="technology-name">
                                                                <FontAwesomeIcon icon={faDatabase} color="#0a3565" /> SQL
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" style={{ width: '75%' }}>
                                                                    75%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="technology">
                                                            <div className="technology-name">
                                                            <FontAwesomeIcon icon={faLaravel} color="#f05340" /> PHP/Laravel
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" style={{ width: '85%' }}>
                                                                    85%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="technology">
                                                            <div className="technology-name">
                                                                <FontAwesomeIcon icon={faVuejs} color="#41b883" /> Vue.js
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" style={{ width: '90%' }}>
                                                                    90%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="technology">
                                                            <div className="technology-name">
                                                                <FontAwesomeIcon icon={faJsSquare} color="#f0db4f" /> JavaScript
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" style={{ width: '90%' }}>
                                                                    90%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="technology">
                                                            <div className="technology-name">
                                                                <FontAwesomeIcon icon={faHtml5} color="#F06529" /> HTML5/CSS3
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" style={{ width: '80%' }}>
                                                                    80%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xs={12} lg={6}>
                                                        <div className="stage-cube-cont">
                                                            <div className='cubespinner'>
                                                                <div className='face1'>
                                                                    <FontAwesomeIcon icon={faVuejs} color="#41b883" />
                                                                </div>
                                                                <div className='face2'>
                                                                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                                                                </div>
                                                                <div className='face3'>
                                                                    <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                                                                </div>
                                                                <div className='face4'>
                                                                    <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                                                                </div>
                                                                <div className='face5'>
                                                                    <FontAwesomeIcon icon={faLaravel} color="#f05340" />
                                                                </div>
                                                                <div className='face6'>
                                                                    <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects;
