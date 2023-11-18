import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="RewindMusic APP Frontend"
          des="This is a CRUD (Create, Read, Update, Delete) functionality for efficiently managing and organizing a diverse collection of songs. This application empowers registered users to interact with their music library, granting them the ability to explore, personalize, and maintain their songs effortlessly"
          src={projectOne}
          githubLink="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-front"
          websiteLink="https://amrtinz-final-project-2022-bcn.netlify.app/"
          /*           technologies={["SiReact", "SiTypescript"]} */
        />
        <ProjectsCard
          title="RewindMusic Backend"
          des="This API provides endpoints for user registration, authentication, and managing a collection of songs. It allows you to perform operations like creating, reading, updating, and deleting songs. Below are the details of the available endpoints and the associated HTTP status codes."
          src={projectTwo}
          githubLink="https://github.com/AndreaBitmind/andrea-martinez-rewindmusic-back"
          websiteLink="https://amrtinz-final-project-2022-bcn.netlify.app/"
        />
        <ProjectsCard
          title="Mobile eCommerce"
          des="This is a mobile eCommerce application developed using React. The app allows you to explore a wide range of mobile phones, view product details, select options such as color and storage capacity and add products to your shopping cart."
          src={projectThree}
          githubLink="https://github.com/AndreaBitmind/ecommerce-pro-am"
          websiteLink="https://ecommerce-pro-am.netlify.app/"
        />
        <ProjectsCard
          title="Responsive Example"
          des="This project is a web application for managing and displaying images. It allows users to view a list of images and see specific details of each selected image."
          src={projectFour}
          githubLink="https://github.com/AndreaBitmind/responsive-example"
          websiteLink="http://responsive-example-am.netlify.app/"
        />
        <ProjectsCard
          title="Pin Pad Sonar"
          des="This project showcases a PIN pad interface that allows users to input a PIN combination and receive feedback on its accuracy."
          src={projectFive}
          githubLink="https://github.com/AndreaBitmind/pinpad_sonar"
          websiteLink="https://andreamartinez-pinpad-sonar.netlify.app/"
        />
        <ProjectsCard
          title="Tic-Tac-Toe Game"
          des="This is a classic two-player strategy game where the goal is to get three of your symbols in a row, column, or diagonal. The game provides an interactive 3x3 grid for players to make their moves."
          src={projectSix}
          githubLink="https://github.com/AndreaBitmind/tic-tac-toe"
          websiteLink="https://tic-tac-toe-am.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
