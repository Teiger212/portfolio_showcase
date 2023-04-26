import Image from 'next/image'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../../sanity'
import type { PageInfo } from '../../types'
import BackgroundCircles from '../Header/BackgroundCircles'
import TypingTitle from './TypingTitle'

type Props = {
  pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => (
  <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
    <BackgroundCircles />
    <div className="z-20">
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile pic"
        className="relative mx-auto rounded-full object-cover"
        width={128}
        height={128}
        priority
      />
      <TypingTitle pageInfo={pageInfo} />
      <Link href="#about">
        <button className="hero-button">About</button>
      </Link>
      <Link href="#experience">
        <button className="hero-button">Experience</button>
      </Link>
      <Link href="#projects">
        <button className="hero-button">Projects</button>
      </Link>
    </div>
  </div>
)

export default Hero
