import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar.js';
import { Banner } from './components/Banner/Banner.js';
import { Skills } from './components/Skills/Skills.js';
import { Projects } from './components/Projects/Projects.js';
import { Education } from './components/Education/Education.js';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';
import { About } from './components/About/About.js';
import { Experience } from './components/Experience/Experience.js';
import { Achievements } from './components/Achievements/Achievements.js';

const App = () => {
  return (

    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
