import React from 'react'
import {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(()=>{
        const updateScrollCompletion = () =>{
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                const progressPercentage = Number((currentProgress / scrollHeight) * 100).toFixed(2);
                setCompletion(parseFloat(progressPercentage));
            }
        };

        window.addEventListener('scroll', updateScrollCompletion);

        return () => window.removeEventListener('scroll', updateScrollCompletion)
    }, []);


    return completion;
}

export default useScrollProgress