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
      transition={{ duration: 3 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333]" />
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#333]" />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#333]" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-[#faed3f]" />
      <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-[#333]" />
    </motion.div>
  )
}

export default BackgroundCircles
