"use client"
import { useEffect, useRef } from "react";
import Lenis from 'lenis'
import bg from "../../assets/bg.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
    const ref = useRef(null);
    const textRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });


    const zoom = useTransform(scrollYProgress, [0, 1], ["100%", "180%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0]);
    return (
        <motion.div ref={ref} className=" h-[300vh] relative bg-black">

            <motion.div style={{
                opacity,
                backgroundImage: `URL(${bg.src})`,
                backgroundSize: zoom,
                backgroundPosition: "center",
            }} className="h-[100vh]  sticky top-0">

            </motion.div>
            <motion.div className=" h-[100vh] sticky top-10">
                <div className=" container mx-auto flex items-center justify-center h-[30vh] z-50">
                    <h1 className=" text-white text-[200px] font-bold ">Welcome</h1>
                </div>
                <div className=" container mx-auto flex items-center justify-center h-[30vh] z-50">
                    <h1 className=" text-white text-[200px] font-bold ">TO</h1>
                </div>
                <div className=" container mx-auto flex items-center justify-center h-[30vh] z-50">
                    <h1 className=" text-white text-[200px] font-bold ">PARIS</h1>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;