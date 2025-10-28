import { useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App (){

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger when the page is fully loaded
    ScrollTrigger.refresh()

    // Clean up scrollTrigger on component unmount
    return () =>{
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])  

  return (
    
        <>
        <Header/>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
        <Footer/>
        </>
  )
}

