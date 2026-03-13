import React, { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Projects = lazy(() => import('./pages/Projects'));
const OngoingProjects = lazy(() => import('./pages/OngoingProjects'));
const CompletedProjects = lazy(() => import('./pages/CompletedProjects'));
const UpcomingProjects = lazy(() => import('./pages/UpcomingProjects'));

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-3 border-orange-400 border-t-transparent rounded-full animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ongoing" element={<OngoingProjects />} />
          <Route path="/projects/completed" element={<CompletedProjects />} />
          <Route path="/projects/upcoming" element={<UpcomingProjects />} />
        </Routes>
      </Suspense>
      <Footer />
    </HashRouter>
  );
}

export default App;
