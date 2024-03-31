import Link from 'next/link';
import Image from 'next/image';
import {Card, CardHeader} from './ui/card';
import {Github, Link2Icon} from 'lucide/react';
import {Badge} from './ui/badge';
import { useState } from 'react';

const ProjectCard = ({project}) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
  return (
   
    <Card>
        <CardHeader>
            <div className='relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                    {isHovering ? (
          <Image
          src={project.hoverimg} 
          className='bottom-0 shadow-2xl'
          width={250}
          height={250}
          alt=''
          priority
          />
        ) : (
            <Image
            src={project.defaultimg} 
            className='bottom-0 shadow-2xl'
            width={250}
            height={250}
            alt=''
            priority
            />
        )}
            </div>
        </CardHeader>
        <div className='h-[150px] px-6 py-6'>
            <h4 className='h4 mb-1'>
                {project.name}
            </h4>
            <p className='text-muted-foreground text-lg'>
                {project.description}
            </p>
        </div>
    </Card>
  )
};

export default ProjectCard