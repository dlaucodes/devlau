import Link from 'next/link';
import Image from 'next/image';
import {Card, CardHeader} from './ui/card';
import {Github, Link2Icon} from 'lucide/react';
import {Badge} from './ui/badge';

const ProjectCard = ({project}) => {
  return (
   
    <Card>
        <CardHeader>
            <div className='relative w-full h-[200px] flex items-center justify-center bg-tertiary dark:bg-secondary/40'>
                <Image
                src={project.image} 
                className='bottom-0 shadow-2xl'
                width={250}
                height={250}
                alt=''
                priority
                />

            </div>
        </CardHeader>
        <div className='h-[150px] px-6 py-6'>
            <h4 className='h4 mb-1'>
                {project.name}
            </h4>
            {/* <div className="grid grid-cols-5 gap-x-1 text-center">
                {project.category.map((category, index)=>
                    <span key={index} className='col-span'>
                        {category}
                    </span>
                )}
               

            </div> */}
            <p className='text-muted-foreground text-lg'>
                {project.description}
            </p>
        </div>
    </Card>
  
  )
};

export default ProjectCard