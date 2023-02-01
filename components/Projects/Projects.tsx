import { motion } from 'framer-motion'
import { Project } from '../../types'
import ProjectItem from './ProjectItem'

type Props = {
  projects: Project[]
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="overflow-h-hidden relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly text-left md:flex-row"
    >
      <h3 className="section-title">Projects</h3>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-[16deg] bg-[#faed3f]/10" />
    </motion.div>
  )
}

export default Projects
