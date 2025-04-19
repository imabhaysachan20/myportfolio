import dynamic from 'next/dynamic'

import Clients from "@/components/Clients";
import Feedback from "@/components/Feedback";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hiring from "@/components/Hiring";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
const Grid = dynamic(() => import('@/components/ui/Grid'), {
  ssr: false,
})
import { navItems } from "@/data/landing";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
      <FloatingNav navItems={navItems}/>
        <Hero/>  
        <Grid/> 
        <Hiring/>
        <RecentProjects/>
        <Clients/>
        <Feedback/>

        <Footer/>
      </div>
    </main>
  );
}
