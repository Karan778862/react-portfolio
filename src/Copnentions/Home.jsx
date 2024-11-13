import React from 'react'
import { FaLongArrowAltRight, } from "react-icons/fa";
import port from '../assets/portfolioImage.jpg'
import {Link} from 'react-scroll'
import cv from "../assets/cv.pdf"

const Home = () => {
  return (
    <div 
    name="Home" 
    className=' h-screen w-full bg-gradient-to-b from-black to-gray-800 '
    >
      <div className=' max-w-screen-lg  max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div>
          <h2 className='text-4xl  sm:text-7xl font-bold text-white'>i'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ab iusto quos incidunt minus ex quasi beatae
              facilis velit eius expedita?
          </p>
          <div>
            <a href={cv} download  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
            >
              Resume
              <span className='group-hover:rotate-90 duration-300'>

            
              </span>
            </a>
          </div>
        </div>
        <div>
         <img src={port} alt="" className=' rounded-2xl   md:w-72' />
        </div>
      </div>
    </div>
  )
}

export default Home
