import { useState } from 'react'
import Header from './assets/components/Header'
import './App.css'
import MainSection from './assets/components/MainSection'
import VideoSection from './assets/components/VideoSection'
import PackSection from './assets/components/PackSection'
import Footer from './assets/components/Footer'
import Bonus from './assets/components/BonusSection'
import TestiSection from './assets/components/TestiSection'
import ProfileSection from './assets/components/ProfileSection'
import Benefits from './assets/components/Benefits'
import TimeSection from './assets/components/TimeSection'
import MentorsSection from './assets/components/MentorsSection'
import RecapSection from './assets/components/RecapSection'
import Questions from './assets/components/Questions'
import WhatsapSection from './assets/components/WhatsapSection'

// https://mentors.expert/ia-acelera-oferta-lanzamiento/?ref=K94632839Y




/* Problemas a solucionar en el futuro
   - Mejora la version Mobile
*/



function App() {
  
  return (
    <div className="App">      
      <Header  />
      <MainSection/>
      <VideoSection />
      <PackSection/>      
      <Bonus/>      
      <TestiSection/>      
      <ProfileSection/>      
      <Benefits/>      
      <TimeSection/>      
      <MentorsSection/>      
      <RecapSection/>
      <Questions/>      
      <WhatsapSection/>
      <Footer/>      
    </div>
  )
}

export default App
