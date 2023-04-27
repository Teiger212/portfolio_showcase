import { motion } from 'framer-motion'
import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import type { Social } from '../../types'

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => (
  <header className="sticky top-0 z-20 mx-auto flex max-w-7xl justify-end space-x-10  p-5">
    <motion.div
      initial={{ x: 500, opacity: 0, scale: 0.25 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.25 }}
      className="flex flex-row"
    >
      {socials.map(({ _id, link }) => (
        <SocialIcon
          key={_id}
          url={link}
          fgColor="gray"
          bgColor="transparent"
          className="mr-3"
        />
      ))}

      <div className="flex  flex-row items-center text-gray-300">
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
          href="mailto:eyalteiger@gmail.com"
        />
        <p className="hidden select-none uppercase md:inline-flex">
          contact me
        </p>
      </div>
    </motion.div>
  </header>
)

export default Header
