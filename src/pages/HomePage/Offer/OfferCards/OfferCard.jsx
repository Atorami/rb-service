import React from "react";
import { motion } from "framer-motion";

const OfferCard = ({ img, title }) => {
    return (
        <motion.div
            className="offer-card overflow-hidden rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105"
        >
            <div className="relative w-full h-64 bg-gray-100">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="p-6 bg-white">
                <h5 className="offer-title text-gray-800 text-lg font-semibold tracking-wide text-center">
                    {title}
                </h5>
            </div>
        </motion.div>
    );
};

export default OfferCard;