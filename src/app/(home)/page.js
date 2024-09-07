"use client"
import { useEffect } from "react";
import Lenis from 'lenis'
import Hero from "@/components/Home/Hero";
import HorizontalScroll from "@/components/Home/HorizontalScroll";
import Text from "@/components/Home/Text";
import ZoomText from "@/components/Home/ZoomText";
import ClipPath from "@/components/Home/ClipPath";
import TextAnimation from "@/components/Home/TextAnimation";


const Home = () => {

    // lenis for smooth scrolling
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div>
            <Hero></Hero>
            <Text></Text>
            <ZoomText></ZoomText>
            <ClipPath></ClipPath>
            <HorizontalScroll></HorizontalScroll>
            <TextAnimation></TextAnimation>
        </div>
    );
};

export default Home;