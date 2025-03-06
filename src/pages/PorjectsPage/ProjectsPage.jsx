import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';

import bgImage from '../../assets/img/bg/bg_2.jpeg';
import img1 from '../../assets/img/projects/1.jpg';
import img2 from '../../assets/img/projects/2.jpg';
import img3 from '../../assets/img/projects/3.jpg';
import img4 from '../../assets/img/projects/4.jpg';
import img5 from '../../assets/img/projects/5.jpg';
import img6 from '../../assets/img/projects/6.jpg';
import img7 from '../../assets/img/projects/7.jpg';
import img8 from '../../assets/img/projects/8.jpg';
import img9 from '../../assets/img/projects/9.jpg';
import img10 from '../../assets/img/projects/10.jpg';
import img11 from '../../assets/img/projects/11.jpg';
import img12 from '../../assets/img/projects/12.jpg';
import img13 from '../../assets/img/projects/13.jpg';
import img14 from '../../assets/img/projects/14.jpg';
import img15 from '../../assets/img/projects/15.jpg';
import img16 from '../../assets/img/projects/16.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const ProjectsPage = () => {
    const [visibleImages, setVisibleImages] = useState(8);
    const [selectedImage, setSelectedImage] = useState(null);

    const loadMoreImages = () => {
        setVisibleImages((prev) => prev + 8);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="font-sans text-gray-800">
            <Helmet>
                <title>Projekty | Realizacje Wykończeń Wnętrz - Robert Bogaczyk</title>
                <meta name="description" content="Zobacz nasze realizacje wykończeń wnętrz. Galeria projektów Roberta Bogaczyka. Profesjonalne remonty i aranżacje wnętrz." />
                <meta name="keywords" content="projekty, realizacje, wykończenia wnętrz, remonty, aranżacje, Robert Bogaczyk, galeria, zdjęcia" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] flex flex-col justify-center items-center text-center text-white bg-cover bg-no-repeat bg-center md:bg-[center_-10rem]"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold text-shadow-lg relative z-10"
                >
                    Projekty
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl relative z-10 mt-4"
                >
                    Zobacz realizacje, które mówią same za siebie
                </motion.p>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '20%' }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-1 bg-main-red rounded-full mt-6 relative z-10"
                ></motion.div>
            </motion.div>
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {images.slice(0, visibleImages).map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative cursor-pointer"
                            onClick={() => handleImageClick(image)}
                        >
                            <img
                                src={image}
                                alt={`Project ${index + 1}`}
                                className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
                {visibleImages < images.length && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-main-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 mx-auto block"
                        onClick={loadMoreImages}
                    >
                        Pokaż więcej
                    </motion.button>
                )}
            </div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
                        onClick={handleCloseModal}
                    >
                        <div className="relative">
                            <motion.img
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                src={selectedImage}
                                alt="Project Preview"
                                className="max-w-full max-h-full rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                                loading="lazy"
                            />
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 text-white text-3xl"
                            >
                                &times;
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsPage;