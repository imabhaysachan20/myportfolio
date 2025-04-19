import React from 'react'


import { InfiniteMovingCards } from './ui/Reviews'
import { companies } from '@/data/landing'

const Clients = async() => {
  // const apifetch = await fetchReviews();
  // @ts-expect-error: This function is intentionally not type-checked
  const reviews:{
    profile:string;
    quote: string;
    name: string;
    title: string;
  }[] =  [
    {
      profile: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "This platform completely transformed the way we operate—it's fast, reliable, and user-friendly!",
      name: "Ravi Sharma",
      title: "Product Manager, TechNova",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "I was amazed at how intuitive the interface is. Our team's productivity has doubled.",
      name: "Anjali Verma",
      title: "Lead Designer, Creatix Studio",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/12.jpg",
      quote: "Fantastic support and seamless performance. Highly recommend to anyone serious about scaling.",
      name: "Amit Desai",
      title: "Founder, StartupBay",
    },
    {
      profile: "https://randomuser.me/api/portraits/women/76.jpg",
      quote: "Their attention to detail and customer service is unmatched. We're beyond satisfied.",
      name: "Kavita Mehra",
      title: "Marketing Head, BrightScope",
    },
    {
      profile: "https://randomuser.me/api/portraits/men/63.jpg",
      quote: "A game-changer for our business. Everything just works beautifully and effortlessly.",
      name: "Rohit Kumar",
      title: "CTO, PixelPeak Technologies",
    }
  ];
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
