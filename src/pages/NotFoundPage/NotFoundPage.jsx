import React from 'react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl font-bold text-gray-800 mb-4"
            >
                404
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl text-gray-700 mb-8"
            >
                Strona nie została znaleziona
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600"
            >
                Przepraszamy, strona, której szukasz, nie istnieje.
            </motion.div>
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-main-red text-white px-6 py-3 rounded-full mt-8 hover:bg-red-600 transition-colors duration-300"
                onClick={() => window.location.href = '/'} 
            >
                Wróć do strony głównej
            </motion.button>
        </div>
    );
};

export default NotFoundPage;