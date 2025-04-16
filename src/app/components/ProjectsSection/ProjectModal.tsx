"use client";

import { motion } from "framer-motion";
import { Project } from "@/app/types/project.d";
import { Button, Image } from "@nextui-org/react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-[#0C0B0B] dark:bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-2xl w-full relative mx-4"
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={300}
          className="rounded-lg object-cover mb-4"
        />
        <p className="mb-6">{project.longDescription}</p>
        <Button onClick={onClose}>Close</Button>
      </motion.div>
    </motion.div>
  );
}
