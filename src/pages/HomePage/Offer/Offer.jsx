import React from "react";
import { motion } from "framer-motion";
import OfferCard from './OfferCards/OfferCard';
import img1 from "../../../assets/img/offer/Service 1.jpg";
import img2 from "../../../assets/img/offer/Service 2.jpg";
import img3 from "../../../assets/img/offer/Service 3.jpg";
import img4 from "../../../assets/img/offer/Service 4.png";
import img5 from "../../../assets/img/offer/Service 5.jpg";
import img6 from "../../../assets/img/offer/Service 6.jpg";

const offer = [
    { id: 1, title: "Malowanie", color: "#EC2525", img: img1 },
    { id: 2, title: "Szpachlowanie", color: "#FFE37F", img: img2 },
    { id: 3, title: "Zabudowa GK", color: "#F4E1C0", img: img3 },
    { id: 4, title: "Układanie płytek", color: "#F2E2D5", img: img4 },
    { id: 5, title: "Układanie paneli", color: "#CC8448", img: img5 },
    { id: 6, title: "Montaż listw przypodłogowych", color: "#B7C6B1", img: img6 },
];

const Offer = () => {
    return (
        <div className="offer py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="title text-4xl text-center font-semibold text-gray-800 mb-6"
                >
                    Moja Oferta
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '15%' }}
                    transition={{ duration: 1.2 }}
                    className="underline bg-main-red h-1 mb-16 mx-auto"
                ></motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {offer.map((el, index) => (
                        <motion.div
                            key={el.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <OfferCard img={el.img} title={el.title} color={el.color} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offer;