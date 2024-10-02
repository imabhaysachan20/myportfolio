import React from 'react'
import { fetchReviews } from '../lib/contentful'

import { InfiniteMovingCards } from './ui/Reviews'
import { companies } from '@/data/landing'

const Clients = async() => {
  const apifetch = await fetchReviews();
  
  const reviews =  apifetch.map((obj)=>{return obj.fields});
  reviews.forEach((obj)=>{
    // @ts-expect-error: This function is intentionally not type-checked
// because it relies on an external library that has mismatched types.
    obj.profile = obj?.profile?.fields?.file?.url
  });
  
  return (
    <div className='py-20'>
      <h1 className='heading'>
        Kind word from {''}
         <span className='text-purple'>Satisfied Clients</span>
      </h1>
      <div className=" flex flex-col items-center mt-10">
        
          <InfiniteMovingCards items={reviews} direction="right" speed='slow'></InfiniteMovingCards>
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
            {companies.map(({id,name,img,nameImg})=>{return <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={name} className='md:w-10 w-5'></img>
              <img src={nameImg} alt={nameImg} className='md:w-24 w-20'></img>
            </div>})}
          </div>
        </div>
        </div>
  )
}

export default Clients
