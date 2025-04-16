"use client";

import { useState } from "react";
import { projects } from "@/app/constant/project";
import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project } from "@/app/types/project.d";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center"
      id="projects"
    >
      <div className="bg-[url('/img/bg1.jpg')] bg-cover bg-center opacity-25 absolute inset-0 z-0 bg-fixed" />

      <div className="relative z-10 w-full overflow-x-auto">
        <div className="flex snap-x snap-mandatory space-x-6 px-10 py-10 w-max">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setActiveProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
