import { motion } from 'framer-motion'
import SkillAvatar from './SkillAvatar'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left lg:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="section-title">Skills</h3>
      <h4 className="absolute top-36 uppercase tracking-[3px] text-gray-300 text-sm">
        Hover over a skill for proficency
      </h4>
      <div className="grid grid-cols-4 gap-5">
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
        <SkillAvatar />
      </div>
    </motion.div>
  )
}

export default Skills
