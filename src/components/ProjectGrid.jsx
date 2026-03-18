import "./projectGrid.css";

const projects = [
  {
    id: 1,
    title: "Wearable",
    logo: "/src/assets/images/wearable_logo.png",
    main: "/src/assets/images/wearable_main.png",
    type: "web",
    overview:
      "Wearable is a full-stack web app designed to streamline outfit planning by allowing users to upload and categorize their clothing. Leveraging a React frontend and a Node.js backend with Express, the app uses a bespoke algorithm to automatically generate outfit combinations based on factors like color, print, season, and type. It integrates with a weather API to provide daily, weather-aware outfit recommendations by pulling real-time temperature data. User wardrobes and outfit matches are collected in a MongoDB database. The app ensures variety in outfit suggestions by storing the most recently worn date for both items and outfits. It incorporates user authentication with JWT for secure access and personalized recommendations.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Weather API"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/Wearable" },
      { label: "Site", url: "https://wearable-psi.vercel.app/" }
    ]
  },
    {
    id: 2,
    title: "Soul & Subconscious",
    logo: "/src/assets/images/soul_logo2.jpg",
    main: "/src/assets/images/soul_main.png",
    type: "web",
    overview:
      "Soul Subconscious Hypnotherapy is a client-facing website built with React that offers an informative, calming experience for users seeking hypnotherapy services. The site includes pages like Home, About, Services, Blog, and FAQs, providing visitors with easy access to content about hypnotherapy, self-care strategies, and session booking. It features a Vite-powered development setup, CSS Modules for scoped component styling, and react-router for page navigation. The design integrates soothing, animated background elements for a calming user experience, with a mobile-friendly, accessible interface for all users.",
    technologies: ["React", "Vite", "CSS Modules", "react-router", "Javascript"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/soul_subconscious" },
      { label: "Site", url: "https://soul-subconscious.vercel.app/" },
    ]
  },

  {
    id: 3,
    title: "Travlr Mobile App",
    logo: "/src/assets/images/travlr_logo.png",
    main: "/src/assets/images/travlr_main.jpg",
    type: "mobile",
    overview:
      "Travelr is a comprehensive travel organization app built with React Native and Expo Go that allows users to manage trips, itineraries, packing lists, and budgets with automated cross-module data syncing. It features a dual-view itinerary system (Calendar/List), automated budgeting that tracks expenses across transport and accommodation, and seamless syncing between modules using AsyncStorage. The app’s modular architecture uses a relational logic model, where actions like adding flights or hotels auto-generate related entries in the budget and itinerary. React Native Paper powers the UI with Material Design components, while a custom Dynamic Theming Engine adapts the interface based on geographic keywords in trip names. The app is built using React Context API for global state management, with utilities like uuid for ID generation and date-fns for date manipulation, ensuring a smooth and dynamic user experience.",
    technologies: ["React Native", "Expo Go", "React Context API", "React Native Paper", "async-storage", "uuid"],
   links: [
      { label: "GitHub", url: "https://github.com/katag1001/Travlr" },
    ]

  },  
  {
    id: 4,
    title: "St Albans Evening Rehearsal Orchestra",
    logo: "/src/assets/images/sta_logo.png",
    main: "/src/assets/images/sta_main.png",
    type: "web",
    overview:
      "The official website for the St Albans Evening Rehearsal Crchestra, featuring event information, rehearsal schedules, galleries, and integrated maps for venue locations.",
    technologies: ["React", "CSS", "Google Maps API"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/sta_rehearsal_orchestra" },
      { label: "Site", url: "https://sta-rehearsal-orchestra.vercel.app/" }
    ]
  },


  
];

export default function ProjectGrid({ onSelectProject }) {
  return (
    <div className="home-section-container project-grid-container">

      <h2 className="card-title">Featured Projects</h2>

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