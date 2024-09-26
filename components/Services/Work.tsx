
import { HeroParallax } from '@/components/ui/HeroParallax';
const Work = ({desc,projects}:{desc:string,projects:{title:string,link:string,thumbnail:string}[]}) => {
  return (
    <div>
<section className='w-[100vw] pt-10 pb-10 m-20 mx-auto md:w-[99vw] relative' id ="work">
  <HeroParallax tit = "Our Work" desc= {desc}  products={projects}></HeroParallax>
  </section>      
    </div>
  )
}

export default Work
