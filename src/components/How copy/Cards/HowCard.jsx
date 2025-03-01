import React from 'react';
import { motion } from 'framer-motion';

const HowCard = ({ id, title, descr }) => {
    return (
        <motion.div
            className="how-card p-6 bg-white rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105" // Dodano style
        >
            <p className='text-4xl font-bold mb-4 text-main-red'>{id} →</p> {/* Zmiana koloru */}
            <h4 className="how-title text-2xl font-semibold text-gray-800 mb-2">{title}</h4> {/* Zmiana kolorów */}
            <div className="underline bg-main-red w-1/4 h-1 my-6"></div>
            <p className='how-descr text-gray-700 leading-relaxed'>{descr}</p> {/* Zmiana kolorów i dodanie leading-relaxed */}
        </motion.div>
    );
};

export default HowCard;