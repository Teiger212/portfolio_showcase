import React from 'react'
import Image from 'next/image'
import profilePic from '../public/profile.jpeg'
import { motion } from 'framer-motion'

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center items-center max-w-7xl mx-auto px-10 justify-evenly md:text-left md:flex-row"
  >
    <h3 className="absolute top-24 uppercase tracking-[1em] pl-5 text-gray-400 text-2xl">
      About
    </h3>
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="-mb-20 md:mb-0 flex-shrink-0"
    >
      <Image
        src={profilePic}
        alt="profile pic"
        placeholder="blur"
        className="rounded-full h-56 w-56 mx-auto object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
    </motion.div>

    <div className="space-y-10 px-0 md:px-10">
      <h3 className="text-4xl">
        A <span className="underline decoration-[#faed3f]">bit</span> about my
        background
      </h3>
      <p className="text-base">
        Currently live in Cusco, Peru. Born and raised in Israel, have roots in
        Sweden & the UK. An average hiker who likes exploring new cultures,
        nature and also a decent cook. Currently focused on Javascript, mostly
        front-end using React. On a journey building my own online business and
        learning on my way up. Have a keen eye for UI, UX & design in general.
        Interested and open to new ideas on bettering rural communities through
        internet and/or new forms of education.
      </p>
    </div>
  </motion.div>
)

export default About
