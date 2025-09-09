import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: "e-commerce app",
      link: "https://resplendent-moxie-3a051b.netlify.app/",
      icon: "fa-solid fa-up-right-from-square",
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
      link: "https://my-portfolio-brown-kappa-89.vercel.app/",
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
    {
      name: "stanleys crypto price tracker",
      link: "https://stanleys-crypto-tracker.vercel.app/",
      icon: "fa-solid fa-up-right-from-square",
    },
  ];

  return (
    <div className="projects-container">
      <h3 className="project-title">Projects</h3>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h4 className="project-name">{project.name}</h4>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className={project.icon}></i>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
