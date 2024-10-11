import React, { useEffect, useState } from "react";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faBootstrap,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jQuery from "./../../assets/jquery.png";
import typescript from "./../../assets/typescript.png";
import redux from "./../../assets/redux.png";
import NextJs from "./../../assets/Next.js.png";
import cerificate from "./../../assets/certificate.png";
import Loader from "../../Loader/Loader";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  const skillsData = [
    { type: "icon", icon: faHtml5, color: "text-orange-500", label: "HTML5" },
    { type: "icon", icon: faCss3, color: "text-blue-500", label: "CSS3" },
    { type: "icon", icon: faBootstrap, color: "text-fuchsia-600", label: "Bootstrap" },
    { type: "icon", icon: faJs, color: "text-yellow-300", label: "JavaScript" },
    { type: "icon", icon: faReact, color: "text-cyan-400", label: "React" },
    { type: "icon", icon: faSass, color: "text-[#e43df0]", label: "Sass" },
    { type: "image", src: typescript, label: "TypeScript" },
    { type: "image", src: jQuery, label: "jQuery" },
    { type: "image", src: redux, label: "Redux" },
    { type: "image", src: NextJs, label: "Next.js" },
  ];

  return (
    <>
      <div className="w-[90%] sm:w-[80%] md:w-[70%] bg-[rgba(0,0,0,0.4)] mx-auto p-6 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold pb-6 font-serif text-cyan-500">
          About Me
        </h1>
        <p className="mb-3 py-2 text-base sm:text-lg md:text-xl text-white dark:text-gray-400 leading-relaxed tracking-wide">
          I am a passionate Front-End Developer with extensive experience in
          creating dynamic and responsive web applications. I specialize in
          JavaScript, React, and Next.js, leveraging these technologies to build
          robust and scalable front-end solutions. My proficiency in Tailwind
          CSS, Bootstrap, and other styling frameworks allows me to craft
          visually appealing and user-friendly interfaces.
        </p>

        <p className="text-white dark:text-gray-400">
          I am adept at API integration and state management, using tools like
          Redux and React Query to ensure efficient data handling and smooth
          user experiences. With a solid foundation in HTML and CSS, I focus on
          optimizing web performance and accessibility, ensuring that my
          applications provide seamless interactions across all devices and
          browsers.
        </p>
      </div>

      <div className="max-w-sm p-6 md:p-0 mx-auto md:w-full rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img className="rounded-lg md:w-full" src={cerificate} alt="certificate" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="icons w-full mt-10 px-6 sm:px-10 md:px-20 gap-4">
        <h2 className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-semibold py-12 font-serif">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center bg-[#143e4b2d] w-24 sm:w-36 md:w-44 py-2 px-2 rounded-full h-24 sm:h-36 md:h-36"
            >
              {skill.type === "icon" ? (
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`${skill.color} text-2xl sm:text-3xl md:text-[50px] p-2 sm:pt-5 scale-90 group-hover:scale-125 transition-all duration-300`}
                />
              ) : (
                <img
                  src={skill.src}
                  className="w-8 sm:w-10 md:w-[45px] mt-2 sm:mt-3 md:mt-5 scale-90  group-hover:scale-125 transition-all duration-300 "
                  alt={skill.label}
                />
              )}
              <span className="text-white text-sm sm:text-lg mt-2 sm:mt-3 md:mt-2">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
