import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section className='container mx-auto p-4'>
      <div className='bg-gray-400/10 rounded-md'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2'>
      <div className='pt-8 pl-8'>
        <h3 className='sous-title'>about us</h3>
        <h2 className='title'>our reputation <br /> speaks for it self</h2>
        <p className='my-2 md:my-4 lg:my-4 text-white/50'>AutoSud is a family-owned and operated business taht <br />
        has been providing auto repair services to the community <br />
        for over 20 years, We pride ourseleves on our commitment <br /> to quality and customer satisfaction.
        </p>
        <Link
              to={'/about-us'}
              className="btn lg:mb-2"
            >
              read more
            </Link>
      </div>
      <div className='md:rounded-tr-md rounded-br-md rounded-bl-md md:rounded-bl-none overflow-hidden'>
        <img src="./images/greenbgcar.jpg" alt="about image" />
      </div>
      </div>
      </div>
      
    </section>
  )
}

export default AboutSection
