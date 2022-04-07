import React from 'react'
import './Nav.css'
import { motion } from 'framer-motion'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function Nav() {

  const textAnimation = { whileHover: { scale: 1.2 } }

  return (
    <>
      <header>
        <nav>
          <motion.div className='navbar-content' animate="whileHover" variants={textAnimation}>
            <motion.a variants={textAnimation} href="">INICIO</motion.a>
            <motion.a variants={textAnimation} href="">MODA</motion.a>
            <motion.a variants={textAnimation} href="">BELEZA</motion.a>
            <motion.a variants={textAnimation} href="">CONTATOS</motion.a>
            <motion.a variants={textAnimation} href=""><BsInstagram /> <BsFacebook /> <BsTwitter /> </motion.a>
          </motion.div>
        </nav>
      </header>
    </>
  )
}

export default Nav