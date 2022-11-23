import Head from 'next/head'
import About from '../components/About'
import Experience from '../components/WorkExperience/Experience'
import Header from '../components/Header/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="bg-zinc-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-1">
      <Head>
        <title>Eyal&apos;s Portfolio</title>
        <meta name="description" content="WebDev For Hire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="snap-center">
        <Header />
      </section>
      <Hero />
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
    </div>
  )
}
