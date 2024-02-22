// import logo from '../assets/img/logo.svg';
import '../App.css';
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Education } from './Education';
export const Home = () => {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
