import Head from 'next/head'
import Link from 'next/link'

import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

import About from '../components/About'
import WorkExperience from '../components/WorkExperience/Experience'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

import type { Experience, PageInfo, Project, Skill, Social } from '../types'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchExperiences } from '../utils/fetchExperience'

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  projects: Project[]
  socials: Social[]
  skills: Skill[]
}

export default function Home({
  pageInfo,
  experiences,
  projects,
  socials,
  skills,
}: Props) {
  return (
    <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-y-scroll custom-scrollbar overflow-x-hidden z-1">
      <Head>
        <title>Eyal&apos;s Portfolio</title>
        <meta name="description" content="WebDev For Hire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="header" className="snap-center">
        <Header socials={socials} />
      </section>
      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="transition duration-500 h-12 w-12 rounded-full hover:fill-[#faed3f] cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()
  const experiences: Experience[] = await fetchExperiences()

  return {
    props: {
      pageInfo,
      skills,
      experiences,
      socials,
      projects,
    },
  }
}
