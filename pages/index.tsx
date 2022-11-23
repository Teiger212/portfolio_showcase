import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="bg-zinc-800 text-white h-screen snap-proximity overflow-scroll z-1">
      <Head>
        <title>Eyal&apos;s Portfolio</title>
        <meta name="description" content="WebDev For Hire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <About />
    </div>
  )
}
