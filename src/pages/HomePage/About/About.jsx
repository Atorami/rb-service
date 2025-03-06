import React from 'react';
import img from '../../../assets/img/about/about_bg2.jpg';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="about pt-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="title text-4xl text-center font-semibold text-gray-800 mb-6"
                >
                    Dlaczego Warto Wybrać Moje Usługi
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '25%' }}
                    transition={{ duration: 1.2 }}
                    className="underline bg-main-red h-1 mb-12 md:mb-16 mx-auto"
                ></motion.div>
                <div className="main-block flex flex-col lg:flex-row justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="about-img w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-10 bg-no-repeat bg-cover bg-center rounded-2xl shadow-lg"
                        style={{ backgroundImage: `url(${img})` }}
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="description w-full lg:w-1/2 text-lg text-gray-700"
                    >
                        <p className="mb-6">
                            Wybór odpowiedniego wykonawcy do prac remontowo-wykończeniowych to inwestycja w trwałość i estetykę Twojego wnętrza.
                        </p>
                        <p className="mb-6">
                            Moje usługi to synonim wysokiej jakości, precyzji i indywidualnego podejścia. Dzięki pasji i doświadczeniu tworzę przestrzenie, które inspirują i spełniają oczekiwania nawet najbardziej wymagających klientów.
                        </p>
                        <p className="mb-6">
                            Tworzę nie tylko wykończenia, ale przestrzenie, w których komfort i funkcjonalność idą w parze z elegancją. Dbám o każdy detal, starannie dobierając materiały i oferując fachowe doradztwo na każdym etapie realizacji.
                        </p>
                        <h4 className="font-semibold text-xl mb-4 text-gray-800">Co Mnie Wyróżnia?</h4>
                        <ul className="mb-6 list-disc list-inside">
                            <li className="mb-2">Perfekcyjna dokładność i dbałość o detale</li>
                            <li className="mb-2">Punktualność i rzetelność w realizacji projektów</li>
                            <li className="mb-2">Wykorzystanie nowoczesnych technologii i sprawdzonych materiałów</li>
                            <li className="mb-2">Personalizowane rozwiązania, dostosowane do indywidualnych potrzeb</li>
                        </ul>
                        <p className="mb-6">
                            Współpraca ze mną to gwarancja solidnego wykonania i najwyższych standardów. Zapraszam do kontaktu, aby omówić Twój projekt i przekonać się o moim profesjonalizmie.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.6 }}
                                onClick={() => window.location.href = 'tel:+48511394565'}
                                className="bg-main-red text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors duration-300 cursor-pointer"
                            >
                                Skontaktuj się
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;