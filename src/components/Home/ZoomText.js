"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ZoomText = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const zoom = useTransform(scrollYProgress, [0, 1], ["0px", "250px"]);
    const beforeText = useTransform(scrollYProgress, [0, 1], ["100px", "130px"]);
    const opsition = useTransform(scrollYProgress, [0, 0.3, 1], ["16px", "16px", "-400px"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <div ref={ref} className="h-[300vh] w-full ">
            <div className="h-[100vh] bg-[#1dc0cc] sticky top-0 w-full overflow-hidden">
                <div className="h-full w-full relative">
                    <motion.div style={{ fontSize: beforeText, top: opsition, left: opsition }} className="absolute  font-bold uppercase">
                        <h1>largest city</h1>
                        <h1>of France</h1>
                    </motion.div>

                    <motion.div style={{ fontSize: zoom, opacity }} className="w-full h-full flex justify-center items-center text-white font-bold uppercase">
                        <h1>In France</h1>
                    </motion.div>

                    <motion.div style={{ fontSize: beforeText, bottom: opsition, right: opsition }} className="absolute font-bold uppercase">
                        <h1>located along</h1>
                        <h1>the Seine River</h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ZoomText;
