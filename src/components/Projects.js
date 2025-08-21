import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "SmartHydro Bottle Order Website",
      link: "https://github.com/stanleyikegwu/my_projects",
      icon: "fa-brands fa-github",
    },
    {
      name: "Hotel Booking Website",
      link: "https://github.com/stanleyikegwu/my_projects",
      icon: "fa-brands fa-github",
    },
    {
      name: "Restaurant Menu Website",
      link: "https://github.com/stanleyikegwu/my_projects",
      icon: "fa-brands fa-github",
    },
    {
      name: "My Portfolio App",
      link: "https://cerulean-jelly-9fb282.netlify.app",
      icon: "fa-solid fa-up-right-from-square",
    },
    {
      name: "Weather App",
      link: "https://musical-hotteok-5fea59.netlify.app",
      icon: "fa-solid fa-up-right-from-square",
    },
    {
      name: "Recipe App",
      link: "https://remarkable-hamster-d0aeb6.netlify.app/",
      icon: "fa-solid fa-up-right-from-square",
    },
    {
      name: "IDMB-clone",
      link: "https://netflx-clone-stagas.netlify.app/",
      icon: "fa-solid fa-up-right-from-square",
    },
  ];

  return (
    <div className="projects-container">
      <h3 className="project-title">Projects</h3>
      <ul className="project-list">
        {projectList.map((project, index) => (
          <li key={index} className="project-item">
            {project.name} —{" "}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className={project.icon}></i> View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
