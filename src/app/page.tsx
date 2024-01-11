import Image from 'next/image'
import Header from './components/Header'
import Banner from './components/Banner'
import Knights from './components/Knights'
import Shields from './components/Shields'
import Team from './components/Team'
import Footer from './components/Footer'
import Quote from './components/Quote'

export default function Home() {
  return (
    <main>
      <Header/>
      <Banner/>
      <Quote />
      <Knights/> 
      <Shields/>
      <Team/>
      <Footer/>
    </main>
  )
}
