'use client'

import {RiLinkedinFill, RiGithubFill, RiAngelistFill} from 'react-icons/ri'
import Link from 'next/link'

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
    name: <RiAngelistFill />,
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