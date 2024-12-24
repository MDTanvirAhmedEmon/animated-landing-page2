// components/Hero.tsx
'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const MouseParallax = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const translateX = useTransform(mouseX, [0, windowSize.width], [-80, 80]);
    const translateY = useTransform(mouseY, [0, windowSize.height], [-80, 80]);

    // Update window size on resize
    useEffect(() => {
        const updateWindowSize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);
        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    // Update mouse position
    const handleMouseMove = (e) => {
        // console.log(e.clientX, e.clientY)
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <>
            <div
                onMouseMove={handleMouseMove}
                className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
            >
                <motion.div
                    // style={{
                    //     translateX,
                    //     translateY,
                    // }}
                    className="w-[300px] h-[300px] bg-white flex items-center justify-center rounded-full shadow-lg"

                >
                    <motion.div
                        style={{
                            translateX,
                            translateY,
                        }}
                        className=' h-16 w-16 bg-black rounded-full'></motion.div>
                </motion.div>

                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold">Hero Section</h1>
                    <p className="mt-4 text-lg">With Framer Motion Mouse Parallax Effect</p>
                </div>
            </div>
        </>
    );
};

export default MouseParallax;
