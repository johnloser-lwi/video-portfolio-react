import { Link } from "react-router-dom";
import { Play } from 'lucide-react';

const Highlights = () => {
  return (
    <div className="min-h-screen text-slate-200 px-6 md:px-12 py-10 fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Showreel 2024</h1>
        
        {/* Main Showreel Player */}
        <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden border border-slate-800 mb-12">
          {/* REPLACE SRC WITH YOUR SHOWREEL LINK */}
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=showreel" 
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Short Info Section */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-4">Hi there, I'm Weiqin</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I specialize in high-retention talking head videos. I use dynamic pacing and clear storytelling to keep viewers watching. Check out my projects.
          </p>
          <div className="mt-6 flex gap-4">
             <Link to="/projects" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                See full projects <Play size={16} />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;