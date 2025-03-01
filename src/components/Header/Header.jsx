import { useState } from 'react';
import Subheader from './Subheader/Subheader';
import logo from '../../assets/img/logo_black_new.png';
import Navigation from './Navigation/Navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="header w-full flex flex-col shadow-md"
        >
            <div className="hidden md:block">
                <Subheader />
            </div>
            <div className="container mx-auto px-6 h-[100px] flex justify-between items-center">
                <motion.img
                    src={logo}
                    alt="RB - Robert Bogaczyk"
                    className="h-24 transition-transform duration-300 transform hover:scale-105"
                />
                <div className="hidden md:block">
                    <Navigation />
                </div>
                <button className="md:hidden text-2xl text-main-red" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-white py-4 px-6 z-50"
                >
                    <div className="flex justify-end mb-4">
                        <button className="text-2xl text-gray-600" onClick={closeMobileMenu}>
                            <FaTimes />
                        </button>
                    </div>
                    <Navigation closeMobileMenu={closeMobileMenu} />
                    <div className="mt-8 pt-4 border-t border-gray-200">
                        <ul className='flex flex-col gap-2 text-gray-800'>
                            <li className='flex items-center'>
                                <FaMapMarkerAlt className="mr-2" />
                                <a href="#adres" className="text-sm" onClick={closeMobileMenu}>ul. Turkusowa 20, Szczecin 71-111</a>
                            </li>
                            <li className='flex items-center'>
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:contact@rb-service.pl" className="text-sm" onClick={closeMobileMenu}>contact@rb-service.pl</a>
                            </li>
                            <li className='flex items-center'>
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:722-222-111" className="text-sm" onClick={closeMobileMenu}>722-222-111</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Header;