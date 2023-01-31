import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'

type Props = {}

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-h-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="section-title">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      <div className="w-full absolute left-0 top-[30%] bg-[#faed3f]/10 h-[500px] -skew-y-[16deg]" />
    </motion.div>
  )
}

export default Projects
