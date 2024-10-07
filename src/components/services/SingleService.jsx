import React from 'react'

const SingleService = ({service}) => {
  const {icon,title,paragh} = service
  return (
    <div className='text-center bg-gray-400/10 rounded-md p-4 border-b-2 border-red-600'>
      <div>{icon}</div>
      <h3 className='text-white text-lg lg:text-xl xl:text-2xl'>{title}</h3>
      <p className='text-white/50 text-xs md:text-base'>{paragh}</p>
    </div>
  )
}

export default SingleService
