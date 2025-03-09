import React, { useEffect, useState, useRef } from "react";
import HowCard from "./Cards/HowCard";
import { motion } from "framer-motion";

const info = [
    {
        id: "1",
        title: "Projektowanie",
        descr:
            "Tworzę koncepcję i dobieram materiały, aby dopasować wnętrze do Twoich potrzeb i stylu. Każdy detal jest starannie przemyślany, by stworzyć harmonijną i funkcjonalną przestrzeń.",
    },
    {
        id: "2",
        title: "Realizacja",
        descr:
            "Realizuję prace remontowe i wykończeniowe z najwyższą precyzją. Stawiam na jakość, dbałość o szczegóły i terminowość, aby efekt końcowy w pełni spełniał Twoje oczekiwania.",
    },
    {
        id: "3",
        title: "Wykończenie",
        descr:
            "Na ostatnim etapie prac zajmuję się montażem elementów dekoracyjnych oraz dopracowaniem każdego detalu, dbając o estetykę i funkcjonalność wnętrza.",
    },
    {
        id: "4",
        title: "Oddanie gotowego wnętrza",
        descr:
            "Przekazuję Ci w pełni ukończone, gotowe do zamieszkania wnętrze. Dbám o to, aby efekt końcowy był zgodny z Twoją wizją i spełniał najwyższe standardy jakości.",
    },
];

const How = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="how pt-20 pb-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="title text-4xl text-center font-semibold text-gray-800 mb-6"
                >
                    Jak Wygląda Współpraca Ze Mną
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '15%' }}
                    transition={{ duration: 1.2 }}
                    className="underline bg-main-red h-1 mb-12 md:mb-16 mx-auto"
                ></motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {info.map((el, index) => (
                        <motion.div
                            key={el.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                        >
                            <HowCard id={el.id} title={el.title} descr={el.descr} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default How;