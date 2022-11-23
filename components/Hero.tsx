import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../public/profile.jpeg'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ['Hey, Eyal here', 'Sometimes funny', 'Always curious'],
    loop: 0,
  })

  return (
      <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden space-y-8">
        <BackgroundCircles />
        <div className="z-20">
          <Image
            src={profilePic}
            alt="profile pic"
            placeholder="blur"
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
          />
          <div className="mt-4 mb-2">
            <h1 className="ml-2 text-sm uppercase tracking-[0.5em] text-gray-400">
              Web Developer
            </h1>

            <h2 className="text-5xl lg:text-6xl font-semibold px-10">
              <span>{text}</span>
              <Cursor cursorColor="#faed3f" />
            </h2>
          </div>
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
}

export default Hero
