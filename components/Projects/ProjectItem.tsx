import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../sanity'
import { Project } from '../../types'

type Props = {
  project: Project
}

const ProjectItem = ({ project }: Props) => {
  const { image, title, summary, linkToProjectPage, isSideProject } = project

  return (
    <article className="flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-10 md:p-4">
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={urlFor(image).url()}
          alt={title}
          width={400}
          height={400}
          className="shadow-xl"
        />
      </motion.div>

      <div className="max-w-6xl space-y-10 px-0 md:px-10">
        <h4 className="text-center text-4xl font-semibold">
          <span className="underline decoration-[#faed3f]/50">
            {isSideProject ? 'Side Peoject: ' : 'Client Project: '}
          </span>
          {title}
        </h4>
        <p className="text-center text-lg md:text-left">{summary}</p>
        <Link href={linkToProjectPage}>{linkToProjectPage}</Link>
      </div>
    </article>
  )
}

export default ProjectItem
