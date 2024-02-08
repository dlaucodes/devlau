'use client'

import {RiLinkedinFill, RiGithubFill} from 'react-icons/ri';
import { SiWellfound} from 'react-icons/si';
import Link from 'next/link';

const icons = [
    {
    path: '/',
    name: <RiLinkedinFill />,
},
{
    path: '/',
    name: <RiGithubFill />,
},
{
    path: '/',
    name: <SiWellfound />,
},
];

const Social = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index)=>{
            return(
                <Link href={icon.path} key={index}>
                    <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Social