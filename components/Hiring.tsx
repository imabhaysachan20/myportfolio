import Link from 'next/link'
import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

const Hiring = () => {
  return (
    <div className="my-20 py-20 border border-opacity-20 hover:border-opacity-30 transition duration-150 border-white-100 rounded-lg">
        <div className="flex flex-col justify-center items-center md:gap-x-8 gap-y-8  md:flex-row">
            <img src = "../hiring.svg" className='w-16 h-16' alt="" />
        <h1 className="heading">
      I am open to{" "}
      <span className="text-purple">Work!</span>
    </h1>
        </div>
    <div className="flex flex-col md:flex-row  justify-center items-center gap-x-2 mt-8">
    <p className='font-extralight tracking-wider'> View Resume -</p>
    <Link href="/cv_f.pdf"><button className='border px-4 py-2 rounded-lg flex gap-2 items-center'><FaFilePdf/>Resume</button> </Link>
    </div>
    </div>
  )
}

export default Hiring
