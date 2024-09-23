import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data/landing'



const Grid = () => {
  return (
    <section id = "services">
    <BentoGrid className='w-full py-20'>
      {
        gridItems.map(({id,title,description,className,img,imgClassName,titleClassName,spareImg},i)=>{return <BentoGridItem id = {id} key={i} title={title} description={description} className={className} img={img} imgClassName={imgClassName} titleClassName={titleClassName} spareImg={spareImg}/>})  
      }
    </BentoGrid>
    </section>
  )
}

export default Grid
