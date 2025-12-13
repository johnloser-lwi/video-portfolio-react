import { Link } from "react-router-dom";
import { Play, Mail } from 'lucide-react';

const Highlights = () => {
  return (
    <div className="min-h-screen text-slate-200 px-6 md:px-12 py-10 fade-in">
      <div className="max-w-6xl mx-auto">
         <div className="max-w-3xl mb-5">
          <h2 className="text-2xl font-bold text-white mb-4">Hi there, I'm Weiqin</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I help creators gain more views through video editing. Contact me if you want edits like this.
          </p>

         <div className="mt-4">
           <Link
             to="/about"
             className="inline-flex items-center gap-2 px-4 py-2 bg-card text-slate-300 rounded-lg hover:bg-highlight hover:text-white transition-colors"
           >
             <Mail size={16} /> Contact
           </Link>
         </div>

        </div>
        <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden border border-slate-800 mb-12">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/hO-UU8O_qh0" 
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
       <div className="mt-6 flex gap-4">
             <Link to="/projects" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                See full projects <Play size={16} />
             </Link>
          </div>
      </div>
    </div>
  );
};

export default Highlights;