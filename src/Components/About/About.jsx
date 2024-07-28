import React, { useEffect, useState } from 'react';
import { faReact, faHtml5, faCss3, faJs, faBootstrap, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jQuery from './../../assets/jquery.png';
import typescript from './../../assets/typescript.png';
import redux from './../../assets/redux.png';
import NextJs from './../../assets/Next.js.png';
import Loader from '../../Loader/Loader';

export default function About() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="w-[90%] sm:w-[80%] md:w-[70%] bg-[rgba(0,0,0,0.9)] mx-auto p-6">
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold pb-6 font-serif text-cyan-500'>About Me </h1>
        <p className="mb-3 py-2 text-base sm:text-lg md:text-xl text-white dark:text-gray-400 leading-relaxed tracking-wide">
          I am a passionate Front-End Developer with extensive experience in creating dynamic and responsive web applications.
          I specialize in JavaScript, React, and Next.js, leveraging these technologies to build robust and scalable front-end solutions.
          My proficiency in Tailwind CSS, Bootstrap, and other styling frameworks allows me to craft visually appealing and user-friendly interfaces.
        </p>

        <p className="text-white dark:text-gray-400">
          I am adept at API integration and state management, using tools like Redux and React Query to ensure efficient data handling and smooth user experiences. With a solid foundation in HTML and CSS, I focus on optimizing web performance and accessibility,
          ensuring that my applications provide seamless interactions across all devices and browsers.
        </p>
      </div>

      <div className="icons w-full mt-20 px-6 sm:px-10 md:px-20 gap-4">
        <h2 className='text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold py-12 font-serif'>My Skills</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-2xl sm:text-3xl md:text-[50px] p-2 sm:p-5 hover:animate-spin" />
            <span className="text-white text-sm sm:text-lg">HTML5</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <FontAwesomeIcon icon={faCss3} className="text-blue-500 text-2xl sm:text-3xl md:text-[50px] p-2 sm:p-5 hover:animate-spin" />
            <span className="text-white text-sm sm:text-lg">CSS3</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <FontAwesomeIcon icon={faBootstrap} className="text-fuchsia-600 text-2xl sm:text-3xl md:text-[50px] p-2 sm:p-5 hover:animate-spin" />
            <span className="text-white text-sm sm:text-lg">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <FontAwesomeIcon icon={faJs} className="text-yellow-300 text-2xl sm:text-3xl md:text-[50px] p-2 sm:p-5 hover:animate-spin" />
            <span className="text-white text-sm sm:text-lg">JavaScript</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <img src={typescript} className="w-8 sm:w-10 md:w-[45px] mt-2 sm:mt-3 md:mt-5 hover:animate-spin" alt="TypeScript" />
            <span className="text-white text-sm sm:text-lg mt-2 sm:mt-3 md:mt-6">TypeScript</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10">
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <FontAwesomeIcon icon={faReact} className="text-cyan-400 text-xl sm:text-2xl md:text-[42px] p-2 sm:p-5 hover:animate-spin" />
            <span className="text-white text-sm sm:text-lg">React</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <FontAwesomeIcon icon={faSass} className="text-[#e43df0] text-xl sm:text-2xl md:text-[40px] p-2 sm:p-5 hover:animate-spin" />
            <span className="text-white text-sm sm:text-lg">Sass</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <img src={jQuery} className="w-8 sm:w-12 md:w-[80px] p-2 sm:p-5 hover:animate-spin" alt="jQuery" />
            <span className="text-white text-sm sm:text-lg">jQuery</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <img src={redux} className="w-8 sm:w-12 md:w-[80px] p-2 sm:p-5 hover:animate-spin" alt="Redux" />
            <span className="text-white text-sm sm:text-lg">Redux</span>
          </div>
          <div className="flex flex-col items-center bg-[#192842b6] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36">
            <img src={NextJs} className="w-8 sm:w-12 md:w-[50px] mt-2 sm:mt-3 md:mt-5 hover:animate-spin" alt="Next.js" />
            <span className="text-white text-sm sm:text-lg pt-1 sm:pt-2 md:pt-3">Next.js</span>
          </div>
        </div>
      </div>
    </>
  );
}
