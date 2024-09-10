import { motion } from "framer-motion"



const TextAnimation = () => {

    const parentVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const paragraphVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.007,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    const name = 'Tanvir Ahmed Emon'
    const about = 'Hi! My name is Tanvir Ahmed Emon a passionate and lifelong learner web developer with strength in MERN stack and related technology such as Redux-Toolkit, Next Js, Typescript, and Mongoose. I am eager to contribute my skills to dynamic web projects and learn from industry experts. I want to improve my web development skills and stay updated with industry trends. My long-term goal is to become a proficient full-stack web developer'


    return (
        <div className=" h-[100vh] flex justify-center items-center">
            <motion.div className=" w-[60vw]">
                <motion.h1
                    variants={parentVariants}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    className=" text-7xl mb-10">
                    {
                        name.split('').map((l, i) => <motion.span variants={childVariants} key={i}>{l}</motion.span>)
                    }
                </motion.h1>
                <motion.p
                    variants={paragraphVariants}
                    initial="hidden"
                    // animate="show"
                    whileInView="show"
                    className=" text-lg">                    {
                        about.split('').map((l, i) => <motion.span variants={childVariants} key={i}>{l}</motion.span>)
                    }</motion.p>
                    
            </motion.div>
        </div>
    );
};

export default TextAnimation;