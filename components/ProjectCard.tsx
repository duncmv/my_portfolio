import React from "react";
interface project {
  name: string;
  describe: string;
  link: string;
  demo: string;
  image: string;
}

interface ProjectCardProps {
  project: project;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className=" mx-4 responsive card card-compact bg-inherit border-base-700 w-auto h-auto shadow-xl">
      <figure className="w-full h-48 flex items-center justify-center bg-white">
        <img
          src={project.image}
          alt={project.name}
          className="max-h-full max-w-full "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-gray-800">{project.name}</h2>
        <p className="text-gray-600">{project.describe}</p>
        <div className="card-actions justify-end space-x-4">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <button className="btn btn-outline ">Demo</button>
            </a>
          )}
          <a href={project.link} target="_blank" rel="noreferrer">
            <button className="btn btn-outline ">Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
