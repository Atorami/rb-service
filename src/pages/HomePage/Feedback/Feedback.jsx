import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const opinions = [
    {
        id: 1,
        text: "Współpraca z tą firmą to czysta przyjemność! Profesjonalizm, terminowość i dbałość o detale na najwyższym poziomie. Polecam każdemu, kto szuka solidnego wykonawcy.",
        author: "Karolina Malinowska"
    },
    {
        id: 2,
        text: "Remont przebiegł sprawnie i bezproblemowo. Efekt końcowy przeszedł moje najśmielsze oczekiwania. Dziękuję za profesjonalne podejście i świetną komunikację.",
        author: "Adam Krawczyk"
    },
    {
        id: 3,
        text: "Pełen profesjonalizm i zaangażowanie. Usługa wykonana na najwyższym poziomie, terminowo i zgodnie z oczekiwaniami. Polecam każdemu!",
        author: "Sylwia Dąbrowska"
    },
    {
        id: 4,
        text: "Jestem bardzo zadowolony z usług tej firmy. Wszystko zostało wykonane zgodnie z planem i w terminie. Efekt końcowy jest rewelacyjny!",
        author: "Marcin Lewicki"
    },
    {
        id: 5,
        text: "Profesjonalne podejście do klienta, terminowość i wysoka jakość wykonania. Polecam serdecznie!",
        author: "Alicja Jankowska"
    },
    {
        id: 6,
        text: "Firma godna polecenia. Remont przebiegł bezproblemowo, a efekt końcowy jest zgodny z moimi oczekiwaniami.",
        author: "Bartosz Wojciechowski"
    },
    {
        id: 7,
        text: "Profesjonalizm, terminowość i dbałość o szczegóły. Jestem bardzo zadowolony z efektu końcowego.",
        author: "Natalia Piotrowska"
    },
    {
        id: 8,
        text: "Firma godna zaufania. Remont wykonany solidnie i terminowo. Polecam!",
        author: "Krzysztof Kozłowski"
    },
    {
        id: 9,
        text: "Jestem pod wrażeniem profesjonalizmu i jakości usług. Polecam każdemu, kto szuka solidnego wykonawcy.",
        author: "Dominika Mazur"
    },
];

const Opinions = () => {
    return (
        <div className="opinions py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="title text-4xl text-center font-semibold text-gray-800 mb-6"
                >
                    Opinie Klientów
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '15%' }}
                    transition={{ duration: 1.2 }}
                    className="underline bg-main-red h-1 mb-16 mx-auto"
                ></motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {opinions.map((opinion) => (
                        <motion.div
                            key={opinion.id}
                            className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 transform hover:scale-105"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-gray-600 text-lg mb-4">
                                <FaQuoteLeft className="inline mr-2 text-main-red" />
                                {opinion.text}
                                <FaQuoteRight className="inline ml-2 text-main-red" />
                            </div>
                            <p className="text-gray-800 font-semibold">- {opinion.author}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Opinions;