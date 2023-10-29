import NavBar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
