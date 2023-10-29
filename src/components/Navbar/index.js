import './index.css'
import { Navbar, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import logo from '../../assets/img/logo.svg'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const onToggleHamburger = (isOpen) => {
    setIsHamburgerOpen(isOpen);
  };

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  }

  return (
    <Navbar expand="lg" className={scrolled || isHamburgerOpen ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="white-fill"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => onToggleHamburger(!isHamburgerOpen)}>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" class={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" class={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" class={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About me</Nav.Link>
            <Nav.Link href="#connect" class={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/szymon-zwara-6b4349224/">
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/reset-egs">
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
              </div>
              <button onClick={() => window.scrollTo(0,document.body.scrollHeight)} className="flat-button">Let's connect</button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;