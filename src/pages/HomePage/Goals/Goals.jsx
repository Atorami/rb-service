import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaClock, FaUserTie, FaTools, FaPaintBrush } from 'react-icons/fa';

const Goals = () => {
  return (
    <div className="about pt-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center p-6 md:p-8 md:px-16 lg:px-28"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="title text-4xl md:text-4xl font-semibold text-gray-800 mb-6"
          >
            Cele i Wartości
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '15%' }}
            transition={{ duration: 1.2 }}
            className="underline bg-main-red h-1 mb-12 md:mb-16 mx-auto"
          ></motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <FaCheckCircle className="text-4xl text-main-red mb-4" />
              <h4 className="text-xl font-semibold mb-4">Jakość</h4>
              <p className="text-gray-700 text-center">
                Dostarczanie usług najwyższej jakości, które spełniają oczekiwania naszych klientów.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <FaLightbulb className="text-4xl text-main-red mb-4" />
              <h4 className="text-xl font-semibold mb-4">Indywidualne podejście</h4>
              <p className="text-gray-700 text-center">
                Traktowanie każdego klienta indywidualnie, dostosowując usługi do jego potrzeb.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <FaClock className="text-4xl text-main-red mb-4" />
              <h4 className="text-xl font-semibold mb-4">Terminowość</h4>
              <p className="text-gray-700 text-center">
                Rzetelna i terminowa realizacja zleceń, aby klienci mogli cieszyć się efektami naszej pracy.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <FaUserTie className="text-4xl text-main-red mb-4" />
              <h4 className="text-xl font-semibold mb-4">Profesjonalizm</h4>
              <p className="text-gray-700 text-center">
                Profesjonalne podejście do każdego zadania, gwarantujące wysoką jakość wykonania i obsługi.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <FaTools className="text-4xl text-main-red mb-4" />
              <h4 className="text-xl font-semibold mb-4">Wszechstronność</h4>
              <p className="text-gray-700 text-center">
                Szeroki zakres usług dostosowanych do różnorodnych potrzeb klientów.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
              <FaPaintBrush className="text-4xl text-main-red mb-4" />
              <h4 className="text-xl font-semibold mb-4">Estetyka</h4>
              <p className="text-gray-700 text-center">
                Dbałość o estetykę i nowoczesny wygląd każdego wnętrza.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Goals;