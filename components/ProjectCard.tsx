import Link from 'next/link';
import Image from 'next/image';
import {Card, CardHeader} from './ui/card';
import { Github, Link2 } from 'lucide-react';
import {Badge} from './ui/badge';
import { useState } from 'react';

const ProjectCard = ({project}) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
  return (
   
    <Card>
        <CardHeader>
            <Link href={project.link}>
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
            <div className=' absolute bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-1 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-200'>
                <Link2 />
            </div>
            </div>
            </Link>
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