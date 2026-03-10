"use client"
import React from 'react'
import { useState } from 'react'
const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <div className={`${!darkMode ? "bg-black text-white" : "bg-white text-gray-700"} min-h-screen`}>
        <div className="flex justify-end p-5 items-center gap-10">
          <div className={`font-title ${!darkMode ? "text-white p-2 hover:bg-white hover:text-black hover:rounded-xl cursor-pointer" : "hover:bg-black hover:text-white p-2 hover:rounded-xl cursor-pointer"}`}>
            Resume
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)} className={`px-4 py-2 ${!darkMode ? "bg-white text-black *:" : "bg-black text-white"}  rounded-lg font-semibold`}>
            {!darkMode ? <img src="sunny_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" className=''></img> : <img src="brightness_7_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"></img>}
          </button>
        </div>
        <div className="hommecontetennts">
          <div className="homepage">
            <div className="uppersection flex justify-center items-center">
              <div className={`box w-[70%] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl h-auto p-10 mt-6 transition-all duration-300 ${!darkMode ? "hover:shadow-[8px_0px_20px_rgba(255,178,7,0.5)]" : "hover:shadow-[8px_0px_20px_rgba(0,0,0,0.5)]  "} max-sm:w-[90%]   `}>
                <div className={`${!darkMode ? "text-[#FFB207]" : "text-black"} font-bat text-4xl font-semibold max-sm:text-3xl`}>
                  <div className='flex items-center '>
                    Lk Srikar Karthik
                  </div>

                </div>


                <p className={`font-title text-sm mt-1 ${!darkMode ? "text-white" : "text-gray-700"}`}>
                  I am a third-year B.Tech student at Mahindra University with a strong interest in full-stack web development and building modern, scalable web applications. I enjoy working across both frontend and backend technologies, creating responsive user interfaces and efficient server-side systems. Currently, I am actively seeking internship opportunities where I can apply my development skills, learn from industry professionals, and contribute to real-world projects. I am passionate about continuous learning and eager to grow as a software developer while delivering meaningful and impactful solutions.
                </p>
              </div>
            </div>
            <div className={`box w-[70%] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl h-auto p-10 mt-10 transition-all duration-300 ${!darkMode ? "hover:shadow-[8px_0px_20px_rgba(255,178,7,0.5)]" : "hover:shadow-[8px_0px_20px_rgba(0,0,0,0.5)]"}  mx-auto max-lg:flex max-lg:flex-col max-lg:items-center max-sm:w-[90%]`}>
              <div className={`projects ${!darkMode ? "text-[#FFB207]" : 'text-black'} font-bat text-4xl font-semibold mb-8`}>
                Projects
              </div>
              <div className="projectscontainer space-y-8">
                <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 ${darkMode ? "hover:border hover:border-gray-700" : ""} max-sm:w-[100%]`}>
                  <div className={`${!darkMode ? "text-[#FFB207]" : "text-black"} font-bat text-2xl flex items-center gap-2`}>
                    <a href="https://www.aero-mu.com/"> Aero Club Website</a>
                    <span><img src="arrow_outward_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
                  </div>

                  <div className="text-gray-400 text-xs mt-1">
                    Next.js • Tailwind CSS
                  </div>

                  <p className={` ${!darkMode ? "text-white" : "text-black"} font-title text-sm mt-3`}>
                    Developed the official website for the AERO Club with a modern responsive design.
                    Implemented reusable components and optimized the structure for performance,
                    scalability, and cross-device compatibility.
                  </p>
                </div>


                <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 ${darkMode ? "hover:border hover:border-gray-700" : ""}`}>
                  <div className={`${!darkMode ? "text-[#FFB207]" : "text-black"} font-bat text-2xl flex items-center gap-2`}>
                    <a href="https://mu-events-urf4.vercel.app/">MU Events & Journals</a>
                    <span><img src="arrow_outward_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
                  </div>

                  <div className="text-gray-400 text-xs mt-1">
                    Next.js • Tailwind CSS • MongoDB
                  </div>

                  <p className={` ${!darkMode ? "text-white" : "text-black"} font-title text-sm mt-3`}>
                    Built a dynamic university platform that allows creation, deletion,
                    and management of blogs and events with full CRUD functionality
                    and MongoDB integration.
                  </p>
                </div>


                <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 ${darkMode ? "hover:border hover:border-gray-700" : ""}`}>
                  <div className={`${!darkMode ? "text-[#FFB207]" : "text-black"} font-bat text-2xl flex items-center gap-2`}>
                    <a href="https://cartify-eight-ecru.vercel.app/">Cartify E-Commerce Platform</a>
                    <span><img src="arrow_outward_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
                  </div>

                  <div className="text-gray-400 text-xs mt-1">
                    Express.js • MongoDB • CSS
                  </div>

                  <p className={` ${!darkMode ? "text-white" : "text-black"} font-title text-sm mt-3`}>
                    Developed a full-stack e-commerce application supporting product browsing,
                    cart management, and order placement using RESTful APIs and efficient
                    MongoDB schemas.
                  </p>
                </div>


                <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 ${darkMode ? "hover:border hover:border-gray-700" : ""}`}>
                  <div className={`${!darkMode ? "text-[#FFB207]" : "text-black"} font-bat text-2xl flex items-center gap-2`}>
                    <a href="https://blood-org.vercel.app/">BloodOrg - Blood Donation Request Platform</a>
                    <span><img src="arrow_outward_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></span>
                  </div>

                  <div className="text-gray-400 text-xs mt-1">
                    Next.js • MongoDB • JotForm
                  </div>

                  <p className={` ${!darkMode ? "text-white" : "text-black"} font-title text-sm mt-3`}>
                    Deployed BloodOrg, a blood donation request system where users submit urgent blood group requests and administrators respond with nearby donation locations or blood banks to assist patients quickly.
                  </p>
                </div>

              </div>
            </div>
            <div className={`w-[70%] mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl h-auto p-10 mt-10 transition-all duration-300 ${!darkMode ? "hover:shadow-[8px_0px_20px_rgba(255,178,7,0.5)]" : "hover:shadow-[8px_0px_20px_rgba(0,0,0,0.5)]"} max-sm:w-[90%]`}>

              <div className={`${!darkMode ? "text-[#FFB207]" : "text-black"} font-bat text-4xl font-semibold mb-8`}>
                Contact Me
              </div>
              <div className="twoflex">
                <div className="upperflex flex justify-between items-center px-10 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
                  <div className={`firstbox w-[300px] p-2 py-4 hover:border ${!darkMode ? " p-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl" : "p-2  hover:border hover:border-black hover:rounded-xl hover:p-2"} `}>
                    <div className="email font-bat">Email id</div>
                    <p className='font-title text-sm'>srikarkarthik93@gmail.com</p>
                  </div>
                  <a href="https://www.linkedin.com/in/srikar-karthik-4723b32b4/"><div className={`secondbox py-4 p-2 hover:border w-[300px] max-sm:mt-3 ${!darkMode ? " p-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl" : "p-2  hover:border hover:border-black hover:rounded-xl hover:p-2"} `}>
                    <div className='flex items-center'>
                      <div className="LinkedIn font-bat">LinkedIn</div>
                      <img src="arrow_outward_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                    </div>
                    <p className='font-title text-sm'>Connect Professionally</p>
                  </div></a>
                  
                </div>
                <div className={`Lowerflex flex justify-between  items-center px-10 mt-5  max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center`}>
                  <a href="https://github.com/srikarkarthik-678?tab=repositories"><div className={`firstbox w-[300px] py-4 p-2 hover:border ${!darkMode ? " p-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl" : "p-2  hover:border hover:border-black hover:rounded-xl hover:p-2"} `}>
                    <div className='flex items-center'>
                      <div className="GitHub font-bat">GitHub</div>
                      <img src="arrow_outward_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                    </div>
                    <p className='font-title text-sm'>Check out my Repositories</p>
                  </div></a>
                  
                  <a href="https://www.instagram.com/itzzkarthik_/"><div className={`secondbox w-[300px] py-4 max-sm:mt-3  ${!darkMode ? " p-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl" : "p-2  hover:border hover:border-black hover:rounded-xl hover:p-2"} `}>
                    <div className='flex items-center'>
                      <div className="Instagram font-bat">Instagram</div>
                      <img src="arrow_outward_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                    </div>
                    <p className='font-title text-sm'>Follow me for more updates!</p>
                  </div></a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
