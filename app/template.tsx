// 'use client'
// import useScrollProgress from "@/hooks/useScrollProgress";
// import {motion} from 'framer-motion';

// const variants = {
//     hidden: { opacity: 0},
//     enter: {opacity: 1},
// }

// const Template = ({children }) => {
//   const completion = useScrollProgress();
//   return (
   
//         <motion.main 
//         variants={variants}
//         initial='hidden'
//         animate='enter'
//         transition={{type: 'linear', delay: 0.2, duration: 0.4 }}
//         >
//             {children}
//         </motion.main>
    
   

//     ) 
    
// }

// export default Template;
'use client'
import React from 'react'; // Import React from 'react'
import { motion } from 'framer-motion';
import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
}

interface TemplateProps {
  children: React.ReactNode; // Define the type of children prop explicitly
}

const Template: React.FC<TemplateProps> = ({ children }) => { // Use React.FC to define the component type
  const completion = useScrollProgress();
  
  return (
    <motion.main
      variants={variants}
      initial='hidden'
      animate='enter'
      transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
    >
      {children}
    </motion.main>
  );
}

export default Template;