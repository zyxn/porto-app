"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
  Button,
} from "@nextui-org/react";
import { Project } from "@/app/types/project.d";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="snap-center">
      <Card className="min-w-[300px] max-w-[300px] h-[450px] transition-transform transform hover:scale-105 bg-[#0C0B0B]">
        <CardHeader className="flex flex-col items-start pb-0">
          <p className="font-bold text-lg">{project.title}</p>
          <p className="text-tiny text-default-500">Project #{project.id}</p>
        </CardHeader>

        <CardBody className="overflow-visible py-2">
          <Image
            isZoomed
            as="img"
            width="100%"
            height={200}
            alt={project.title}
            src={project.imageUrl}
            className="w-full object-cover rounded-lg"
          />
          <p className="text-sm mt-3 line-clamp-3">
            {project.shortDescription}
          </p>
        </CardBody>

        <CardFooter className="flex justify-end">
          <Button
            size="sm"
            onPress={() => onSelect(project)}
            className="cursor-pointer"
          >
            More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
