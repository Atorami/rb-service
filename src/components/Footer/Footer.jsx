import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo_blue_new.png';

const Footer = () => {
  return (
    <footer className="footer bg-main-blue text-white pt-16">
      <div className="container mx-auto flex flex-col px-8">
        <div className="footer-main flex flex-col md:flex-row items-start">
          <div className="main-block-1 md:mr-16 mb-4 md:mb-0">
            <h5 className="footer-title text-xl font-bold mb-2">Navigacja</h5>
            <ul className="flex flex-col">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-main-red transition-colors duration-300 ${isActive ? 'text-main-red' : 'text-white'}`
                  }
                >
                  Strona Główna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/offer"
                  className={({ isActive }) =>
                    `hover:text-main-red transition-colors duration-300 ${isActive ? 'text-main-red' : 'text-white'}`
                  }
                >
                  Usługi
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `hover:text-main-red transition-colors duration-300 ${isActive ? 'text-main-red' : 'text-white'}`
                  }
                >
                  Projekty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-main-red transition-colors duration-300 ${isActive ? 'text-main-red' : 'text-white'}`
                  }
                >
                  O Firmie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-main-red transition-colors duration-300 ${isActive ? 'text-main-red' : 'text-white'}`
                  }
                >
                  Kontakt
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="main-block-2">
            <h5 className="footer-title text-xl font-bold mb-2">Informacja Dodatkowa</h5>
            <ul>
              <li>NIP: 9552209122</li>
              <li>Właściciel: Robert Bogaczyk</li>
            </ul>
          </div>
        </div>
        <div className="upperline w-full bg-white h-[1px] my-4"></div>
        <div className="footer-sub flex flex-col md:flex-row justify-between items-center pb-4">
          <img
            src={logo}
            alt="RB - Robert Bogaczyk"
            className="footer-logo h-24 transition-transform duration-300 transform hover:scale-105 mb-2 md:mb-0"
          />
          <div className="footer-text">© 2024 Robert Bogaczyk. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
