import React from 'react'

const Brands = () => {
  const brands = [ 
    {
    brand : 'dacia',
    path : './images/brand/dacia-5.svg'
  },
    {
    brand : 'hyundai',
    path : './images/brand/hyundai-motor-company-logo.svg'
  },
    {
    brand : 'toyota',
    path : './images/brand/toyota-1.svg'
  },
    {
    brand : 'suzuki',
    path : './images/brand/suzuki-2.svg'
  },
    {
    brand : 'mercedes',
    path : './images/brand/mercedes-benz-6.svg'
  },
] 
  return (
<div className='-mt-[95px]'>
<div className='container mx-auto p-4'>
      <div className='hidden md:grid md:grid-cols-5 place-items-center gap-2 bg-priamryColor/90 p-4 rounded-md'>
        {
          brands.map((item,index) => <div key={index}>
            <img src={item.path} alt={`${item.brand} logo`} className='w-40 brands'/>
          </div>)
        }
      </div>
    </div>
</div>
  )
}

export default Brands
