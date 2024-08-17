"use client"
import { useEffect, useRef } from "react";
import Lenis from 'lenis'
import bg from "../../assets/bg.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

const Text = () => {

    const ref = useRef(null);
    const textRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });



    return (
        <motion.div ref={ref} className=" h-[300vh]  bg-black relative">
            <div className=" h-[50vh] sticky top-52 ml-[20%] ">
                <h1 className=" text-[80px] text-white font-bold" >
                    Why
                </h1>
                <h1 className=" text-[80px] text-white font-bold">
                    smooth
                </h1>
                <h1 className=" text-[80px] text-white font-bold">
                    scroll?
                </h1>
            </div>

            <div className=" h-[50vh] ml-[40%] w-[700px]">
                <p className=" text-white text-4xl">We’ve heard all the reasons to not use smooth scroll. It feels hacky. It’s inaccessible. It’s not performant. It’s over-engineered. And historically, those were all true. But we like to imagine things as they could be, then build them. So, why should you use smooth scroll?</p>
            </div>
            <div className=" h-[50vh] ml-[40%] w-[700px]">
                <p className=" text-white text-4xl">We’ve heard all the reasons to not use smooth scroll. It feels hacky. It’s inaccessible. It’s not performant. It’s over-engineered. And historically, those were all true. But we like to imagine things as they could be, then build them. So, why should you use smooth scroll?</p>
            </div>
            <div className=" h-[50vh] ml-[40%] w-[700px]">
                <p className=" text-white text-4xl">We’ve heard all the reasons to not use smooth scroll. It feels hacky. It’s inaccessible. It’s not performant. It’s over-engineered. And historically, those were all true. But we like to imagine things as they could be, then build them. So, why should you use smooth scroll?</p>
            </div>

        </motion.div>
    );
};

export default Text;