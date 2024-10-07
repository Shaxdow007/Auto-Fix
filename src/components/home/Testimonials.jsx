import React from 'react'
import OurClient from './OurClient'

const Testimonials = () => {
  return (
    <section className='container mx-auto p-4'>
      <div className="text-center">
        <h3 className="sous-title">Testimonials</h3>
        <h2 className="title">what our clients say</h2>
      </div>
      <div>
        <OurClient />
      </div>
    </section>
  )
}

export default Testimonials
