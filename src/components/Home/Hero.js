"use client"
import { useRef } from "react";
import bg from "../../assets/bg.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });


    const zoom = useTransform(scrollYProgress, [0, 1], ["100%", "180%"]);
    const welcomeZoom = useTransform(scrollYProgress, [0, 0.3], ["200px", "100px"]);
    const welcomeOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0]);
    return (
        <motion.div ref={ref} className=" h-[250vh] relative bg-black">

            <motion.div style={{
                opacity,
                backgroundImage: `URL(${bg.src})`,
                backgroundSize: zoom,
                backgroundPosition: "center",
            }} className="h-[100vh]  sticky top-0">
                <div className=" container mx-auto flex items-center justify-center h-[100vh] z-50">
                    <motion.h1 style={{ fontSize: welcomeZoom, opacity:welcomeOpacity }} initial={{x:-200}} animate={{x:0}} transition={{duration: 1}} className=" text-white uppercase font-bold ">Welcom</motion.h1> <motion.span style={{ fontSize: welcomeZoom, opacity:welcomeOpacity }} initial={{x:200}} animate={{x:0}} transition={{duration: 1.2}} className=" text-white uppercase font-bold ">e</motion.span>
                </div>
            </motion.div>
            <motion.div className=" h-[100vh]">

                <div className=" container mx-auto flex items-center justify-center h-[30vh] mt-28 z-50">
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