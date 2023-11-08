import { SiProgress } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <SiProgress />,
    title: "Frontend Development",
    des: "My projects stand out with a modern tech stack featuring React, JavaScript, Typescript, HTML5, CSS3, Styled-Components, and testing using Jest and React Testing Library. I'm passionate about crafting efficient and stylish web solutions.",
  },
  {
    id: 2,
    icon: <CgWebsite />,
    title: "Backend Development",
    des: "I'm building my expertise in backend application development, with a foundation in NodeJS, ExpressJS, MongoDB, Mongoose, and initial experience in implementing JWT authentication within a Restful API. Ready to grow and excel.",
  },
  /*   {
    id: 3,
    icon: <AiFillAppstore />,
    title: "App Development",
    des: "Will learn this soon in near future !",
  }, */
  {
    id: 4,
    title: "Project Management",
    des: "As a project manager, I've directed a variety of digital health projects, employing Agile methodology to optimize planning and execution, resulting in improved software solutions.",
  },
];

// Experience Data

export const experienceData = () => {
  const softwareDeveloperDes = `Created web components and applications with React and TypeScript for Sónar Festival.
Designed components and pages using the Stitches CSS framework.
Performed unit testing with Jest and React Testing Library.
Managed CRM user accounts and addressing customer registration.
Collaborated within an Agile multidisciplinary team.`;

  const projectManagerDes = `Collaborated with software developers, healthcare providers, and stakeholders to define project requirements and deliverables.
Coordinated project activities, including software development, testing, user training, and system integration.
Successfully launched healthcare technology solutions using Agile methodology, addressing technical challenges and improving patient care delivery.
Planning, organization and execution of the different calls for proposals`;

  const programManagerDes = `Planned and coordinated multiple biotechnology projects, ensuring alignment with research objectives and regulatory requirements.
Led cross-functional teams of scientists, researchers, and stakeholders, promoting effective communication and collaboration.
Website and social media management
Comercial database development`;

  const researchProjectManagerDes = `Identifying and evaluating R&D projects, collaborating with teams todefine specs, timelines, and resources for development. Managing timelines, resources, and project progress with project management.`;

  return {
    softwareDeveloperDes,
    projectManagerDes,
    programManagerDes,
    researchProjectManagerDes,
  };
};
