import React from "react";
import "./Experience.css";

const experiences = [
  {
    year: "2025 - Present",
    title: "Software Engineering Trainee - G10x",
    description:
      "Working on full-stack projects involving React, Node.js, and REST APIs. Collaborating with teams to deliver scalable enterprise solutions.",
    skills: ["React", "Node.js", "REST APIs", "Git", "Agile"],
  },
  {
    year: "2024",
    title: "Python Developer Intern - Freelance Projects",
    description:
      "Built automation scripts and data-driven solutions using Python and Flask. Improved system performance and reduced manual work by 40%.",
    skills: ["Python", "Flask", "APIs", "Automation"],
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="timeline-section" id="experience">
      <h2 className="timeline-heading">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <span className="timeline-year">{exp.year}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
