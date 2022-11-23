import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Header = () => (
  <header className="sticky top-0 flex items-start justify-end mx-auto max-w-7xl z-20 p-5">
    <motion.div
      initial={{ x: 500, opacity: 0, scale: 0.25 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.25 }}
      className="flex flex-row"
    >
      <SocialIcon
        url="https://www.linkedin.com/in/eyal-teiger/"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://github.com/Teiger212"
        fgColor="gray"
        bgColor="transparent"
      />

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          href="mailto:eyalteiger@gmail.com"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="uppercase hidden md:inline-flex">contact me</p>
      </div>
    </motion.div>
  </header>
)

export default Header
