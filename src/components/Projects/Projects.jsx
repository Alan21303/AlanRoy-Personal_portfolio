import React, { useEffect, useState } from "react";
import "./Projects.css";
import projectsData from "./projectsData.json";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, [visibleCount]);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, projectsData.length));
  };

  const handleShowLess = () => setVisibleCount(4);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title animate-title">Projects</h2>

      <div className="projects-container">
        {projectsData.slice(0, visibleCount).map((project, index) => (
          <div
            className={`project-card ${!project.img ? "no-image" : ""}`}
            key={index}
          >
            {project.img && (
              <div className="project-image">
                <img
                  src={project.img_url}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github-btn"
              >
                GitHub
              </a>

              <button
                className={`btn live-btn ${!project.Live ? "disabled" : ""}`}
                disabled={!project.Live}
                onClick={() =>
                  project.Live &&
                  window.open(project.livedemo_link, "_blank", "noopener")
                }
              >
                {project.Live ? "Live Demo" : "Coming Soon"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-buttons">
        {visibleCount < projectsData.length ? (
          <button className="btn view-more-btn" onClick={handleViewMore}>
            View More Projects
          </button>
        ) : (
          projectsData.length > 4 && (
            <button className="btn show-less-btn" onClick={handleShowLess}>
              Show Less
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
