import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProjectType = {
  id: number;
  project_name: string;
  description: string;
  image: string;
  technologies: string[];
  live_link: string;
  github_link?: string;
};

// Correctly define props type
type ProjectCardProps = {
  project: ProjectType;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { project_name, description, image, technologies, live_link } = project;

  return (
    <div className=" p-6 bg-white">
      <Image
        height={60}
        width={60}
        src={image}
        alt={project_name}
        className=" object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{project_name}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2">
        <p className="text-sm font-semibold">Technologies:</p>
        <ul className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-gray-200 px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3">
        <Link
          href={live_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
