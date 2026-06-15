import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import Specialities from './pages/Specialities';
import SpecialityPage from './pages/SpecialityPage';
import Services from './pages/Services';
import ServicePage from './pages/ServicePage';
import Blogs from './pages/Blogs';
import BlogPage from './pages/BlogPage';
import Director from './pages/Director';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/specialities/:id" element={<SpecialityPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/management" element={<Director />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
