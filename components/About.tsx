import Image from 'next/image';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/tabs'

import {User2, HomeIcon, MailIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide/react';

const infoData = [
    {
        icon: <User2 size={30} />,
        text: 'David Lau',
    },
      {
        icon: <PhoneCall size={30} />,
        text: 'David Lau',
    },
      {
        icon: <User2 size={30} />,
        text: 'David Lau',
    },
      {
        icon: <User2 size={30} />,
        text: 'David Lau',
    },
      {
        icon: <User2 size={30} />,
        text: 'David Lau',
    },
      {
        icon: <User2 size={30} />,
        text: 'David Lau',
    },
]

const About = () => {
  return (
    <div>About</div>
  )
}

export default About