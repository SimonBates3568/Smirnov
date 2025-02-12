import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Home.jsx';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NavBar from '../src/components/ui/Navbar.jsx'; // Import the NavBar component

const App = () => {
  return (
    <ChakraProvider>
      <NavBar /> {/* Add the NavBar component here */}
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
