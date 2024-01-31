'use client'
import useScrollProgress from "@/hooks/useScrollProgress";
import {motion} from 'framer-motion';

const Template = ({children}) => {
  const completion = useScrollProgress();
  return <>
    <motion.main>
        {children}
    </motion.main>
  </>
}

export default Template;