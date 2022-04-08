import React from 'react'
import './SectionInput.css'
import { motion } from 'framer-motion'

function SectionInput() {
  return (
    <motion.div className='section2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}>
      <h1 className='newsletter'>NEWSLETTER</h1>
      <div className="text">
        <h3>FIQUE POR DENTRO DE TODAS AS
          NOVIDADE DO MUNDO DA MODA,
          ASSIM, NUNCA SAINDO DA MODA.
        </h3>
      </div>
      <div className="inputs">
        <input className='input-email-senha' type="text" placeholder='SEU EMAIL:' />
        <input className='input-email-senha' type="text" placeholder='SEU NOME:' />
        <p className='paragrafo'>Você Poderá cancelar sua inscrição à qualquer momento.</p>
        <motion.button whileHover={{ scale: 1.2, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.7)" }} className='button-newsletter'>ENVIAR</motion.button>
      </div>
    </motion.div>
  )
}

export default SectionInput