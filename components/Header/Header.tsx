import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import type { Social } from '../../types'

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => (
  <header className="sticky top-0 flex items-start justify-end mx-auto max-w-7xl z-20 p-5">
    <motion.div
      initial={{ x: 500, opacity: 0, scale: 0.25 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.25 }}
      className="flex flex-row"
    >
      {socials.map((social) => {
        const { _id, link } = social

        return (
          <SocialIcon
            key={_id}
            url={link}
            fgColor="gray"
            bgColor="transparent"
          />
        )
      })}

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          href="mailto:eyalteiger@gmail.com"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="uppercase hidden md:inline-flex">contact me</p>
      </div>
    </motion.div>
  </header>
)

export default Header
