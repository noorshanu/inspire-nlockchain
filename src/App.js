
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'
import Tokonomic from './components/Tokenomic';
import Roadmap from './components/RoadMap';
import World from './components/World'
import HeaderSection from 'components/HeaderSection';
import Ecosystem from 'components/Ecosystem';
import Footer from 'components/Footer';
import Eco from 'components/Ecosystem/Eco';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeaderSection/>
    <HeroSection/>
    <AboutSection/>
    <Tokonomic/>
    <Roadmap/>
    <World/>
    <Ecosystem/>
    <Eco/>
    <Footer/>
    </div>
  );
}

export default App;
