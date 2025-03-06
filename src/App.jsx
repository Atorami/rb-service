import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/HomePage/HomePage'
import OfferPage from './pages/OfferPage/OfferPage'
import ProjectsPage from './pages/PorjectsPage/ProjectsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {

  return (
    <HashRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
  </HashRouter>
  )
}

export default App
