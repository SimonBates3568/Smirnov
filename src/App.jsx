import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Home.jsx';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NavBar from '../src/components/ui/Navbar.jsx'; // Import the NavBar component
import Footer from '../src/components/ui/Footer.jsx';
import Home from './pages/Home';

const App = () => {
  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavBar /> {/* Add the NavBar component here */}
        <Box flex="1">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Router>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
