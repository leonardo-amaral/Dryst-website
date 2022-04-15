import React from 'react'
import './Carrousel.css'
import { motion } from 'framer-motion';
import { useState } from 'react'
import { CgChevronDoubleRight } from "react-icons/cg";
import { CgChevronDoubleLeft } from "react-icons/cg";
export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1
    }

    setActiveIndex(newIndex)
  };

  return (
    <motion.div className="carousel"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ damping: 10, duration: 1 }}>
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <motion.button whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)" }} className='buttons-slide' onClick={() => {
          updateIndex(activeIndex - 1)
        }}
        >
          <CgChevronDoubleLeft />
        </motion.button>
        <motion.button whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)" }} className='buttons-slide' onClick={() => {
          updateIndex(activeIndex + 1)
        }}
        >
          <CgChevronDoubleRight />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Carousel