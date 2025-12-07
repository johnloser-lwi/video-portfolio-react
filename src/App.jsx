import "./App.css";
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Highlights from './pages/Highlights';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
      <div className="bg-background font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Highlights />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="py-8 text-center text-slate-600 text-sm">
          <p>© 2025 Weiqin Yang. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App
