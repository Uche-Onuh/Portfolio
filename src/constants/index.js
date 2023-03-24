import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  php,
  luxeweb,
  oge,
  threejs,
  luxe,
  midtown,
  material,
  rest,
  mytube,
  osi,
  mel,
  great,
  gpt3,
  bank,
  funmi,
  basil,
  ogechi,
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
    title: "React Js Developer",
    icon: reactjs,
  },
  {
    title: "Web Development Instructor",
    icon: creator,
  },
  {
    title: "IT Assistant",
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
    name: "Material UI",
    icon: material,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "PHP",
    icon: php,
  },
  {
    name: "Rest API",
    icon: rest,
  },
];

const experiences = [
  {
    title: "IT Assistant",
    company_name: "Luxe Dental",
    icon: luxe,
    iconBg: "#383E56",
    date: "April 2021 - December 2021",
    points: [
      "Worked on large production ready projects that make use of Next.js",
      "Worked with a quality assurance team to set up scripts, test cases and automation protocol.",
      "Applied agile methodologies and effective development best practices to enhance product development.",
      "Build projects using Node.js, Firebase",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Midtown Tech Hub",
    icon: midtown,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but  Uche proved me wrong.",
    name: "Dr Funmi Adeniyi",
    designation: "Director",
    company: "Luxe Dental",
    image: funmi,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about self improvement like Rick does.",
    name: "Basil Alkabeli",
    designation: "Director",
    company: "Midtown Tech Hub",
    image: basil,
  },
  {
    testimonial:
      "After Uche built our e-commerce website, our sales increased by 50%. I can't thank him enough!",
    name: "Ogechi Onuh",
    designation: "CEO",
    company: "Oge by Oge",
    image: ogechi,
  },
];

const projects = [
  {
    name: "Luxe Dental",
    description:
      "A website for a dental clinic in which the clinic can showcase the services they provide and clients can book appointments online. Also provides a blog space where the dentist can post dental hygene tips",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Node.JS",
        color: "pink-text-gradient",
      },
    ],
    image: luxeweb,
    source_code_link: "https://github.com/Uche-Onuh/luxedental",
    web_link: "https://luxedental.com.ng/",
  },
  {
    name: "Oge by Oge",
    description:
      "An e-commerce website for a fashion house where their products can be put online and clients can place orders. Also provides an avenue for fashion students to apply for their fashion classes (in-person and online)",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: oge,
    source_code_link: "https://github.com/Uche-Onuh/Oge",
    web_link: "https://ogebyoge.com.ng/",
  },
  {
    name: "Mytube",
    description:
      "A youtube clone app that fetches data from Rest API youtube API. This application allows users search for videos, select the videos and watch them. It also allows users search for channels of creators they wish to see",
    tags: [
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
    ],
    image: mytube,
    source_code_link: "https://github.com/Uche-Onuh/Youtube-clone",
    web_link: "https://magnificent-fudge-aa19d1.netlify.app/",
  },
  {
    name: "Gpt3",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "Material",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/Uche-Onuh/gpt-3",
    web_link: "https://guileless-speculoos-93ba8e.netlify.app/",
  },
  {
    name: "HooBank",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React.Js",
        color: "blue-text-gradient",
      },
      {
        name: "React-Icons",
        color: "green-text-gradient",
      },
      {
        name: "TailWind Css",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/Uche-Onuh/Bank-app",
    web_link: "https://soft-mermaid-ac7d10.netlify.app/",
  },
  {
    name: "Osimhe Ventures",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: osi,
    source_code_link: "https://github.com/",
    web_link: "https://cabbifoods.osimheventures.com/",
  },
  {
    name: "By Melaku",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: mel,
    source_code_link: "https://github.com/Uche-Onuh/Melaku",
    web_link: "https://bymelaku.com/",
  },
  {
    name: "Great Oak",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Html5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
    ],
    image: great,
    source_code_link: "https://github.com/Uche-Onuh/Great-Oak",
    web_link: "https://greatoak.com.ng/",
  },
];

export { services, technologies, experiences, testimonials, projects };
