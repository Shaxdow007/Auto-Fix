import HeroAbout from '@/components/aboutUs/HeroAbout'
import OurStory from '@/components/aboutUs/OurStory'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <div className="space-y-12">
        <HeroAbout />
        <OurStory />
      </div>
    </div>
  )
}

export default AboutPage
