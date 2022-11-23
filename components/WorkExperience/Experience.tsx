import { motion } from 'framer-motion'
import React from 'react'

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[1em] text-gray-400 text-2xl">
        Experience
      </h3>
      <div></div>
    </motion.div>
  )
}

export default Experience
