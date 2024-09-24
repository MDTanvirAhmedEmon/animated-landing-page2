"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from 'lenis'

const Video = () => {

    // lenis for smooth scrolling
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])


    const videoRef = useRef(null); // Reference to the video element
    const containerRef = useRef(null); // Reference to the scroll container
    const { scrollYProgress } = useScroll({
        target: containerRef, // Target the container
        offset: ["start start", "end end"], // Track when the container starts and ends scrolling
    });

    useEffect(() => {
        const videoElement = videoRef.current;
        console.log(videoElement.readyState)

        const handleScroll = () => {
            if (videoElement && videoElement.readyState === 4) {
                const videoDuration = videoElement.duration;
                console.log('video time', videoDuration)

                // Set the video time based on scroll progress (0 to 1, mapped to video duration)
                videoElement.currentTime = scrollYProgress.get() * videoDuration;
            }
        };
        // Use .on("change") instead of .onChange to subscribe to the value change
        const unsubscribe = scrollYProgress.on("change", handleScroll);

        // Cleanup the subscription to avoid memory leaks
        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <div>
            <div className="h-[300vh] relative" ref={containerRef}>
                {/* Background video element */}
                <motion.video
                    ref={videoRef}
                    muted
                    playsInline
                    className="h-[100vh] w-full object-cover sticky top-0  shadow-lg"
                >
                    {/* don't import direactly from public folder just give here the file name */}
                    <source src="/bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
                <h1 className=" text-white text-8xl font-bold text-center sticky top-[40%]">Hello</h1>
            </div>
            <div className=" mb-[1000px]">
                dfgsdfgdfsgdfsgfdsgdfg
            </div>
        </div>

    );
};

export default Video;
