import { useState, useEffect } from 'react';
import Subheader from './Subheader/Subheader';
import logo from '../../assets/img/logo_black_new.png';
import Navigation from './Navigation/Navigation';
import MobileNavigation from './Navigation/MobileNavigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [logoSize, setLogoSize] = useState('h-24');

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

    useEffect(() => {
        const checkScreenWidth = () => {
            const isDesktopView = window.innerWidth > 768;
            setIsDesktop(isDesktopView);
            setLogoSize(isDesktopView ? 'h-20' : 'h-20');
        };

        checkScreenWidth();

        const handleResize = () => {
            checkScreenWidth();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
                <Link to="/" className="flex items-center">
                    <motion.img
                        src={logo}
                        alt="RB - Robert Bogaczyk"
                        className={`${logoSize} transition-transform duration-300 transform hover:scale-105`}
                    />
                </Link>
                {isDesktop && (
                    <div className="hidden md:block">
                        <Navigation />
                    </div>
                )}
                {!isDesktop && (
                    <button className="md:hidden text-3xl text-main-red" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                )}
            </div>
            {!isDesktop && isMobileMenuOpen && (
                <MobileNavigation closeMobileMenu={closeMobileMenu} />
            )}
        </motion.div>
    );
};

export default Header;