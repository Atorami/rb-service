import React from 'react';

const OfferCard = ({ img, title, opis }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={img} alt={title} className="w-full h-56 object-cover" loading="lazy" />
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{opis}</p>
            </div>
        </div>
    );
};

export default OfferCard;