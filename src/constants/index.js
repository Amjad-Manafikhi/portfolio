import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mysql,
  git,
  figma,
  docker,
  meta,
  zahabi,
  tesla,
  shopify,
  dentist,
  newsapp,
  hammam,
  threejs,
  next,
  dndkit,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "dnd-kit",
    icon: dndkit,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  
];

const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Zahabi CO",
    icon: zahabi,
    link:"https://zahabico.com/en",
    iconBg: "#383E56",
    date: "",
    points: [
      "Refactored existing React components to improve performance, readability, and maintainability.",
      "Added new features and integrating APIs to enhance the functionality of web applications.",
      "Optimized state management and implementing best practices for scalable React applications.",
    ]

  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dental Education System",
    description:
      "A full-stack web app enabling dental students and supervisors to manage patient cases efficiently, featuring role-based dashboards, responsive Next.js UI, and a scalable MySQL database.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mySql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: dentist,
    source_code_link: "https://github.com/Amjad-Manafikhi/Dentist-App",
    demo_link: "https://dentist-app-lovat.vercel.app/",
  },
  {
    name: "News App",
    description:
      "A modern news website built with Next.js, TypeScript, and Tailwind CSS, featuring breaking news, category-based browsing, and search functionality powered by a REST API.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/Amjad-Manafikhi/News-App",
    demo_link: "https://news-app-inky-omega.vercel.app/",
  },
  {
    name: "Hammam",
    description:
      "Hammam spa booking system built with React and Tailwind CSS, featuring time-slot selection, extras, PayPal integration, and a responsive, user-friendly interface for smooth reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hammam,
    source_code_link: "",
    demo_link: "https://hammam.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };