import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Link2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { RiGithubFill } from "react-icons/ri";

const ProjectCard = ({ project }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Card>
      <CardHeader>
          <div
            className="relative w-full h-[200px] flex items-center justify-center flex-row bg-tertiary dark:bg-secondary/40"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
        <Link href={project.link}>
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
      <div className="h-[150px] px-6 py-6">
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
