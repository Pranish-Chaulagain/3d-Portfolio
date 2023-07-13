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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  laravelLogo,
  reactLogo,
  nodeLogo,
  djangoLogo,
  php,
  foodi,
  traveldost,
  filmdb,
  python,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Laravel Developer",
    icon: laravelLogo,
    iconBg: "#050816",
    date: "Mar 2020 - Present",
    points: [
      "Developing web applications using Laravel, including implementing features, handling data persistence, and ensuring code quality.",
      "Designing the overall structure and architecture of the application, ensuring it follows best practices and adheres to Laravel's principles.",
      "Building server-side logic, database integration, and APIs using Laravel's features such as routing, ORM, caching, and authentication.",
    ],
  },
  {
    title: "React.js Developer",
    icon: reactLogo,
    iconBg: "#050816",
    date: "Jun 2022 - Present",
    points: [
      "Developing web applications using ReactJS, including implementing user interfaces, handling state management, and integrating with backend APIs.",
      "Building reusable and modular components in React, following best practices such as component composition, state management, and handling props and events.",
      "Implementing state management solutions in React, such as using React's built-in state or utilizing external libraries like Redux for managing application-wide state.",
    ],
  },
  {
    title: "Node.js Developer",
    icon: nodeLogo,
    iconBg: "#050816",
    date: "Jan 2023 - Present",
    points: [
      "Building server-side logic and APIs using Node.js, including handling data persistence, performing database operations, and implementing business logic.",
      "Creating RESTful or GraphQL APIs using frameworks like Express.js, Hapi.js, or Nest.js, and integrating them with frontend or mobile applications.",
      "Working with databases such as MongoDB, MySQL, or PostgreSQL to store and retrieve data efficiently.",
    ],
  },
  {
    title: "Django Developer",
    icon: djangoLogo,
    iconBg: "#050816",
    date: "Mar 2023 - Present",
    points: [
      "Developing web applications using Django, including implementing features, handling data persistence, and ensuring code quality.",
      "Building server-side logic, database integration, and APIs using Django's features such as routing, ORM, and authentication.",
      "Building RESTful APIs using Django's Rest Framework or GraphQL APIs using libraries like Graphene, enabling seamless data exchange between frontend and backend.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pranish proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success like Pranish does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Pranish optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food-I",
    description:
      "Imagine a website where you can satisfy your cravings with just a few clicks. Welcome to our food ordering website, where we bring convenience, variety, and culinary delights right to your fingertips.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: foodi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Film db",
    description:
      "Explore our vast library of movies, ranging from classic masterpieces to the latest blockbusters. Our database is regularly updated, ensuring that you stay up-to-date with the ever-evolving world of film. With detailed information on each movie, including plot summaries, cast and crew details, release dates, and ratings, you'll have all the essential details at your fingertips to make informed viewing choices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: filmdb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Dost",
    description:
      "We understand that every traveler is unique, with diverse interests, preferences, and aspirations. That's why we offer a wide range of meticulously crafted travel packages and itineraries, designed to cater to various travel styles and interests. Whether you're seeking a relaxing beach getaway, an exhilarating adventure, a cultural immersion, or a combination of it all, we have the perfect package for you.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: traveldost,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
