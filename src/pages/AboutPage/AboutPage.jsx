import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaRocket, FaUserTie, FaHammer, FaTools, FaPaintBrush } from 'react-icons/fa'; // Изменены иконки

import bgImage from '../../assets/img/about/about_bg3.jpg';
import img from '../../assets/img/about/about_img.jpeg';

const AboutPage = () => {
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
                <h1 className="text-5xl font-bold text-shadow-lg relative z-10">O Firmie</h1>
            </motion.div>
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-semibold mb-6 text-main-red">ROBERT BOGACZYK</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Jestem doświadczonym specjalistą w zakresie prac remontowo-wykończeniowych, a moja działalność opiera się na solidności,
                        precyzji i dbałości o każdy detal.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-gray-700 leading-relaxed"
                    >
                        <p className="mb-6">
                            Jako prywatny przedsiębiorca podchodzę do każdego zlecenia indywidualnie, zapewniając najwyższą jakość usług oraz
                            terminową realizację.
                        </p>
                        <p className="mb-6">
                            Dzięki wieloletniemu doświadczeniu w branży wiem, jak ważne jest połączenie estetyki z funkcjonalnością. Pracuję zarówno
                            dla klientów indywidualnych, jak i firm, oferując kompleksowe remonty mieszkań, domów, biur i lokali użytkowych.
                        </p>
                        <p className="mb-6">
                            Korzystam wyłącznie ze sprawdzonych materiałów i nowoczesnych technologii, aby efekt końcowy spełniał najwyższe
                            standardy.
                        </p>
                        <p>
                            Zadowolenie klienta to dla mnie priorytet, dlatego każdą realizację wykonuję z pełnym zaangażowaniem i pasją. Jeśli
                            szukasz rzetelnego fachowca, który odmieni Twoje wnętrze i nada mu nowoczesny wygląd - zapraszam do współpracy!
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-center items-stretch"
                    >
                        <img src={img} alt="Sketch" className="w-full h-full object-cover object-left rounded-lg shadow-lg" />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 pt-8 text-center bg-gray-100 p-8 rounded-lg shadow-md"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cele i Wartości </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <FaCheckCircle className="text-4xl text-green-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-4">Jakość</h4>
                            <p className="text-gray-700">Dostarczanie usług najwyższej jakości, które spełniają oczekiwania naszych klientów.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-4">Indywidualne podejście</h4>
                            <p className="text-gray-700">Traktowanie każdego klienta indywidualnie, dostosowując usługi do jego potrzeb.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <FaRocket className="text-4xl text-blue-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-4">Terminowość</h4>
                            <p className="text-gray-700">Rzetelna i terminowa realizacja zleceń, aby klienci mogli cieszyć się efektami naszej pracy.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <FaUserTie className="text-4xl text-indigo-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-4">Profesjonalizm</h4>
                            <p className="text-gray-700">Profesjonalne podejście do każdego zadania, gwarantujące wysoką jakość wykonania i obsługi.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <FaTools className="text-4xl text-pink-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-4">Wszechstronność</h4>
                            <p className="text-gray-700">Szeroki zakres usług dostosowanych do różnorodnych potrzeb klientów.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                            <FaPaintBrush className="text-4xl text-orange-500 mb-4" />
                            <h4 className="text-xl font-semibold mb-4">Estetyka</h4>
                            <p className="text-gray-700">Dbałość o estetykę i nowoczesny wygląd każdego wnętrza.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className="text-lg text-gray-700 mb-4">Chcesz dowiedzieć się więcej o usługach?</p>
                        <button className="bg-main-red text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors duration-300">
                            Skontaktuj się
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;