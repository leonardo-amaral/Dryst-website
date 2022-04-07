import Nav from "./components/Nav";
import './App.css'
import Title from "./components/Title";
import SlideSection from "./components/SlideSection";
import SectionInput from "./components/SectionInput";
import { motion } from 'framer-motion'


function App() {
  return (
    <div className="App">
      <Nav />
      <Title className="title"/>
      <div className="organization">
      <SlideSection className="section1" />
      <SectionInput className="section2" />
      </div>
    </div>

  );
}

export default App;
