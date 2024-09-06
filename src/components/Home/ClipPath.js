"use client"
import { useRef } from "react";
import bg from "../../assets/eiffel-tower.jpg"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"

const ClipPath = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const path = useTransform(scrollYProgress, [0.2, 0.7], ["8%", "100%"]);
    const myPath = useMotionTemplate`polygon(0 0, ${path} 0, ${path} 100%, 0% 100%)`


    return (


        <motion.div ref={ref} className=" relative h-[250vh]">
            <motion.div
                className=" sticky top-0"
                // initial={{ clipPath: "polygon(0 0, 100% 0, 15% 15%, 0% 100%)" }}
                // animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                transition={{ duration: 1 }}
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: "center",
                    height: "100vh",
                    clipPath: myPath,
                }}>
            </motion.div>
        </motion.div>

    );
};

export default ClipPath;