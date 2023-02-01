import { motion } from 'framer-motion'
import SkillAvatar from './SkillAvatar'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left lg:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="section-title">Skills</h3>
      <h4 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-300">
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
