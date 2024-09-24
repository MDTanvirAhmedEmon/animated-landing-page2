'use client';

import { motion } from 'framer-motion';



const About = () => {
    const pageVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };

    const pageTransition = {
        duration: 0.5,
        ease: 'easeInOut',
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
            className="h-[100vh] flex items-center justify-center">
            <h1 className=" text-7xl font-bold">This is about</h1>
        </motion.div>
    );
};

export default About;