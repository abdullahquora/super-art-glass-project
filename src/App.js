import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import OngoingProjects from './pages/OngoingProjects';
import CompletedProjects from './pages/CompletedProjects';
import UpcomingProjects from './pages/UpcomingProjects';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/ongoing" element={<OngoingProjects />} />
        <Route path="/projects/completed" element={<CompletedProjects />} />
        <Route path="/projects/upcoming" element={<UpcomingProjects />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
