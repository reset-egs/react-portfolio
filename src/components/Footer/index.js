import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6} xl={12}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} xl={12} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/szymon-zwara-6b4349224/">
                                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/reset-egs">
                                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                            </a>
                            <FontAwesomeIcon icon={faCopyright} /> Szymon Zwara, 2023
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;