import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollButton />
    </div>
  );
}

export default App;