//Chocolate Pistachio Screenshots
import cpHomepage from "../../dist/gallery/cp-homepage.png";
import cpFindcafe from "../../dist/gallery/cp-findcafe.png";
import cpAddcafe from "../../dist/gallery/cp-addcafe.png";
import cpConfirmdetails from "../../dist/gallery/cp-confirmdetails.png";
import cpPending from "../../dist/gallery/cp-pending.png";
import cpMyarea from "../../dist/gallery/cp-myarea.png";
import cpMyprofile from "../../dist/gallery/cp-myprofile.png";
import cpChangedetails from "../../dist/gallery/cp-changedetails.png";
import cpUserfaves from "../../dist/gallery/cp-userfaves.png";
import cpLogo from "../../dist/gallery/cp-logo.png";
import cpCafe from "../../dist/gallery/cp-cafe.png";
import cpRatecafe from "../../dist/gallery/cp-ratecafe.png";
import cpCaferated from "../../dist/gallery/cp-caferated.png";

//TravlrMe Screenshots
import travlrJapan from "../../dist/gallery/travlr_japan.jpg";
import travlrItinerary from "../../dist/gallery/travlr_itinerary.jpg";
import travlrHotel from "../../dist/gallery/travlr_hotel.jpg";
import travlrTransport from "../../dist/gallery/travlr_transport.jpg";
import travlrMain from "../../dist/gallery/travlr_main.jpg";
import travlrPacking from "../../dist/gallery/travlr_packing.jpg";
import travlrDay from "../../dist/gallery/travlr_day.jpg";
import travlrDubai from "../../dist/gallery/travlr_dubai.jpg";
import travlrLogo from "../../dist/gallery/travlr_logo.png";

//Soul & Subconscious Screenshots
import soulMain from "../../dist/gallery/soul_main.png";
import staMain from "../../dist/gallery/sta_main.png";
import wearableLogo from "../../dist/gallery/wearable_logo.png";
import soulLogo2 from "../../dist/gallery/soul_logo2.jpg";

//Cherry Screenshots
import cherryLogo from "../../dist/gallery/cherry-logo.png";
import cherryLogoLarge from "../../dist/gallery/cherry-logo-large.png";
import cherryLogin from "../../dist/gallery/cherry-login.png";
import cherryConfirm from "../../dist/gallery/cherry-confirm.png";
import cherryExplore from "../../dist/gallery/cherry-explore.png";
import cherryPurchase from "../../dist/gallery/cherry-purchase.png";
import cherryBuy from "../../dist/gallery/cherry-buy.png";
import cherryPickup from "../../dist/gallery/cherry-pickup.png";
import cherrySecurepay from "../../dist/gallery/cherry-securepay.png";
import cherryOrderplaced from "../../dist/gallery/cherry-orderplaced.png";

// Volunteer Organiser Screenshots
import voHome from "../../dist/gallery/vo-home.png";
import voMyprofile from "../../dist/gallery/vo-myprofile.png";
import voProjects from "../../dist/gallery/vo-projects.png";
import voPolls from "../../dist/gallery/vo-polls.png";
import voAdmin from "../../dist/gallery/vo-admin.png";
import voApprovals from "../../dist/gallery/vo-approvals.png";
import voIssues from "../../dist/gallery/vo-issues.png";


//LWS Screenshots
import lwsHomepage from "../../dist/gallery/lws-homepage.png";
import lwsAddclothes from "../../dist/gallery/lws-addclothes.png";
import lwsClothes from "../../dist/gallery/lws-clothes.png";
import lwsOutfits from "../../dist/gallery/lws-outfits.png";
import lwsBuildoutfits from "../../dist/gallery/lws-buildoutfits.png";
import lwsPrefs from "../../dist/gallery/lws-prefs.png";






