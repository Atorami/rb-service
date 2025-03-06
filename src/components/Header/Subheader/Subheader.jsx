import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Subheader = () => {
    return (
        <div className="subheader h-[40px] bg-main-blue flex items-center">
            <div className="container mx-auto px-6">
                <ul className='flex flex-row text-white justify-end items-center'>
                    <li className='mr-8 flex items-center'>
                        <FaMapMarkerAlt className="mr-2" />
                        <a href="#adres" className="text-sm">ul. Turkusowa 15a/9, Szczecin 70-778</a>
                    </li>
                    <li className='mr-8 flex items-center'>
                        <FaEnvelope className="mr-2" />
                        <a href="mailto:kontakt@robertbogaczyk.pl" className="text-sm">kontakt@robertbogaczyk.pl</a>
                    </li>
                    <li className='flex items-center'>
                        <FaPhoneAlt className="mr-2" />
                        <a href="tel:511-394-565" className="text-sm">+48 511-394-565</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Subheader;