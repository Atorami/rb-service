import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ closeMobileMenu }) => {
  return (
    <nav className="navigation">
      <ul className="flex flex-col md:flex-row list-none items-center text-lg font-medium">
        <li className="md:mr-8 mb-2 md:mb-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-red-600 ${
                isActive ? 'text-main-red' : 'text-gray-800'
              }`
            }
            onClick={closeMobileMenu}
          >
            Strona Główna
          </NavLink>
        </li>
        <li className="md:mr-8 mb-2 md:mb-0">
          <NavLink
            to="/offer"
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-red-600 ${
                isActive ? 'text-main-red' : 'text-gray-800'
              }`
            }
            onClick={closeMobileMenu}
          >
            Usługi
          </NavLink>
        </li>
        <li className="md:mr-8 mb-2 md:mb-0">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-red-600 ${
                isActive ? 'text-main-red' : 'text-gray-800'
              }`
            }
            onClick={closeMobileMenu}
          >
            Projekty
          </NavLink>
        </li>
        <li className="md:mr-8 mb-2 md:mb-0">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-red-600 ${
                isActive ? 'text-main-red' : 'text-gray-800'
              }`
            }
            onClick={closeMobileMenu}
          >
            O Firmie
          </NavLink>
        </li>
        <li className="mb-2 md:mb-0">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-300 hover:text-red-600 ${
                isActive ? 'text-main-red' : 'text-gray-800'
              }`
            }
            onClick={closeMobileMenu}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
