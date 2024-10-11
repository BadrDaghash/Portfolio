import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import avatar from './../../assets/image (1).png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Logo from './../../assets/ReactLogo.png';
import Loader from '../../Loader/Loader';
import CV from '../../assets/Badr Daghash CV.pdf'; 


export default function Home() {
  const [activeTab, setactiveTab] = useState('skills');
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="grid grid-cols-6 w-[84%] gap-4 mx-auto">
        <div className="md:col-span-4 col-span-6 md:pt-16 text-black p-4 md:ps-20">
          <p className='font-semibold text-xl  md:text-3xl  ps-1 text-cyan-400 font-serif'>Hello I'm a</p>
          <TypeAnimation
            sequence={[
              'Badr Daghash',
              1000,
              'Front-End Developer',
              1000,
              'React Specialist',
              1000,
            ]}
            wrapper="span"
            speed={45}
            className="block text-3xl md:text-5xl md:pt-4 lg:text-6xl xl:text-7xl text-white py-4 md:py-0"
            repeat={Infinity}
          />
          <div className="w-full px-4 md:px-0">
            <div className="md:pt-8 gap-3 flex flex-col md:flex-row justify-between pt-6 md:w-[45%]">
              <Link to="/contactus"
                className="w-full  py-2 px-4 text-base font-medium text-center text-white
            bg-transparent rounded-2xl  shadow-sm shadow-cyan-800 
            hover:bg-cyan-700 focus:ring-1 focus:ring-cyan-800 
             transition-colors duration-300">Hire me</Link>
              <a
                download="Badr Daghash CV.pdf"
                href={CV}
                className="w-full md:mt-0 py-2 px-4 text-base font-medium text-center 
                 text-white rounded-2xl shadow-sm shadow-cyan-800 bg-transparent
            hover:bg-cyan-700 focus:ring-1 focus:ring-cyan-800 transition-colors duration-300">
                Download CV
              </a>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:w-[45%]'>
              <Link to='https://github.com/BadrDaghash'
                className="w-full py-2 px-4 text-center text-white text-lg font-medium rounded-2xl shadow-sm shadow-cyan-800 bg-transparent
            hover:bg-cyan-700 focus:ring-1 focus:ring-cyan-800  focus:outline-none  flex items-center justify-center">
                <FontAwesomeIcon icon={faGithub} className="text-white me-2 text-xl" />
                Github
              </Link>
              <Link to='https://www.linkedin.com/in/badr-daghash-63971520a/'
                className="w-full py-2 px-4 text-center text-lg text-white font-medium rounded-2xl shadow-sm shadow-cyan-800 bg-transparent
            hover:bg-cyan-700 focus:ring-1 focus:ring-cyan-300  focus:outline-none  flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedin} className="text-white me-2 text-xl" />
                Linkedin
              </Link>
            </div>

          </div>
        </div>
        <div className="md:col-span-2  col-span-6  ps-4 py-6 justify-center items-center mx-auto">
          <img src={avatar} alt="Badr-avatar" className='h-80 hover:shadow-cyan-700 bg-black rounded-full shadow-lg shadow-animate-pulse shadow-cyan-700' />
        </div>
      </div>

      <div className='grid grid-cols-6 gap-4 w-[90%] pt-[13%] h-auto relative mx-auto'>
        <div className='col-span-6 md:col-span-3 flex items-center justify-center py-8'>
          <img src={Logo} alt="React Logo" className='w-[80%] h-auto  animate-pulse' />
        </div>
        <div className='col-span-6 md:col-span-3 bg-[rgba(0,0,0,0.6)] p-6'>
          <h2 className='font-semibold text-3xl text-cyan-400 font-serif p-2'>About Me</h2>
          <p className='text-lg tracking-wide font-medium text-white'>
            I am a passionate Front-End Developer with a diploma in Front-End Web Development.
            My expertise includes working with JavaScript, React, and Next.js to create dynamic,
            responsive web applications. I am proficient in using Tailwind CSS and Bootstrap for styling, and experienced in API integration and state management with Redux. With a solid understanding of HTML and CSS, I strive to optimize user interfaces for seamless interactions.
            Always eager to learn and stay updated with industry trends, I enjoy collaborating with teams to deliver innovative solutions.
          </p>
          <div className="md:text-lg font-medium text-center text-white border-b border-cyan-400 dark:text-gray-400 dark:border-gray-700 sm:py-4 md:py-0">
            <ul className="flex flex-wrap -mb-px">
              <li className="md:me-2" onClick={() => setactiveTab('skills')}>
                <Link to="#skills"
                 className={`inline-block p-4 border-b-2 rounded-t-lg transition-color duration-300 
                  ${activeTab === 'skills' ? 'text-cyan-500 border-cyan-800' : 'border-transparent hover:text-cyan-500 hover:border-cyan-800 dark:hover:text-gray-300'}`}>
                    Skills</Link>
              </li>
              <li className="md:me-2" onClick={() => setactiveTab('education')}>
                <Link to="#education"  className={`inline-block p-4 border-b-2 rounded-t-lg transition-color duration-300 
                  ${activeTab === 'education' ? 'text-cyan-500 border-cyan-800' : 'border-transparent hover:text-cyan-500 hover:border-cyan-800 dark:hover:text-gray-300'}`}>Education</Link>
              </li>
              <li className="md:me-2" onClick={() => setactiveTab('certificate')}>
                <Link to="#certificate"  className={`inline-block p-4 border-b-2 rounded-t-lg transition-color duration-300 
                  ${activeTab === 'certificate' ? 'text-cyan-500 border-cyan-800' : 'border-transparent hover:text-cyan-500 hover:border-cyan-800 dark:hover:text-gray-300'}`}>Certifications</Link>
              </li>
            </ul>
          </div>

          {/* skills */}
          {activeTab === 'skills' && (
            <div id="skills" className="pt-4 flex text-white">
              <div className="w-1/2 pr-4">
                <ul className="list-disc pl-5">
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>Sass</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="w-1/2">
                <ul className="list-disc pl-5">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>JQuery</li>
                  <li>Redux</li>
                  <li>Ajax</li>
                  <li>Axios</li>
                </ul>
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div id="education" className="pt-4">
              <ul className="list-disc pl-5 text-white">
                <li>Alexandria University, Faculty of Arts, Third Year</li>
              </ul>
            </div>
          )}

          {/* Certifications */}
          {activeTab === 'certificate' && (
            <ul className="list-disc pl-5 text-white pt-4">
              <li>Front-End Web Development React Js (Route)</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
                  