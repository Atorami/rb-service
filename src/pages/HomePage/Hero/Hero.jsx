import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import videoBg from "../../../assets/img/bg/video-bg.mp4";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
            videoRef.current.play().catch(error => {
                console.error("Error playing video:", error);
            });
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="hero relative w-full h-screen overflow-hidden"
        >
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={videoBg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-black to-gray-800"
            ></motion.div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-white text-4xl md:text-6xl font-bold mb-5 px-2 leading-tight"
                >
                    Profesjonalne Remonty z Pasją i Precyzją
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "20%" }}
                    transition={{ duration: 2, delay: 0.8 }}
                    className="underline bg-main-red h-1 mb-8"
                ></motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="text-gray-300 text-lg max-w-2xl leading-relaxed px-2"
                >
                    Kompleksowe usługi remontowe, od projektowania po wykończenie. <br/> Doświadczenie i zaangażowanie gwarantują najwyższą jakość i satysfakcję.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="mt-10 bg-main-red text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                    onClick={() => window.location.href = 'tel:+48511394565'}
                >
                    Skontaktuj się
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Hero;