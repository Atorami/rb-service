import React from "react";
import { motion } from "framer-motion";

const OfferCard = ({ img, title, color }) => {
    return (
        <motion.div
            className="offer-card overflow-hidden rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105" // Dodano transition i transform
        >
            <motion.div
                className="offer-bg relative w-full h-64 bg-cover bg-center" // Zmodyfikowano wysokość
                style={{ backgroundImage: `url(${img})` }}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div
                    className="offer-title-bg absolute bottom-0 w-full py-4 text-center bg-opacity-80" // Zmodyfikowano padding i opacity
                    style={{ backgroundColor: `${color}` }}
                >
                    <h5 className="offer-title text-white text-lg font-semibold tracking-wide"> {/* Dodano tracking-wide */}
                        {title}
                    </h5>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default OfferCard;