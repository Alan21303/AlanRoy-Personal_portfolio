import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./projects-highlights.css";
import projectsData from "./projectsData.json";

const ProjectsHighlights = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      mirror: true,
      once: false,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (!entry.isIntersecting) {
            setActiveIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const toggleProject = (index) => {
    const isOpen = activeIndexes.includes(index);
    if (isOpen) {
      setActiveIndexes([]);
      setTimeout(() => AOS.refresh(), 500);
    } else {
      setActiveIndexes([]);
      setTimeout(() => {
        setActiveIndexes([index]);
        AOS.refresh();
      }, 500);
    }
  };

  return (
    <section className="steps _padd_top-bott80">
      <div className="wrapp-content">
        <div className="content">
          <div className="about__title">
            <h2 className="about__title-h2 heading-hover">
              <span
                className="projects-text"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="false"
              >
                Projects
              </span>
              <span
                className="highlights-text"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-once="false"
              >
                Highlights
              </span>
            </h2>
          </div>

          <div className="steps__wrapp">
            {projectsData.map((project, index) => {
              const isOpen = activeIndexes.includes(index);
              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`steps__item ${isOpen ? "active" : ""}`}
                >
                  <div
                    className="steps__head"
                    onClick={() => toggleProject(index)}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-once="false"
                  >
                    <h3 className="steps__head-title">
                      <span className="steps__num">
                        /{String(index + 1).padStart(3, "0")}
                      </span>
                      <span className="steps__title_project">
                        {project.title}
                      </span>
                    </h3>
                    <button className="toggle-btn">{isOpen ? "−" : "+"}</button>
                  </div>

                  <div className={`steps__descript ${isOpen ? "open" : ""}`}>
                    <div className="steps__descript-wrapp">
                      <div className="steps__descript-txt">
                        <div className="steps__desc-card">
                          <p className="steps__description-text">
                            {project.description}
                          </p>
                          <div className="steps__meta">
                            {project.date && (
                              <span className="steps__date">
                                {project.date}
                              </span>
                            )}
                            {project.tags?.map((tag, i) => (
                              <span key={i} className="steps__tag-pill">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="steps__tech-box">
                            {project.tech.map((tech, i) => (
                              <span key={i} className="steps__tech-pill">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="steps__links-box">
                            {project.github_link && (
                              <a
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-link"
                              >
                                GitHub
                              </a>
                            )}
                            {project.livedemo_link && (
                              <a
                                href={project.livedemo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-link live"
                              >
                                Live Demo
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="divider-line"></div>

                      <div className="steps__descript-img">
                        <div className="image-box">
                          {project.img_url1 && (
                            <img src={project.img_url1} alt={project.title} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlights;
