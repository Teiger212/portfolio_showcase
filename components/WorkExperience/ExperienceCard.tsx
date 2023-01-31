import { motion } from 'framer-motion'
import Image from 'next/image'
import skillicon from '../../public/html-5.png'
import bart from '../../public/bart.jpeg'

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 shrink-0 snap-center w-[500px] md:w-[600px] lg:w-[900px] bg-[#373737] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-300">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        viewport={{ once: true }}
      >
        <Image
          src={bart}
          alt="compamy logo"
          width={28}
          height={28}
          className="w-28 h-28 rounded-full object-cover object-center xl:h-32 xl:w-32"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h3 className="text-4xl font-light">Some Job Title</h3>
        <h4 className="font-bold text-2xl mt-1">Company</h4>
        <div className="flex space-x-2 m-y-2">
          <Image
            className="skill-icon"
            src={skillicon}
            alt="skill icon"
            width={10}
            height={10}
          />
          <Image
            className="skill-icon"
            src={skillicon}
            alt="skill icon"
            width={10}
            height={10}
          />
        </div>
        <p className="uppercase py-5 text-gray-300">work start & end dates</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>SUMMARY POINTS</li>
          <li>SUMMARY POINTS</li>
          <li>SUMMARY POINTS</li>
          <li>SUMMARY POINTS</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
