import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

import bgImage from '../../assets/img/bg/bg_1.jpg';

const OfferPage = () => {
    return (
        <div className="font-sans text-gray-800">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] flex justify-center items-center text-center text-white bg-cover bg-no-repeat bg-bottom"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <h1 className="text-5xl font-bold text-shadow-lg relative z-10">Usługi</h1>
            </motion.div>
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-semibold mb-6 text-main-red"
                >
                    Profesjonalne usługi wykończeniowe
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg leading-relaxed mb-8 text-gray-700"
                >
                    Tworzę wnętrza, które zachwycają estetyką i funkcjonalnością. Dzięki wieloletniemu doświadczeniu oraz precyzji w działaniu
                    oferuję kompleksowe usługi wykończeniowe, dostosowane do indywidualnych potrzeb każdego klienta. Pracuję zarówno w
                    nowych budynkach, jak i przy remontach starszych pomieszczeń, nadając im świeży wygląd i nowoczesny charakter.
                </motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg leading-relaxed mb-8 text-gray-700"
                >
                    Dbam o każdy etap realizacji - od przygotowania powierzchni, przez dokładne wykonanie prac, aż po estetyczne
                    wykończenie. Zawsze stawiam na wysoką jakość materiałów oraz staranne wykonanie, dzięki czemu efekt końcowy spełnia
                    najwyższe standardy. Moje usługi są skierowane zarówno do klientów indywidualnych, jak i firm, które poszukują solidnego
                    fachowca do realizacji swoich projektów.
                </motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-lg leading-relaxed mb-8 text-gray-700"
                >
                    Współpracując ze mną, możesz liczyć na terminowość, rzetelność oraz profesjonalne doradztwo na każdym etapie prac.
                    Niezależnie od tego, czy planujesz odświeżenie wnętrza, czy kompleksowy remont - jestem do Twojej dyspozycji! Skontaktuj
                    się ze mną i sprawdź, jak mogę odmienić Twoją przestrzeń.
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="list-none mb-10"
                >
                    <li className="flex items-center text-lg mb-3 text-gray-700">
                        <FaCheck className="text-main-red mr-3" />
                        Malowanie ścian i sufitów
                    </li>
                    <li className="flex items-center text-lg mb-3 text-gray-700">
                        <FaCheck className="text-main-red mr-3" />
                        Szpachlowanie i wyrównywanie powierzchni
                    </li>
                    <li className="flex items-center text-lg mb-3 text-gray-700">
                        <FaCheck className="text-main-red mr-3" />
                        Układanie płytek
                    </li>
                    <li className="flex items-center text-lg mb-3 text-gray-700">
                        <FaCheck className="text-main-red mr-3" />
                        Zabudowy z płyt gipsowo-kartonowych
                    </li>
                    <li className="flex items-center text-lg mb-3 text-gray-700">
                        <FaCheck className="text-main-red mr-3" />
                        Montaż listew przypodłogowych
                    </li>
                    <li className="flex items-center text-lg mb-3 text-gray-700">
                        <FaCheck className="text-main-red mr-3" />
                        Montaż paneli i laminatu
                    </li>
                </motion.ul>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.location.href = 'tel:+48511394565'}
                    className="bg-main-red hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 cursor-pointer"
                >
                    Zapytaj już teraz
                </motion.button>
            </div>
        </div>
    );
};

export default OfferPage;