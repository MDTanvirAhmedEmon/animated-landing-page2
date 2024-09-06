"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

const HorizontalScroll = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);


    return (
        <motion.div ref={ref} className=" h-[300vh] bg-black relative">
            <motion.div className=" h-[100vh] bg-black sticky top-0 overflow-hidden">


                <motion.div style={{ x }} className="h-full flex items-center gap-8 p-4 w-auto ">
                    <div className="w-[500px] px-8 rounded-md bg-[#00ccd393] py-20 flex-shrink-0 ">
                        <div>
                            <h2 className="text-5xl font-bold text-white">Item Name</h2>
                            <p className="text-gray-200 mt-6 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-bold mr-4 text-white">$29.99</span>
                            <button className="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                    <div className="w-[500px] px-8 rounded-md bg-[#00ccd393] py-20 flex-shrink-0">
                        <div>
                            <h2 className="text-5xl font-bold text-white">Item Name</h2>
                            <p className="text-gray-200 mt-6 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-bold mr-4 text-white">$29.99</span>
                            <button className="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                    <div className="w-[500px] px-8 rounded-md bg-[#00ccd393] py-20 flex-shrink-0">
                        <div>
                            <h2 className="text-5xl font-bold text-white">Item Name</h2>
                            <p className="text-gray-200 mt-6 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-bold mr-4 text-white">$29.99</span>
                            <button className="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                    <div className="w-[500px] px-8 rounded-md bg-[#00ccd393] py-20 flex-shrink-0">
                        <div>
                            <h2 className="text-5xl font-bold text-white">Item Name</h2>
                            <p className="text-gray-200 mt-6 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-bold mr-4 text-white">$29.99</span>
                            <button className="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                    <div className="w-[500px] px-8 rounded-md bg-[#00ccd393] py-20 flex-shrink-0">
                        <div>
                            <h2 className="text-5xl font-bold text-white">Item Name</h2>
                            <p className="text-gray-200 mt-6 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-bold mr-4 text-white">$29.99</span>
                            <button className="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                    <div className="w-[500px] px-8 rounded-md bg-[#00ccd393] py-20 flex-shrink-0">
                        <div>
                            <h2 className="text-5xl font-bold text-white">Item Name</h2>
                            <p className="text-gray-200 mt-6 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-lg font-bold mr-4 text-white">$29.99</span>
                            <button className="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>



                </motion.div>


            </motion.div>

        </motion.div>
    );
};

export default HorizontalScroll;