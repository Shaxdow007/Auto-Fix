import HeroService from '@/components/services/HeroService'
import Services from '@/components/services/services'
import WhyOurServices from '@/components/services/WhyOurServices'
import React from 'react'

const ServicesPage = () => {
  return (
    <div className="space-y-12">
    <HeroService />
    <Services />
    <WhyOurServices />
</div>
  )
}

export default ServicesPage
