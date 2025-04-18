import React, { useEffect, useState } from "react";
import skills from "./data/skills.json";
import "../index.css";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1 className="skill-heading">SKILLS</h1>
      <div className="skills-grid">
        {skills.map((data) => (
          <SkillCircle
            key={data.id}
            title={data.title}
            percent={data.percent}
            image={data.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

const SkillCircle = ({ title, percent, image }) => {
  const [offset, setOffset] = useState(314 * 2); // 2x size

  useEffect(() => {
    setTimeout(() => {
      setOffset(314 * 2 - ((percent / 100) * 314 * 2));
    }, 300);
  }, [percent]);

  return (
    <div className="skill-item">
      <div className="progress-container">
        <div className="progress-circle">
          <svg width="240" height="240">
            <circle cx="120" cy="120" r="100" className="bg-circle" />
            <circle
              cx="120"
              cy="120"
              r="100"
              className="progress-ring"
              style={{
                strokeDasharray: "628",
                strokeDashoffset: `${offset}px`,
              }}
            />
          </svg>
          <span className="progress-text">{percent}%</span>
          <img src={`/assets/${image}`} alt={title} className="skill-icon" />
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default Skills;
