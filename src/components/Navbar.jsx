import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? "bg-card text-white" : "text-slate-400 hover:text-white";
  };

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-background sticky top-0 z-50">
      <Link to="/" className="bg-card hover:bg-highlight px-4 py-2 rounded-lg">
        <span className="font-bold text-slate-200">Weiqin Yang <span className="text-slate-500">- Video Editor</span></span>
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className={`px-4 py-2 rounded-lg transition-colors ${isActive('/')}`}>Highlights</Link>
        <Link to="/projects" className={`px-4 py-2 rounded-lg transition-colors ${isActive('/projects')}`}>Projects</Link>
        <Link to="/about" className={`px-4 py-2 rounded-lg transition-colors ${isActive('/about')}`}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;