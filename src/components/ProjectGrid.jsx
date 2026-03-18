import "./projectGrid.css";

const projects = [
  {
    id: 1,
    title: "Wearable",
    logo: "/src/assets/images/wearable_logo.png",
    main: "/src/assets/images/wearable_main.png",
    overview:
      "A full-stack outfit planning app that allows users to upload clothing, automatically generate outfit combinations, and receive daily suggestions based on weather and location.",
    technologies: ["React", "Node.js", "MongoDB", "Weather API"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/Wearable" },
      { label: "Live Site", url: "https://wearable-psi.vercel.app/" }
    ]
  },
  {
    id: 2,
    title: "St Albans Evening Rehearsal Orchestra",
    logo: "/src/assets/images/sta_logo.png",
    main: "/src/assets/images/sta_main.png",
    overview:
      "An official website for the orchestra, featuring event information, rehearsal schedules, galleries, and integrated maps for venue locations.",
    technologies: ["React", "CSS", "Google Maps API"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/sta_rehearsal_orchestra" },
      { label: "Live Site", url: "https://sta-rehearsal-orchestra.vercel.app/" }
    ]
  },
  {
    id: 3,
    title: "Travlr Mobile App",
    logo: "/src/assets/images/travlr_logo.png",
    main: "/src/assets/images/travlr_logo.png",
    overview:
      "A travel planning mobile app that helps users organise trips, manage itineraries, track budgets, and maintain packing lists with dynamic destination-based UI themes.",
    technologies: ["React Native", "JavaScript", "State Management"],
    links: []
  },
  {
    id: 4,
    title: "Soul & Subconscious",
    logo: "/src/assets/images/soul_logo.png",
    main: "/src/assets/images/soul_main.png",
    overview:
      "A task management web application that allows users to create, track, and manage tasks efficiently.",
    technologies: ["React", "Node.js", "MongoDB"],
    links: [
      { label: "GitHub", url: "https://github.com/example" },
      { label: "GitHub", url: "https://github.com/example" },
    ]
  },

  
];

export default function ProjectGrid({ onSelectProject }) {
  return (
    <div className="home-section-container project-grid-container">

      <h2 className="project-grid-title">Featured Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-grid-item"
            onClick={() => onSelectProject(project)}
          >
            <img src={project.logo} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

    </div>
  );
}