export const projects = [
  {
    id: 0,
    title: "Chocolate Pistachio",
    logo: cpLogo,
    main: cpLogo,
    type: "web",
    category: "Web Application",
    stage: "MVP shipped. In testing and iteration phase.",
    overview: "Chocolate Pistachio is a crowd-sourced web app designed to help users discover cafes based on what matters to them most. Rather than relying on a single star rating, it uses category-specific ratings for factors such as laptop-friendliness, accessibility, vegetarian options, cosiness, and date suitability. User ratings are weighted depending on how many ratings they have given in a certain area, so that real experts in a topic have their voice heard. Users can explore cafes on an interactive map, filter and search listings, contribute ratings and reviews, save favourites, and add new cafes. The project also incorporates automated location verification, user authentication, moderation workflows, and secure data handling.",
    technologies: ["React 19", "Node.js", "Express", "MongoDB Atlas", "Mongoose", "JWT", "MapLibre", "Protomaps", "Nominatim", "Overpass API", "OpenStreetMap", "Nodemailer"],
        links: [
      { label: "GitHub", url: "https://github.com/katag1001/cafe-app" },
      { label: "Site", url: "https://cafe-app-beryl.vercel.app/" }
    ],
    gallery: [
      { title: "View all the cafes added in your local area", image: cpHomepage },
      { title: "Filter to show the highest rated cafes by type", image: cpFindcafe },
      { title: "Add a cafe by address. The location is automatically verified or sent through to an admin to confirm", image: cpAddcafe },
      { title: "Pending approval from admin", image: cpPending },
      { title: "View full cafe details", image: cpCafe },
      { title: "Rate a cafe and leave a review depending on specific criteria", image: cpRatecafe },
      { title: "See reviews and comments based on category", image: cpCaferated }, 
      { title: "See all the cafes and ratings that you have added", image: cpMyarea },
      { title: "Change your details", image: cpChangedetails },
      { title: "Public profile so you can show others the cafes you love", image: cpMyprofile },
      { title: "See the favourite cafes of the highest rated users in your area", image: cpUserfaves },
    ]
  },

  {
    id: 1,
    title: "Cherry Volunteer Organiser",
    logo: cherryLogo,
    main: cherryLogoLarge,
    type: "web",
    category: "Web Application",
    stage: "MPV shipped and in use by Cherry.",
    team: "Bradley Venn",
    client: "Cherry (Non-profit)",
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
    ],
    gallery: [
      { title: "Homepage where you can view all the projects you are connected to", image: voHome },
      { title: "Change all your details to let your team know how you can help out", image: voMyprofile },
      { title: "All items organised at project level", image: voProjects },
      { title: "Add a poll on a project to make key decisions", image: voPolls },
      { title: "View all the issues that need to be resolved and add tasks", image: voIssues },
      { title: "Set key players and admin users", image: voAdmin },
      { title: "Approval requests for new users", image: voApprovals },
    ]
  },

  {
    id: 2,
    title: "Cherry",
    logo: cherryLogo,
    main: cherryLogoLarge,
    type: "mobile",
    category: "Mobile Application",
    stage: "Preparing MVP for launch. ETA December 2026.",
    team: "Open Source Team",
    client: "Cherry (Non-profit)",
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
    ],
    gallery: [
      { title: "Login", image: cherryLogin },
      { title: "Secure login", image: cherryConfirm },
      { title: "Explore listings", image: cherryExplore },
      { title: "View an item and make an offer", image: cherryPurchase },
      { title: "Checkout securely", image: cherryBuy },
      { title: "Secure payment using stripe", image: cherrySecurepay },
      { title: "Choose a pickup point with inpost", image: cherryPickup },
      { title: "Order placed", image: cherryOrderplaced },
      
    ]
  },

  {
    id: 3,
    title: "Loved Worn Seen",
    logo: "/wearable_logo.png",
    main: "/wearable_main.png",
    type: "web",
    category: "Web Application",
    stage: "TBD",
    team: "Solo Developer",
    client: "Personal Project",
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
    ],
    gallery: [
      { title: "Homepage", image: lwsHomepage },
      { title: "Add Clothes", image: lwsAddclothes },
      { title: "Clothes", image: lwsClothes },
      { title: "Outfits", image: lwsOutfits },
      { title: "Build Outfits", image: lwsBuildoutfits },
      { title: "Preferences", image: lwsPrefs },
    ]
  },

  {
    id: 4,
    title: "Soul & Subconscious",
    logo: "/soul_logo2.jpg",
    main: "/soul_main.png",
    type: "web",
    category: "Web Application",
    stage: "TBD",
    team: "Solo Developer",
    client: "Soul & Subconscious Hypnotherapy",
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
    ],
    gallery: [
      // { title: "Screen name", image: "/path-to-image.png" },
    ]
  },

  {
    id: 5,
    title: "TravlrMe Mobile App",
    logo: "/travlr_logo.png",
    main: "/travlr_main.jpg",
    qr: "/download_qr.jpg",
    type: "mobile",
    category: "Mobile Application",
    stage: "TBD",
    team: "Solo Developer",
    client: "Personal Project",
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
    ],
    gallery: [
      { title: "Itinerary", image: travlrItinerary },
      { title: "Day View", image: travlrDay },
      { title: "Hotel Booking", image: travlrHotel },
      { title: "Transport", image: travlrTransport },
      { title: "Packing List", image: travlrPacking },
      { title: "Dynamic Theming - Dubai", image: travlrDubai },
      { title: "Dynamic Theming - Japan", image: travlrJapan },
    ]
  }
  
];
