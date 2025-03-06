import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";
import ProjectCard from "./ProjectCard";
import getAllProjects from "@/lib/getAllProjects";

const Projects = () => {
  const AllProjects = getAllProjects();
  return (
    <div>
      <SectionHeading heading="Recent Projects" />
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {AllProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
