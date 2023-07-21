import {
  mobile,
  backend,
  creator,
  web,
  css,
  git,
  html,
  mongodb,
  nextjs,
  express,
  javascript,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  henry,
  logo,
  santiago,
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
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Resourceful Problem Solver",
    icon: mobile,
  },
  {
    title: "Cat Lover",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Express",
    icon: express,
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
    name: "NextJS",
    icon: nextjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Fullstack Javascript Developer",
    company_name: "Bootcamp Soy Henry",
    icon: henry,
    iconBg: "#383E56",
    date: "March 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including instructors, teaching assistants, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Javascript Developer",
    company_name: "Freelancer",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams, clients, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Electrician",
    company_name: "Techint",
    icon: "https://www.liblogo.com/img-logo/te7978t06b-techint-logo-techint-grupo-doss-arq.png",
    iconBg: "#383E56",
    date: "Jan 2018 - March 2020",
    points: [
      "Coordinating the implementation of a robotic arm and surveying and connecting PLCs.",
      "Managing projects and ensuring their successful completion on time, within budget, and to the required specifications.",
      "Collaborating with team members to identify and resolve problems during the implementation phase.",
      "Assembling and connecting various projects related to PLCs and robotics for seamless pipes.",
      "Monitoring and controlling processes to ensure efficient and effective project execution.",
      "Developing plans to address potential issues and mitigate risks.",
      "The experience in project management, effective collaboration with team members and process control was very relevant to my career as a FullStack developer, where these skills are critical to design, create and maintain complex web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am impressed with the speed and quality of the work delivered by Federico, really, if I had to recommend a programmer, it would be him.",
    name: "Santiago Robetto",
    designation: "CEO",
    company: "Functional Solutions",
    image: santiago,
  },
  {
    testimonial:
      "I'm a random user, and I have to say that I've never met a web developer who cares as much about their users' success as Federico does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Amazing Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "No, I am not another random user. I am the boss here. My human feeds me, and that's all that matters. Although I can attest to the fact that they spend their time studying and practicing to create websites that delight users. Anyway, hire him so he can buy me food!",
    name: "Vainilla",
    designation: "CTO",
    company: "House of Federico",
    image:
      "https://media.istockphoto.com/id/1393862021/photo/tricolor-cat-with-green-eyes.jpg?s=612x612&w=0&k=20&c=aF-wxBDRwgfoIN383qh9okzqC_9zm85njzlUvEhtCJU=",
  },
];

const projects = [
  {
    name: "Crew Social Media",
    description:
      "'Crew Social Media' is a Full Stack MERN (MongoDB, Express.js, React.js, and Node.js) Application that serves as a simple social media platform. The application enables users to share and post interesting events or memories from their lives. By using the combination of React, Node.js, Express, and MongoDB, you have created a powerful and efficient solution. Users can like posts, add and remove friends, view profiles, register, login, and logout. Additionally, I pay special attention to security, where authentication is implemented to ensure secure access to the application's features. Technologies like JSON Web Tokens (JWT) can be utilized for authentication and authorization purposes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },

      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://github.com/FedeNicoletti/socialmedia/assets/63601533/518abf7e-ad29-4111-87e6-f8de4ce29a1c",
    source_code_link: "https://github.com/FedeNicoletti/socialmedia",
  },
  {
    name: "Movix App",
    description:
      "The project is a React-based movie website built with React 18, hooks, Redux Toolkit, Axios, and React Router DOM version 6. It offers users a seamless and interactive experience to watch movies online. The codebase follows a well-structured folder organization for maintainability and scalability. Global state management is implemented using Redux Toolkit, enabling easy data sharing across components. Data is fetched from a REST API using Axios, allowing integration with external movie databases. Custom hooks are created for reusable logic and improved code modularity. The website features a carousel/slider for intuitive movie browsing and infinite scrolling for effortless navigation. React Router DOM version 6 ensures efficient routing within the application. A loading skeleton provides visual feedback during data loading, and robust error handling informs users of any issues encountered, such as 404 pages. The responsive layout, powered by strategic media queries, ensures optimal viewing on desktops, tablets, and mobile phones.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://github.com/FedeNicoletti/movix/assets/63601533/33d93b12-1260-4a91-960e-65480699f200",
    source_code_link: "https://github.com/FedeNicoletti/movix",
  },
  {
    name: "This Portfolio",
    description:
      "The page is a modern and minimalist developer's portfolio that presents a brief description of the developer and their skills, a section of projects with screenshots and links to repositories, and a contact form.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Three JS",
        icon: threejs,
      },
    ],
    image:
      "https://user-images.githubusercontent.com/63601533/238207763-d71b37ec-4dc1-40c4-9644-f8ec051daecc.png",
    source_code_link: "https://github.com/FedeNicoletti/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
