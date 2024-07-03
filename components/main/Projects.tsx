import React from "react";
import ProjectCards from "../sub/ProjectCards";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
        <ProjectCards
          src="/yelp-camp.png"
          title="Yelp Camp"
          description="This project is a full-stack web application where users can view, create, and review campgrounds."
          githubLink="https://github.com/AtHaRaVs/yelpCamp"
        />
        <ProjectCards
          src="/investmentCalc.png"
          title="Investment Calculator"
          description="The application offers a range of basic to advanced features to enhance task management efficiency by at least 35%."
          githubLink="https://github.com/AtHaRaVs/react--learn/tree/main/investmentCalc"
        />
        <ProjectCards
          src="/todo.png"
          title="Todo App"
          description="A simple and effective todo app to manage your daily tasks with ease. Very user friendly"
          githubLink="https://github.com/AtHaRaVs/newTodo"
        />
      </div>
    </div>
  );
};

export default Projects;
