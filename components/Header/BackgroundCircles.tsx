import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.5, 0.85, 0.25, 1],
        scale: [1, 2, 2, 2.5, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 5 }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-[#333] rounded-full absolute h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="border border-[#333] rounded-full absolute h-[300px] w-[300px] mt-52" />
      <div className="border border-[#333] rounded-full absolute h-[500px] w-[500px] mt-52" />
      <div className="border border-[#faed3f] rounded-full absolute h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="border border-[#333] rounded-full absolute h-[800px] w-[800px] mt-52" />
    </motion.div>
  )
}

export default BackgroundCircles
