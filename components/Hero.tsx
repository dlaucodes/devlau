import Link from 'next/link';
import {Button} from './ui/button';
import {Download, Send} from 'lucide-react'
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine} from 'react-icons/ri';
import DevImg from './DevImg';
import Badge from './Badge';
import Social from './Social';



const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                <div>
                   <div>
                       Hello World
                   </div>
                   <h1>
                        I am David Lau
                   </h1>
                   <p>
                       Software Engineer based in New York City
                   </p>
                </div>
                <div>
                    image
                </div>
            </div>
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>

        </div>
    </section>
  )
}

export default Hero