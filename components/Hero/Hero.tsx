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
  <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
    <BackgroundCircles />
    <div className="z-20">
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile pic"
        className="relative rounded-full mx-auto object-cover"
        width={128}
        height={128}
      />
      <TypingTitle pageInfo={pageInfo} />
      <Link href="#about">
        <button className="hero-button">About</button>
      </Link>
      <Link href="#experience">
        <button className="hero-button">Experience</button>
      </Link>
      <Link href="#skills">
        <button className="hero-button">Skills</button>
      </Link>
      <Link href="#projects">
        <button className="hero-button">Projects</button>
      </Link>
    </div>
  </div>
)

export default Hero
