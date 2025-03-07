import React from 'react';
import { motion } from 'framer-motion';
import img from '../../../assets/img/bg/bg_call.jpg';

const CallToAction = () => {
    return (
        <div className="cta relative py-16 mt-20 text-white text-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={img}
                    alt="Background"
                    className="w-full h-full object-cover bg-centerrf"
                />
                <div className="absolute inset-0 bg-main-blue opacity-80"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-semibold mb-6"
                >
                    Gotowy na remont marzeń?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg mb-8"
                >
                    Skontaktuj się z nami już dziś i umów się na bezpłatną konsultację.
                </motion.p>
                <motion.a
                    href="#kontakt"
                    className="bg-white text-main-red py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.location.href = 'tel:+48511394565'}
                >
                    Skontaktuj się
                </motion.a>
            </div>
        </div>
    );
};

export default CallToAction;