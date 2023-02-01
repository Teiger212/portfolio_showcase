import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'

import About from '../components/About'
import WorkExperience from '../components/WorkExperience/Experience'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

import type { Experience, PageInfo, Project, Social } from '../types'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchExperiences } from '../utils/fetchExperience'

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  projects: Project[]
  socials: Social[]
}

export default function Home({
  pageInfo,
  experiences,
  projects,
  socials,
}: Props) {
  return (
    <div className="custom-scrollbar z-1 h-screen snap-y snap-mandatory overflow-y-scroll bg-zinc-800 text-white overflow-x-hidden">
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
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-12 w-12 cursor-pointer rounded-full transition duration-500 hover:fill-[#faed3f]" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()
  const experiences: Experience[] = await fetchExperiences()

  return {
    props: {
      pageInfo,
      experiences,
      socials,
      projects,
    },
  }
}
