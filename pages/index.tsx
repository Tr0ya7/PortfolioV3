import Header from '../components/header'
import ContactMe from '../components/contactMe'
import { Inter } from 'next/font/google'
import AboutMe from '../components/aboutMe'
import Habilits from '../components/habilits'
import Projects from '../components/projects'
import Certificates from '../components/certificates'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`text-white ${inter.className}`}>
      <Header />
      <ContactMe />
      <AboutMe />
      <Habilits />
      <Projects />
      <Certificates />
      <Footer />
    </main>
  )
}