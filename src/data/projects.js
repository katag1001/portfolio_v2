export const projects = [
  {
    id: 1,
    title: "Cherry Volunteer Organiser",
    logo: "/cherry-logo.png",
    main: "/cherry-logo.png",
    type: "web",
    overview:
      "A full-stack volunteer management and project coordination platform built for Cherry. \
    The application combines member profiles and a searchable volunteer directory with a \
    lightweight project-management system for turning issues into decisions and actionable tasks. \
    It includes secure account onboarding, email verification, admin approval, project and issue \
    management, collaborative polls, task assignment and resolution tracking, and role-based \
    administration.",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Auth.js",
      "Node.js",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/volunteer-app" },
      { label: "Site", url: "https://cherry.org.uk/" }
    ]
  },

  {
    id: 2,
    title: "Cherry",
    logo: "/cherry-logo.png",
    main: "/cherry-app-main.PNG",
    type: "mobile",
    overview:
      "Cherry is a nonprofit, open-source app building a digital platform similar to Vinted \
      that combines sustainable fashion with charitable giving. The platform enables users to buy \
      and sell pre-loved clothing and accessories, with proceeds going to charities of their choice. \
      As a backend engineer, I contribute to the development and maintenance of the platform \
      building and improving backend services, APIs, data handling, and core application \
      functionality as part of the open-source development team.",
    technologies: [
      "Next.js",
      "MongoDB",
      "Node.js"],
    links: [
      { label: "GitHub", url: "https://github.com/Cherry-CIC/MVP" },
      { label: "Site", url: "https://cherry.org.uk/" }
    ]
  },

  {
    id: 3,
    title: "Wearable",
    logo: "/wearable_logo.png",
    main: "/wearable_main.png",
    type: "web",
    overview:
      "Wearable is a full-stack web app designed to streamline outfit planning by allowing users \
      to upload and categorize their clothing. Leveraging a React frontend and a Node.js backend \
      with Express, the app uses a bespoke algorithm to automatically generate outfit combinations \
      based on factors like color, print, season, and type. It integrates with a weather API to \
      provide daily, weather-aware outfit recommendations by pulling real-time temperature data. \
      User wardrobes and outfit matches are collected in a MongoDB database. The app ensures variety \
      in outfit suggestions by storing the most recently worn date for both items and outfits. It \
      incorporates user authentication with JWT for secure access and personalized recommendations.",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Weather API"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/Wearable" },
      { label: "Site", url: "https://wearable-psi.vercel.app/" }
    ]
  },

  {
    id: 4,
    title: "Soul & Subconscious",
    logo: "/soul_logo2.jpg",
    main: "/soul_main.png",
    type: "web",
    overview:
      "Soul Subconscious Hypnotherapy is a client-facing website built with React that offers an \
      informative, calming experience for users seeking hypnotherapy services. The site includes \
      pages like Home, About, Services, Blog, and FAQs, providing visitors with easy access to \
      content about hypnotherapy, self-care strategies, and session booking. It features a \
      Vite-powered development setup, CSS Modules for scoped component styling, and \
      react-router for page navigation. The design integrates soothing, animated background \
      elements for a calming user experience, with a mobile-friendly, accessible interface for \
      all users.",
    technologies: ["React", "Vite", "CSS Modules", "react-router", "Javascript"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/soul_subconscious" },
      { label: "Site", url: "https://soul-subconscious.vercel.app/" },
    ]
  },

  {
    id: 5,
    title: "TravlrMe Mobile App",
    logo: "/travlr_logo.png",
    main: "/travlr_main.jpg",
    qr: "/download_qr.jpg",
    type: "mobile",
    overview:
      "TravlrMe is a comprehensive travel organization app built with React Native and Expo Go \
      that allows users to manage trips, itineraries, packing lists, and budgets with automated \
      cross-module data syncing. It features a dual-view itinerary system (Calendar/List), \
      automated budgeting that tracks expenses across transport and accommodation, and seamless \
      syncing between modules using AsyncStorage. The app's modular architecture uses a relational \
      logic model, where actions like adding flights or hotels auto-generate related entries in the \
      budget and itinerary. React Native Paper powers the UI with Material Design components, while \
      a custom Dynamic Theming Engine adapts the interface based on geographic keywords in trip \
      names. The app is built using React Context API for global state management, with utilities \
      like uuid for ID generation and date-fns for date manipulation, ensuring a smooth and \
      dynamic user experience.",
    technologies: ["React Native", "Expo Go", "React Context API", "React Native Paper", "async-storage", "uuid"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/Travlr" },
    ]
  },
  {
    id: 6,
    title: "St Albans Evening Rehearsal Orchestra",
    logo: "/sta_logo.png",
    main: "/sta_main.png",
    type: "web",
    overview:
      "The official website for the St Albans Evening Rehearsal Crchestra, featuring event \
      information, rehearsal schedules, galleries, and integrated maps for venue locations.",
    technologies: ["React", "CSS", "Google Maps API"],
    links: [
      { label: "GitHub", url: "https://github.com/katag1001/sta_rehearsal_orchestra" },
      { label: "Site", url: "https://stalbans-ero.org.uk/" }
    ]
  },
];
