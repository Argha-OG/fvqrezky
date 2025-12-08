import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './index.css';
import { useEffect } from 'react';

// Pages
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { Portfolio } from '@/pages/Portfolio';
import { PortfolioDetail } from '@/pages/PortfolioDetail';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { FAQ } from '@/pages/FAQ';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <Router>
                    <ScrollToTop />
                    <div className="flex min-h-screen flex-col">
                        <Navbar />
                        <main className="flex-1">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/services/:id" element={<ServiceDetail />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/portfolio/:id" element={<PortfolioDetail />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/faq" element={<FAQ />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </LanguageProvider>
        </HelmetProvider>
    );
}

export default App;
