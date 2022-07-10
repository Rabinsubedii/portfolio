
import './App.css';
import './css/service.css'
import './css/skill.css';
import './css/about.css';
import Aos from "aos"
import 'aos/dist/aos.css';
import  './Components/JS/index'
import Navigation from './Components/Homepage/Navigation';
import Service from './Components/Service/service';
import Skill from './Components/Skill/skill';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Down from './Components/Ftr/down';
import Edu from './Components/Education/education'
import Body from './Components/Homepage/body';

function App() {

    Aos.init({ duration: 2000 });

  return (

    <div className="App">
        <Navigation />
        <Body/>
        <Service />
      <Skill />
      <About />
      <Edu/>
      <Contact />
      <Down/>
      </div>

  );
}

export default App;
