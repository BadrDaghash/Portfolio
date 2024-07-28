import React, { useEffect, useState } from 'react';
import ecommerce from './../../assets/Ecommerce pc.png';
import customerDash from './../../assets/Task pc.png';
import yummy from './../../assets/Yummy pc.png'
import crud from './../../assets/Crud pc.png'
import bookmark from './../../assets/Bookmarker pc.png'
import egpParty from './../../assets/Egyption Party pc.png'
import quizApp from './../../assets/quiz app oop pc.png'
import Weahter from './../../assets/Weather app .png'
import cssExam from './../../assets/css exam pc.png'
import grid from './../../assets/Grid system pc.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import Loader from '../../Loader/Loader';

export default function Projects() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
const timer = setTimeout(()=>{
  setLoading(false)
},1500)  
    return () => {
     clearTimeout(timer) 
    }
  }, [ ])
  
  if (loading) {
    return <Loader/>;
  }
  return (
    <>
      <h2 className='text-white text-4xl md:ms-20 ms-2 p-4 font-serif'>React</h2>
      <div className="1 flex md:py-6 border-b border-cyan-500 flex-wrap">
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={ecommerce} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Fresh-Cart-" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Fresh-Cart-/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          {/* FreshCart  */}
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-600 dark:text-white">Fresh Cart E-commerce</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">ReactJavaScript - Axios - Yup - Formik - react-hot-toast Tailwindcss - Flowbite</p>
          </div>
        </div>
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={customerDash} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Task" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Task/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">CustomerDash</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">ReactJavaScript - Mui - React-google-charts</p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <h2 className='text-white text-4xl md:ms-20 ms-2 p-4 pt-6 font-serif'>Native</h2>

      <div className="2 flex pb-6 mx-auto border-cyan-500 py-6 flex-wrap">
        {/* Yummy */}
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={yummy} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Yummy" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Yummy/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Yummy</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">JavaScript - JQuery - Bootstrap</p>

          </div>

        </div>

        {/* Crud */}
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={crud} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Crud-" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Crud-/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Crud system</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">Html - Css - JavaScript</p>
          </div>
        </div>
        
        {/* EgpParty */}
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={egpParty} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Party" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Egyption Party</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">JavaScript - JQuery - Bootstrap</p>
          </div>
        </div>
           {/* Weather */}
           <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={Weahter} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Weather" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Weather/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Weather</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">JavaScript - JQuery - Bootstrap</p>
          </div>
        </div>

         {/* Quiz App */}
         <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={quizApp} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0  group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Quiz-App" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Quiz-App/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Quiz App</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">HTML - CSS - JavaScript</p>
          </div>
        </div>

        {/* BookMark */}
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={bookmark} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/BookMark" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/BookMark/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Bookmark</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">JavaScript - Bootstrap -</p>

          </div>

        </div>
      </div>
      {/* 3 */}
      <h2 className='text-white text-4xl md:ms-20 ms-2 p-4 pt-6 font-serif'>Styling</h2>
      <div className="3 flex py-6 border-t border-cyan-500 flex-wrap">
        {/* Grid */}
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={grid} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Grid-System-" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Grid-System-/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Grid</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">Html - Css - JavaScript</p>
          </div>
        </div>

        {/* Css Exam */}
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6">
          <span className="relative block group overflow-hidden rounded-lg">
            <img className="rounded-t-lg transition-transform duration-300 group-hover:scale-105" src={cssExam} alt="" />
            <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
              <a href="https://github.com/BadrDaghash/Daniel-Profile" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://badrdaghash.github.io/Daniel-Profile/" className="text-white text-4xl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faBullseye} />
              </a>
            </span>
          </span>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-500 dark:text-white">Daniel</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">Html - Css - JavaScript</p>
          </div>
        </div>
      </div>
    </>
  )
}
