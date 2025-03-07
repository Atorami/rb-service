import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import bgImage from '../../assets/img/bg/bg_4.jpg';
import img from '../../assets/img/about/about_img.jpeg';

const AboutPage = () => {
    return (
        <div className="font-sans text-gray-800">
            <Helmet>
                <title>O Firmie | Profesjonalne Wykończenia Wnętrz - Robert Bogaczyk</title>
                <meta name="description" content="Poznaj Roberta Bogaczyka, doświadczonego specjalistę od prac remontowo-wykończeniowych. Solidność, precyzja i dbałość o detale to nasze priorytety." />
                <meta name="keywords" content="o firmie, Robert Bogaczyk, remonty, wykończenia wnętrz, profesjonalizm, jakość, Szczecin" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] flex flex-col justify-center items-center text-center text-white bg-cover bg-no-repeat bg-center md:bg-[bottom]"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold text-shadow-lg relative z-10"
                >
                    O Firmie
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl relative z-10 mt-4"
                >
                    Solidność, precyzja i dbałość o każdy detal
                </motion.p>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '20%' }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-1 bg-main-red rounded-full mt-6 relative z-10"
                ></motion.div>
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
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center items-stretch"
                    >
                        <img src={img} alt="Sketch" className="w-full h-full object-cover object-left rounded-lg shadow-lg" />
                    </motion.div>
                </div>
                <div className="flex flex-col items-center mt-16 mb-6 md:mt-24 md:mb-10">
                    <motion.p  
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }} className="text-xl mb-6 text-center">Masz pytania? Chcesz dowiedzieć się więcej?</motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        onClick={() => window.location.href = 'tel:+48511394565'}
                        className="bg-main-red text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                    >
                        Skontaktuj się
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;