import { motion } from 'framer-motion'

type Props = {}

const ProjectItem = (props: Props) => {
  return (
    <div className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src="" alt="" />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#faed3f]/50">Case Study:</span>{' '}
          UPS clone
        </h4>
        <p className="text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non tellus
          orci ac auctor augue. Pellentesque habitant morbi tristique senectus
          et netus et. Sed tempus urna et pharetra pharetra massa massa
          ultricies. Tortor aliquam nulla facilisi cras fermentum odio eu.
        </p>
      </div>
    </div>
  )
}

export default ProjectItem
