import Nav from "./components/Nav";
import './App.css'
import Title from "./components/Title";
import Carrousel, { CarouselItem } from "./components/Carrousel";
import SectionInput from "./components/SectionInput";
import { motion } from 'framer-motion'
import Image1 from './components/assets/image1.jpeg'
import Image2 from './components/assets/image2.jpg'
import Image3 from './components/assets/image3.jpeg'
import Image4 from './components/assets/image4.jpeg'


function App() {
  return (
    <div className="App">
      <Nav />
      <Title className="title"/>
      <div className="organization">
      <Carrousel className="section1">
        <CarouselItem><img className="Image1" src={Image2} alt="" /></CarouselItem>
        <CarouselItem><img className="Image1" src={Image3} alt="" /></CarouselItem>
        <CarouselItem><img className="Image1" src={Image4} alt="" /></CarouselItem>
      </Carrousel>
      <SectionInput className="section2" />
      </div>
    </div>

  );
}

export default App;
