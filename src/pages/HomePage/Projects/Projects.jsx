import React, { useState, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../../../assets/img/projects/1.jpg";
import img2 from "../../../assets/img/projects/2.jpg";
import img3 from "../../../assets/img/projects/3.jpg";
import img4 from "../../../assets/img/projects/4.jpg";
import img5 from "../../../assets/img/projects/5.jpg";
import img6 from "../../../assets/img/projects/6.jpg";
import img7 from "../../../assets/img/projects/7.jpg";
import img8 from "../../../assets/img/projects/8.jpg";
import img9 from "../../../assets/img/projects/9.jpg";
import img10 from "../../../assets/img/projects/10.jpg";
import img11 from "../../../assets/img/projects/11.jpg";
import img12 from "../../../assets/img/projects/12.jpg";
import img13 from "../../../assets/img/projects/13.jpg";
import img14 from "../../../assets/img/projects/14.jpg";
import img15 from "../../../assets/img/projects/15.jpg";
import img16 from "../../../assets/img/projects/16.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const itemsPerPage = useMemo(() => {
        return windowWidth < 640 ? 1 : 5;
    }, [windowWidth]);

    const nextSlide = useCallback(() => setIndex((prev) => (prev + 1) % images.length), []);
    const prevSlide = useCallback(() => setIndex((prev) => (prev - 1 + images.length) % images.length), []);

    const nextImage = useCallback(() => {
        const currentIndex = images.indexOf(selectedImage);
        setSelectedImage(images[(currentIndex + 1) % images.length]);
    }, [selectedImage]);

    const prevImage = useCallback(() => {
        const currentIndex = images.indexOf(selectedImage);
        setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
    }, [selectedImage]);

    const currentSlideImages = useMemo(() => {
        const result = [];
        for (let i = 0; i < itemsPerPage; i++) {
            result.push(images[(index + i) % images.length]);
        }
        return result;
    }, [index, itemsPerPage]);

    const handleKeyDown = useCallback((event) => {
        if (selectedImage) {
            if (event.key === "ArrowLeft") {
                prevImage();
            } else if (event.key === "ArrowRight") {
                nextImage();
            } else if (event.key === "Escape") {
                setSelectedImage(null);
            }
        }
    }, [selectedImage, nextImage, prevImage]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className="projects py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="title text-4xl text-center font-semibold text-gray-800 mb-6"
                >
                    Moje Projekty
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "15%" }}
                    transition={{ duration: 1.2 }}
                    className="underline bg-main-red h-1 mb-16 mx-auto"
                ></motion.div>

                <div className="relative w-full mx-auto">
                    <button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 active:bg-gray-200 transition-colors duration-300 z-[999]"
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft className="text-gray-700 text-2xl" />
                    </button>
                    <div className="overflow-hidden">
                        <div className={`flex flex-row justify-between gap-4 ${windowWidth < 640 ? 'w-full' : ''}`}>
                            {currentSlideImages.map((img, i) => (
                                <motion.div
                                    key={i}
                                    className={`cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 ${windowWidth < 640 ? 'w-full' : 'w-1/5'}`}
                                    onClick={() => setSelectedImage(img)}
                                    initial={{ opacity: 0, x: i * 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: i * 20 }}
                                    transition={{ ease: "easeInOut", duration: 0.3 }}
                                >
                                    <img src={img} alt={`Project ${i + 1}`} className="w-full h-64 object-cover" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 active:bg-gray-200 transition-colors duration-300"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        <FaChevronRight className="text-gray-700 text-2xl" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[9999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative z-50">
                            <motion.img
                                src={selectedImage}
                                className="max-w-3xl max-h-[80vh] rounded-lg shadow-xl"
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.5 }}
                                transition={{ ease: "easeInOut", duration: 0.4 }}
                            />
                            <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedImage(null)}>
                                X
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;