import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section className='container mx-auto p-4'>
      <div>
      <div className='space-y-4'>
        <h3 className='sous-title'>about us</h3>
        <h2 className='title'>our reputation <br /> speaks for it self</h2>
        <p>AutoSud is a family-owned and operated business taht <br />
        has been providing auto repair services to the community <br />
        for over 20 years, We pride ourseleves on our commitment <br /> to quality and customer satisfaction.
        </p>
        <Button><Link to={'/about-us'}>see more</Link></Button>
      </div>
      {/* <div>
        <image />
      </div> */}
      </div>
    </section>
  )
}

export default AboutSection
