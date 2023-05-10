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
    className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10  text-center md:flex-row md:text-left"
  >
    <h3 className="section-title">About</h3>
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="-mb-20 flex-shrink-0 md:mb-0"
    >
      <Image
        src={urlFor(pageInfo?.profilePic).url()}
        alt="profile pic"
        className="h-38 mx-auto w-auto rounded-full object-cover md:h-44 md:rounded-lg xl:h-64"
        width={140}
        height={140}
      />
    </motion.div>

    <div className="space-y-10 px-0 md:px-10">
      <h3 className="text-4xl">
        A <span className="underline decoration-[#faed3f]">bit</span> about my
        background
      </h3>
      <p className="text-base">{pageInfo?.backgroundInformation}</p>
    </div>
  </motion.div>
)

export default About
