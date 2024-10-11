import React, { useEffect, useState } from "react";
import ecommerce from "./../../assets/Ecommerce pc.png";
import customerDash from "./../../assets/Task pc.png";
import yummy from "./../../assets/Yummy pc.png";
import crud from "./../../assets/Crud pc.png";
import bookmark from "./../../assets/Bookmarker pc.png";
import egpParty from "./../../assets/Egyption Party pc.png";
import quizApp from "./../../assets/quiz app oop pc.png";
import Weahter from "./../../assets/Weather app .png";
import cssExam from "./../../assets/css exam pc.png";
import noteApp from "./../../assets/NoteApp Project.png";
import newEra from "./../../assets/NewEra.png";
import grid from "./../../assets/Grid system pc.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../Loader/Loader";

export default function Projects() {
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

  const reactProjects = [
    {
      name: "NewEra Envolved Agents",
      material:
        "ReactJs - Tailwindcss - Flowbite - react-type-animation - react-scroll - react-router-hash-link - react-phone-number-input - react-hot-toast",
      src: newEra,
      label: "NewEra",
      githubUrl: "https://github.com/BadrDaghash/Neeagents",
      webUrl: "https://badrdaghash.github.io/Neeagents/",
    },
    {
      name: "NoteApp",
      material:
        "ReactJs - Axios - Yup - Formik - Recoil - Tailwindcss - Flowbite",
      src: noteApp,
      label: "NoteApp",
      githubUrl: "https://github.com/BadrDaghash/Note-App",
      webUrl: "https://badrdaghash.github.io/Note-App/",
    },
    {
      name: "Fresh Cart E-commerce",
      material:
        "ReactJs - Axios - Yup - Formik - react-hot-toast - Tailwindcss - Flowbite",
      src: ecommerce,
      label: "e-commerce",
      githubUrl: "https://github.com/BadrDaghash/Fresh-Cart-",
      webUrl: "https://badrdaghash.github.io/Fresh-Cart-/",
    },
    {
      name: "Dashboard",
      material: "ReactJs - Mui - React-google-charts",
      src: customerDash,
      label: "dashboardImg",
      githubUrl: "https://github.com/BadrDaghash/Task",
      webUrl: "https://badrdaghash.github.io/Task/",
    },
  ];

  const nativeProjects = [
    {
      name: "Yummy",
      material: "HTML - CSS - Bootstrap - JQuery - JavaScript",
      src: yummy,
      label: "yummy",
      githubUrl: "https://github.com/BadrDaghash/Yummy",
      webUrl: "https://badrdaghash.github.io/Yummy/",
    },
    {
      name: "Crud System",
      material: "HTML - CSS - JavaScript",
      src: crud,
      label: "crudImg",
      githubUrl: "https://github.com/BadrDaghash/Crud-",
      webUrl: "https://badrdaghash.github.io/Crud-/",
    },
    {
      name: "Egyptian Party",
      material: "HTML - CSS - Bootstrap - JQuery - JavaScript",
      src: egpParty,
      label: "egyImg",
      githubUrl: "https://github.com/BadrDaghash/Party",
      webUrl: null,
    },
    {
      name: "Weather App",
      material: "HTML - CSS - Bootstrap - JQuery - JavaScript",
      src: Weahter,
      label: "WeahterImg",
      githubUrl: "https://github.com/BadrDaghash/Weather",
      webUrl: "https://badrdaghash.github.io/Weather/",
    },
    {
      name: "Quiz App",
      material: "HTML - CSS - JavaScript",
      src: quizApp,
      label: "quizAppImg",
      githubUrl: "https://github.com/BadrDaghash/Quiz-App",
      webUrl: "https://badrdaghash.github.io/Quiz-App/",
    },
    {
      name: "Bookmark",
      material: "HTML - CSS - Bootstrap - JavaScript",
      src: bookmark,
      label: "bookmarkImg",
      githubUrl: "https://github.com/BadrDaghash/BookMark",
      webUrl: "https://badrdaghash.github.io/BookMark/",
    },
  ];

  const stylingProjects = [
    {
      name: "Grid System",
      material: "HTML - CSS - JavaScript",
      src: grid,
      githubUrl: "https://github.com/BadrDaghash/Grid-System-",
      webUrl: "https://badrdaghash.github.io/Grid-System-/",
    },
    {
      name: "CSS Exam",
      material: "HTML - CSS",
      src: cssExam,
      githubUrl: "https://github.com/BadrDaghash/Daniel-Profile",
      webUrl: "https://badrdaghash.github.io/Daniel-Profile/",
    },
  ];

  const renderProject = (project, index) => (
    <div
      key={index}
      className="max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] bg-[#0d071b42] rounded-lg hover:shadow-md hover:shadow-emerald-700 transition-colors duration-600 dark:bg-gray-800 dark:border-gray-700 mx-auto mb-6"
    >
      <span className="relative block group overflow-hidden rounded-lg">
        <img
          className="rounded-t-lg transition-transform duration-300 group-hover:scale-105"
          src={project.src}
          alt={project.label}
        />
        <span className="w-full h-full bg-gray-800 bg-opacity-50 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row gap-4">
          <a
            href={project.githubUrl}
            className="text-white text-4xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {project.webUrl && (
            <a
              href={project.webUrl}
              className="text-white text-4xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBullseye} />
            </a>
          )}
        </span>
      </span>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-cyan-600 dark:text-white">
          {project.name}
        </h5>
        <p className="mb-3 font-normal text-white dark:text-gray-400">
          {project.material}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <h2 className="text-white text-4xl md:ms-20 ms-2 p-4 font-serif">React</h2>
      <div className="1 flex md:py-6 border-b border-cyan-500 flex-wrap">
        {reactProjects.map(renderProject)}
      </div>

      <h2 className="text-white text-4xl md:ms-20 ms-2 p-4 pt-6 font-serif">
        Native
      </h2>
      <div className="1 flex md:py-6 border-b border-cyan-500 flex-wrap">
        {nativeProjects.map(renderProject)}
      </div>

      <h2 className="text-white text-4xl md:ms-20 ms-2 p-4 pt-6 font-serif">
        Styling
      </h2>
      <div className="3 flex py-6 border-b border-cyan-500 flex-wrap">
        {stylingProjects.map(renderProject)}
      </div>
    </>
  );
}
