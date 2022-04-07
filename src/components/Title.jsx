import React from 'react'
import './Title.css'
import { motion } from 'framer-motion'

function Title() {
  return (
    <>
      <div className='title-div'>
        <div className='title-content'>
          <div className='line1'>

          </div>
          <motion.h1 className="title" whileHover={{ scale: 0.5 }} transition={{ duration: 0.5 }}>
            Dryst
          </motion.h1>
          <div className='line'>
            -
          </div>
        </div>
      </div>
    </>
  )
}

export default Title