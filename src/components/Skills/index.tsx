import "./style.scss";

const Skills = () => {
  const skills = [
    {
      title: "Intégration HTML/CSS",
      imgSrc: "/images/htmlcss.webp",
      alt: "html css",
      description: `Integration of design mockups using HTML and CSS, proficiency lies in translating visual concepts into functional and responsive web interfaces.`,
    },
    {
      title: "Native Javascript",
      imgSrc: "/images/jslogo.png",
      alt: "Native Javascript",
      description: `Having established a fundamental grasp of native JavaScript, my training emphasizes the creation of resilient and interactive web applications.`,
    },
    {
      title: "Project management",
      imgSrc: "/images/gestiondeprojet.png",
      alt: "Project management",
      description: `There is a commitment to delivering successful outcomes. The approach involves thoughtful planning, effective communication, and adaptability.`,
    },
    {
      title: "React",
      imgSrc: "/images/react.webp",
      alt: "html-css",
      description: `Having cultivated a solid understanding of React, my training revolves around the creation of dynamic and interactive web applications.`,
    },
    {
      title: "Debug & optimisation",
      imgSrc: "/images/debug.png",
      alt: "html-css",
      description: `Focused on application debugging and optimization, emphasizing the importance of meticulous debugging and strategic optimization techniques.`,
    },
    {
      title: "State management",
      imgSrc: "/images/store.png",
      alt: "html-css",
      description: `Proficient in state management concepts, I am familiar with frameworks such as Redux and Zustand.`,
    },
  ];

  return (
    <div className="skillCardWrapper">
      {skills.reverse().map((skill, index) => (
        <div key={index} className="skillCard">
          <img className="skillCard__img" src={skill.imgSrc} alt={skill.alt} />
          <h3 className="skillCard__title">{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
