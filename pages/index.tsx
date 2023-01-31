import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Experience from '../components/WorkExperience/Experience'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-y-scroll custom-scrollbar overflow-x-hidden z-1">
      <Head>
        <title>Eyal&apos;s Portfolio</title>
        <meta name="description" content="WebDev For Hire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="header" className="snap-center">
        <Header />
      </section>
      <Hero />
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="h-12 w-12 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"></div>
        </footer>
      </Link>
    </div>
  )
}
