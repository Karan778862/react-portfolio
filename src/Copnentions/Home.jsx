// import React from 'react'
// import { FaLongArrowAltRight, } from "react-icons/fa";
// import port from '../assets/portfolioImage.jpg'
// import {Link} from 'react-scroll'
// import cv from "../assets/cv.pdf"

// const Home = () => {
//   return (
//     <div 
//     name="Home" 
//     className=' h-screen w-full bg-gradient-to-b from-black to-gray-800 '
//     >
//       <div className=' max-w-screen-lg  max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
//         <div>
//           <h2 className='text-4xl  sm:text-7xl font-bold text-white'>i'm a Full Stack Developer</h2>
//           <p className='text-gray-500 py-4 max-w-md'>
//           i'm karan kumar an enthusiatic and ambitious web developer with  a fervent passion for tranforming innovative idea into website.
//           </p>
//           <div>
//             <a href={cv} download  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
//             >
//               Resume
//               <span className='group-hover:rotate-90 duration-300'>

            
//               </span>
//             </a>
//           </div>
//         </div>
//         <div>
//          <img src={port} alt="" className=' rounded-2xl   md:w-72' />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

import { Link } from "react-router-dom";
import image from "../assets/image.png"

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Hi, I'm <span className="text-blue-600">Karan Kumar</span><br />
            MERN Stack & React Native Developer
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            I craft fast, responsive and modern web & mobile apps that solve real-world problems.
          </p>
          <Link to="/projects">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition-all">
              View My Work
            </button>
          </Link>
        </div>

        {/* Image or Illustration */}
        <div className="flex-1 text-center">
          <img
            src={image}
            alt="Developer Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
}

