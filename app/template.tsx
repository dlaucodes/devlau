'use client'
import useScrollProgress from "@/hooks/useScrollProgress";
import {motion} from 'framer-motion';

const variants = {
    hidden: { opacity: 0},
    enter: {opacity: 1},
}

const Template = ({children, ...props}) => {
  const completion = useScrollProgress();
  return (
   
        <motion.main
        {...props} 
        variants={variants}
        initial='hidden'
        animate='enter'
        transition={{type: 'linear', delay: 0.2, duration: 0.4 }}
        >
            {children}
        </motion.main>
    
   

    ) 
    
}

export default Template;