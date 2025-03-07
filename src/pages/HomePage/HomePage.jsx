import React from 'react';
import { Helmet } from 'react-helmet';


import Hero from "./Hero/Hero";
import About from "./About/About";
import Offer from './Offer/Offer';
import How from './How/How';
import CalltoAction from './CallToAction/CallToAction';
import Projects from './Projects/Projects';
import Feedback from './Feedback/Feedback';
import Goals from './Goals/Goals';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Robert Bogaczyk - Profesjonalne Wykończenia Wnętrz w Szczecinie</title>
                <meta name="description" content="Robert Bogaczyk oferuje kompleksowe usługi remontowo-wykończeniowe w Szczecinie. Malowanie, szpachlowanie, zabudowy GK, układanie płytek i paneli. Sprawdź naszą ofertę!" />
                <meta name="keywords" content="Robert Bogaczyk, wykończenia wnętrz, remonty, Szczecin, malowanie, szpachlowanie, zabudowy GK, płytki, panele, usługi remontowe" />
            </Helmet>
            <Hero />
            <About />
            <Offer />
            <How />
            <CalltoAction />
            <Projects />
            <Goals/>
            
            {/* <Feedback /> */}
        </>
    );
};

export default HomePage;