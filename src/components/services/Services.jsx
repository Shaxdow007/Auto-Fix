import React from 'react'
import SingleService from './SingleService'

const Services = () => {
  const services = [
    {
      icon : "*",
      title: 'brake repair',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'transmission repair',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'suspension repair',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'oil change',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'electrical services',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'tire services',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'tune-ups',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'check engine',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
    {
      icon : "*",
      title: 'pre-purchase inspections',
      paragh : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consectetur.'
    },
  ]
  return (
    <div className='container mx-auto p-4'>
      <div className="space-y-2 mb-8">
        <h3 className="sous-title">what we offre</h3>
        <h2 className="title">our sevices</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          services.map((service,index) => {
            return <SingleService  service={service} key={index}/>
          })
        }
      </div>
    </div>
  )
}

export default Services
