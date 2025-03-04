import React from 'react';
import { motion } from 'framer-motion';
import {
    FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaBuilding,
    FaFacebook, FaLinkedin, FaIdCard
} from 'react-icons/fa';

import bgImage from '../../assets/img/contact/contact_bg.jpg';

const ContactPage = () => {
    return (
        <div className="font-sans text-gray-800">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] flex justify-center items-center text-center text-white bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <h1 className="text-5xl font-bold text-shadow-lg relative z-10">Kontakt</h1>
            </motion.div>
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="w-full md:w-[500px] h-full"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2338.281045274!2d14.630281045274!3d53.40281045274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700a7bff69bb1df%3A0x50410307454fd2b1!2sTurkusowa%2015a%2C%2070-778%20Szczecin%2C%20Poland!5e0!3m2!1sen!2spl!4v1709058732123!5m2!1sen!2spl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-main-red">O firmie</h2>
                            <div className="flex items-center mb-4">
                                <FaBuilding className="mr-2 text-main-red" />
                                <p><span className="font-semibold">Nazwa firmy: </span> Robert Bogaczyk - Usługi budowlane</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaUser className="mr-2 text-main-red" />
                                <p><span className="font-semibold">Właściciel:</span> Robert Bogaczyk</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaIdCard className="mr-2 text-main-red" />
                                <p><span className="font-semibold">NIP:</span> 123-456-78-90</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-main-red">Dane kontaktowe</h2>
                            <div className="mb-4">
                                <div className="flex items-center mb-2">
                                    <FaMapMarkerAlt className="mr-2 text-main-red" />
                                    <p><span className="font-semibold">ADRES:</span> ul. Turkusowa 15a/9, 70-778 Szczecin</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <FaPhoneAlt className="mr-2 text-main-red" />
                                    <p><span className="font-semibold">Tel.:</span> +48 511-394-565</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <FaEnvelope className="mr-2 text-main-red" />
                                    <p><span className="font-semibold">Email 1:</span> contact@rb-service.pl</p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <FaEnvelope className="mr-2 text-main-red" />
                                    <p><span className="font-semibold">Email 2:</span> biuro@rb-service.pl</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-main-red">Social media</h2>
                            <div className="flex items-center mb-2">
                                <FaFacebook className="mr-2 text-main-red" />
                                <a href="#" className="text-blue-600 hover:underline">Facebook</a>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaLinkedin className="mr-2 text-main-red" />
                                <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;