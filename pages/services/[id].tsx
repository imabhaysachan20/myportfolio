import { useRouter } from 'next/router'
import "../../app/globals.css"
import { ThemeProvider } from '@/app/provider';
import ServiceComp from './ServiceComp'
import { WebDevData,AndroidDevData,PrintMediaData,ProductShootData,SocialMediaCreativesData, VoiceOverData } from '@/data/services/services';
const Service = () => {
    const router = useRouter();
    const {id}  = router.query;
    let pros = WebDevData;
    switch(id) {
      case "1":
        pros=WebDevData;
        break;
      case "2":
        pros=AndroidDevData;
        break;
      case "3":
        pros=ProductShootData;
        break;
      case "4":
        pros=VoiceOverData;
        break;
      case "5":
        pros=SocialMediaCreativesData;
        break;
      case "7":
        pros=PrintMediaData;
        break;

    }
  return (
    <ThemeProvider attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange>
    <section className='bg-black-100 relative'>
  <ServiceComp object={pros}></ServiceComp>
  </section>
  </ThemeProvider>
  )
}

export default Service
