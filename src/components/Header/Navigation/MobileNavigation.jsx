import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTimes, FaHome, FaChevronRight, FaEnvelopeOpenText, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const MobileNavigation = ({ closeMobileMenu }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white py-4 px-6 z-50 flex flex-col"
        >
            <div className="flex justify-end mb-4">
                <button className="text-3xl text-gray-600" onClick={closeMobileMenu}>
                    <FaTimes />
                </button>
            </div>
            <nav className="navigation">
                <ul className="flex flex-col list-none text-xl font-medium py-2">
                    <li className="mb-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-300 hover:text-red-600 ${
                                    isActive ? 'text-main-red' : 'text-gray-800'
                                }`
                            }
                            onClick={closeMobileMenu}
                        >
                            <FaHome className="mr-4" /> Strona Główna
                        </NavLink>
                    </li>
                    <li className="mb-6">
                        <NavLink
                            to="/offer"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-300 hover:text-red-600 ${
                                    isActive ? 'text-main-red' : 'text-gray-800'
                                }`
                            }
                            onClick={closeMobileMenu}
                        >
                            <FaChevronRight className="mr-4" /> Usługi
                        </NavLink>
                    </li>
                    <li className="mb-6">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-300 hover:text-red-600 ${
                                    isActive ? 'text-main-red' : 'text-gray-800'
                                }`
                            }
                            onClick={closeMobileMenu}
                        >
                            <FaChevronRight className="mr-4" /> Projekty
                        </NavLink>
                    </li>
                    <li className="mb-6">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-300 hover:text-red-600 ${
                                    isActive ? 'text-main-red' : 'text-gray-800'
                                }`
                            }
                            onClick={closeMobileMenu}
                        >
                            <FaChevronRight className="mr-4" /> O Firmie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `flex items-center transition-colors duration-300 hover:text-red-600 ${
                                    isActive ? 'text-main-red' : 'text-gray-800'
                                }`
                            }
                            onClick={closeMobileMenu}
                        >
                            <FaChevronRight className="mr-4" /> Kontakt
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto pt-4 border-t border-gray-200">
                <ul className='flex flex-col gap-2 text-gray-800'>
                    <li className='flex items-center'>
                        <FaPhoneAlt className="mr-2" />
                        <a href="tel:511394565" className="text-sm" onClick={closeMobileMenu}>+48 511-394-565</a>
                    </li>
                    <li className='flex items-center'>
                        <FaEnvelope className="mr-2" />
                        <a href="mailto:kontakt@robertbogaczyk.pl" className="text-sm" onClick={closeMobileMenu}>kontakt@robertbogaczyk.pl</a>
                    </li>
                    <li className='flex items-center'>
                        <FaMapMarkerAlt className="mr-2" />
                        <a href="#adres" className="text-sm" onClick={closeMobileMenu}>ul. Turkusowa 15a/9, 70-778 Szczecin</a>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default MobileNavigation;