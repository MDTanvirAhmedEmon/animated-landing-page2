import { motion } from "framer-motion"

const ZoopTextAnimation = () => {

    const text = "Developers";

    return (
        <div className=" h-[100vh] flex flex-col gap-10 items-center justify-center">

            {/* whole sentence */}
            <div>
                <motion.div initial="initial" whileHover="hovered" className=" flex items-center  py-4 h-16 overflow-hidden relative">
                    <motion.h1 variants={{
                        initial: { y: 0 },
                        hovered: { y: "100%" }
                    }} className=" text-7xl uppercase font-bold ">Hello Developers
                    </motion.h1>
                    <motion.h1 variants={{
                        initial: { y: "-100%" },
                        hovered: { y: 0 }
                    }} className=" text-7xl uppercase font-bold absolute ">Hello Developers
                    </motion.h1>

                </motion.div>
            </div>



            {/* One by One */}

            <div>
                <motion.div initial="initial" whileHover="hovered" className=" flex items-center  py-4 h-16 overflow-hidden relative">
                    <motion.h1 className=" text-7xl uppercase font-bold ">
                        {text.split('').map((l, i) => <motion.span
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "100%" }
                            }}
                            transition={{
                                delay: 0.1 * i
                            }}
                            className=" inline-block"
                            key={i}>{l}</motion.span>)}
                    </motion.h1>

                    <motion.h1 className=" text-7xl uppercase font-bold absolute ">
                        {text.split('').map((l, i) => <motion.span
                            variants={{
                                initial: { y: "-100%" },
                                hovered: { y: 0 }
                            }}
                            transition={{
                                delay: 0.1 * i
                            }}
                            className=" inline-block"
                            key={i}>{l}</motion.span>)}
                    </motion.h1>

                </motion.div>
            </div>



            {/* One by One Smooth */}
            <div>
                <motion.div initial="initial" whileHover="hovered" className=" flex items-center  py-4 h-16 overflow-hidden relative">
                    <motion.h1 className=" text-7xl uppercase font-bold ">
                        {text.split('').map((l, i) => <motion.span
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "100%" }
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                                delay: 0.07 * i
                            }}
                            className=" inline-block"
                            key={i}>{l}</motion.span>)}
                    </motion.h1>

                    <motion.h1 className=" text-7xl uppercase font-bold absolute ">
                        {text.split('').map((l, i) => <motion.span
                            variants={{
                                initial: { y: "-100%" },
                                hovered: { y: 0 }
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                                delay: 0.07 * i
                            }}
                            className=" inline-block"
                            key={i}>{l}</motion.span>)}
                    </motion.h1>

                </motion.div>
            </div>
        </div>
    );
};

export default ZoopTextAnimation;