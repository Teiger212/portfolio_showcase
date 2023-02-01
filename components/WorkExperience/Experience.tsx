import { motion } from 'framer-motion'
import type { Experience } from '../../types'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[]
}

const Experience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row"
    >
      <h3 className="section-title">Experience</h3>
      <div className="custom-scrollbar flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        {experiences?.map((exp) => (
          <ExperienceCard experience={exp} key={exp._id} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
