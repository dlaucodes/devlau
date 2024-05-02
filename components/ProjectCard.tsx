import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { RiGithubFill } from "react-icons/ri";

interface Project {
    name: string;
    description: string;
    link: string;
    hoverimg: string;
    defaultimg: string;
    github: string;
    technologies: string[];
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Card className='h-[500px]'>
      <CardHeader>
          <div
            className="relative w-full h-[200px] flex items-center justify-center flex-row bg-tertiary dark:bg-secondary/40"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
        <Link href={project.link}
            target='_blank'>
            {isHovering ? (
              <Image
                src={project.hoverimg}
                className="bottom-0 shadow-2xl"
                width={250}
                height={250}
                alt=""
                priority
              />
            ) : (
              <Image
                src={project.defaultimg}
                className="bottom-0 shadow-2xl"
                width={250}
                height={250}
                alt=""
                priority
              />
            )}
        </Link>
            <div className='px-4 grid gap-y-4'>
                <Link href={project.link}>
                    <Link2  className="h-[30px] w-[30px] hover:text-primary"/>

                </Link>
                <Link href={project.github}>

                    <RiGithubFill className="h-[30px] w-[30px] hover:text-primary" />
                </Link>

            </div>
            
            
          </div>
      </CardHeader>
      <div className="min-h-[200px] px-6">
        <h4 className="h4 mb-1">{project.name}</h4>
        <div className='flex flex-row flex-wrap gap-2 mb-4'>
        {project.technologies.map((tech, index) => {
              return (
                <div key={index}>
                    <Badge>
                    {tech}

                    </Badge>
                </div>
              );
            })} 
        </div>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
