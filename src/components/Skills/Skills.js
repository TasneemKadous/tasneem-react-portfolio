import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Concepts & Methods",
      skills: ["OOP", "Data Structures" , "Algorithms" , "SQL" , "Design Patterns" , "UI/UX" , "AI" , "Big Data" , "Component-based Software Development" , "Image Processing" , "Unit Testing" , "Agile Development Methods" , "Microservices Architecture" , "Monolithic Architecture" , "CI/CD Pipeline", "BPM" , "Software Architecture" , "Cloud Computing"],
    },
    {
      title: "Soft Skills",
      skills: ["Structured problem solving & debugging", "Independent and results-oriented working style", "Teamwork & mentoring", "Targeted stakeholder communication", "Willingness to learn & technology leadership", "Comprehensive documentation"],
    },
    {
      title: "Languages",
      skills: ["German (Fluent)", "English (Fluent)", "Arabic (Native)", "Turkish (Good)"],
    },
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category, i) => (
          <div key={i} className="skills-card">
            <h3>{category.title}</h3>

            <ul>
              {category.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
