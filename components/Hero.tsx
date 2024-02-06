import Link from 'next/link';
import {Button} from './ui/button';
import {Download, Send} from 'lucide-react'
import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine} from 'react-icons/ri';
import DevImg from './DevImg';
import Badge from './Badge';
import Social from './Social';



const Hero = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div>
                <div>
                    text
                </div>
                <div>
                    image
                </div>
            </div>
            <div className='hidden md:flex'>
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>

        </div>
    </section>
  )
}

export default Hero