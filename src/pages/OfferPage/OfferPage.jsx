import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/img/bg/bg_1.jpg';
import { FaPaintRoller, FaStamp, FaHammer, FaThLarge, FaLayerGroup, FaRuler, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const offer = [
    {
        id: 1,
        title: "Malowanie",
        icon: <FaPaintRoller />,
        opis: "Moje prace malarskie to nie tylko nakładanie farby na ściany. Tworzę atmosferę i styl Twojego wnętrza. Oferuję szeroki zakres usług, od przygotowania powierzchni po nakładanie dekoracyjnych powłok. Używam tylko wysokiej jakości farb, które zapewniają trwałość i estetyczny wygląd. Dobiorę idealny kolor i technikę, aby Twój dom stał się odzwierciedleniem Twojego gustu.",
    },
    {
        id: 2,
        title: "Szpachlowanie",
        icon: <FaStamp />,
        opis: "Idealnie gładkie ściany to podstawa każdego remontu. Moja usługa szpachlowania gwarantuje, że Twoje ściany będą bez zarzutu. Używam nowoczesnych materiałów i technologii, aby usunąć wszelkie nierówności i pęknięcia. Moim celem jest przygotowanie powierzchni tak, aby wykończenie wyglądało idealnie. Dbam o każdy szczegół, aby rezultat przekroczył Twoje oczekiwania.",
    },
    {
        id: 3,
        title: "Zabudowa GK",
        icon: <FaHammer />,
        opis: "Płyty gipsowo-kartonowe to uniwersalny materiał, który pozwala zrealizować dowolne pomysły aranżacyjne. Oferuję usługi montażu konstrukcji z płyt GK, od prostych ścian działowych po skomplikowane elementy architektoniczne. Mam duże doświadczenie i wiedzę, aby stworzyć funkcjonalne i estetyczne rozwiązania dla Twojego domu. Gwarantuję precyzję i jakość na każdym etapie pracy.",
    },
    {
        id: 4,
        title: "Układanie płytek",
        icon: <FaThLarge />,
        opis: "Układanie płytek to sztuka wymagająca precyzji i mistrzostwa. Oferuję usługi układania płytek każdego rodzaju i rozmiaru. Pomogę Ci wybrać idealne płytki i stworzę nienaganną powierzchnię w łazience, kuchni lub innym pomieszczeniu. Gwarantuję, że Twoje płytki zostaną ułożone równo i pięknie, z uwzględnieniem wszystkich Twoich życzeń.",
    },
    {
        id: 5,
        title: "Układanie paneli",
        icon: <FaLayerGroup />,
        opis: "Panele to praktyczne i estetyczne rozwiązanie na Twoją podłogę. Oferuję usługi układania paneli laminowanych i innych rodzajów paneli. Mam doświadczenie i wiedzę, aby stworzyć trwałą i piękną podłogę. Gwarantuję, że Twoje panele zostaną ułożone równo i bez szczelin, z uwzględnieniem wszystkich cech pomieszczenia.",
    },
    {
        id: 6,
        title: "Montaż listw przypodłogowych",
        icon: <FaRuler />,
        opis: "Listwy przypodłogowe to ważny element wnętrza, który nadaje wykończony wygląd każdemu pomieszczeniu. Oferuję usługi montażu listew przypodłogowych każdego rodzaju i rozmiaru. Pomogę Ci wybrać idealne listwy i zamontuję je starannie i solidnie. Gwarantuję, że Twoje listwy zostaną zamontowane równo i pięknie, z uwzględnieniem wszystkich cech pomieszczenia.",
    },
];

const OfferPage = () => {
    return (
        <div className="font-sans text-gray-800">
            <Helmet>
                <title>Usługi | Profesjonalne Remonty - Robert Bogaczyk</title>
                <meta name="description" content="Oferuje kompleksowe usługi wykończeniowe: malowanie, szpachlowanie, zabudowy GK, układanie płytek i paneli. Profesjonalne remonty wnętrz z gwarancją jakości." />
                <meta name="keywords" content="usługi wykończeniowe, remonty, malowanie, szpachlowanie, zabudowy GK, układanie płytek, panele, Robert Bogaczyk" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px] flex flex-col justify-center items-center text-center text-white bg-cover bg-no-repeat bg-bottom"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-6xl md:text-8xl font-bold text-shadow-lg relative z-10"
                >
                    Usługi
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl relative z-10 mt-4"
                >
                   Profesjonalizm w każdym detalu
                </motion.p>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '20%' }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-1 bg-main-red rounded-full mt-6 relative z-10"
                ></motion.div>
            </motion.div>
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-semibold mb-6 text-main-red text-center"
                >
                    Profesjonalne usługi wykończeniowe
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg leading-relaxed mb-8 text-gray-700 text-center"
                >
                    Tworzę wnętrza, które zachwycają estetyką i funkcjonalnością. Dzięki wieloletniemu doświadczeniu oraz precyzji w działaniu
                    oferuję kompleksowe usługi wykończeniowe, dostosowane do indywidualnych potrzeb każdego klienta. Pracuję zarówno w
                    nowych budynkach, jak i przy remontach starszych pomieszczeń, nadając im świeży wygląd i nowoczesny charakter.
                </motion.p>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg leading-relaxed mb-8 text-gray-700 text-center"
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
                    className="text-lg leading-relaxed mb-8 text-gray-700 text-center"
                >
                    Współpracując ze mną, możesz liczyć na terminowość, rzetelność oraz profesjonalne doradztwo na każdym etapie prac.
                    Niezależnie od tego, czy planujesz odświeżenie wnętrza, czy kompleksowy remont - jestem do Twojej dyspozycji! Skontaktuj
                    się ze mną i sprawdź, jak mogę odmienić Twoją przestrzeń.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-lg md:text-3xl font-semibold text-gray-800 italic mb-10"
                        
                    >
                        <FaQuoteLeft className="inline mr-1 md:mr-2 text-main-red" />
                            <p className='inline mx-2 md:mx-4 my-10'>Solidność, Doświadczenie, Zaufanie</p>
                        <FaQuoteRight className="inline ml-1 md:ml-2 text-main-red" />
                    </motion.div>
                    <div className="text-gray-600 text-md py-4 mb-10 px-12 md:px-54">
                        Te trzy wartości są dla nas drogowskazem w codziennej pracy. Dzięki nim, możemy oferować usługi
                        na najwyższym poziomie, spełniając oczekiwania nawet najbardziej wymagających klientów.
                        Zapraszamy do współpracy, która zaowocuje pięknym i trwałym wnętrzem oraz do zapoznania się z moją ofertą.
                    </div>
                    <h2 className="text-3xl font-semibold mb-12 md:mb-20 text-main-red text-center">Zapoznaj się z moją ofertą</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offer.map((el, index) => (
                            <motion.div
                                key={el.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                                    <div className="p-6">
                                        <div className="flex itemsjustify-center mb-4 text-main-red text-4xl"
                                            >
                                                {el.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-4 text-gray-800">{el.title}</h3>
                                            <p className="text-gray-700 leading-relaxed">{el.opis}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="text-center mt-10">
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
            </div>
        
    );
};

export default OfferPage;