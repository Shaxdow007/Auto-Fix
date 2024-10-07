import React from 'react'

const Appointment = () => {
  return (
    <section>
      <div className='container mx-auto p-4'>
        <div className='appointment p-12 md:p-20 rounded-lg'>
          <div className='space-y-4'><h1 className='title first-letter:capitalize'>
            ready to schedule <br /> an <span className='text-red-600'>appointment?</span>
          </h1>
            <p className='text-white/50 text-sm'>Contact us today to book your next service.</p>
            <a href="tel:+21262348080" className='btn'>call now</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment
