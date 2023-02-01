import Image from 'next/image'
import { motion } from 'framer-motion'
import skillicon from '../../public/html-5.png'

type Props = {
  directionLeft?: boolean
}

const SkillAvatar = ({ directionLeft }: Props) => {
  return (
    <div className="group relative cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          alt="Skill Avatar"
          src={skillicon}
          className="h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-500 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32"
        />
      </motion.div>
      <div className="absolute top-0 z-0 h-24 w-24 rounded-full opacity-0 transition duration-500 ease-in-out group-hover:bg-white group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100"> 100%</p>
        </div>
      </div>
    </div>
  )
}

export default SkillAvatar
