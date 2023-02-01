import Image from 'next/image'
import { motion } from 'framer-motion'
import { PageInfo } from '../types'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center items-center max-w-7xl mx-auto px-10 justify-evenly md:text-left md:flex-row"
  >
    <h3 className="section-title">About</h3>
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="-mb-20 md:mb-0 flex-shrink-0"
    >
      <Image
        src={urlFor(pageInfo?.profilePic).url()}
        alt="profile pic"
        className="rounded-full mx-auto object-cover h-56 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        width={224}
        height={224}
      />
    </motion.div>

    <div className="space-y-10 px-0 md:px-10">
      <h3 className="text-4xl">
        A <span className="underline decoration-[#faed3f]">bit</span> about my
        background
      </h3>
      <p className="text-base">
        {pageInfo?.backgroundInformation}
      </p>
    </div>
  </motion.div>
)

export default About
