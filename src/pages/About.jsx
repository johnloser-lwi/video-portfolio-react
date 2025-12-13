import { Link } from "react-router-dom";
import { Download, MapPin } from 'lucide-react';
import WeiqinYang from "../assets/weiqin_yang.png";
import Resume from "../assets/Resume_weiqinYang_VideoEditor.pdf";

const About = () => {
  return (
    <div className="min-h-screen text-slate-200 px-6 md:px-12 py-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          
          <div className="w-full md:w-1/2 space-y-6">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">About</span>
            <h1 className="text-5xl font-bold text-white tracking-tight">HI, THERE!</h1>
            
            <p className="text-slate-300 leading-relaxed">
              I'm Weiqin, a video editor passionate about creating engaging video content through storytelling and sound.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With a background in sound design for the game industry, I bring a balance of visual and audio presentation to every project. Whether it's a short-form or long-form video, my goal is to craft work that is engaging, professional, and purposeful behind every cut.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects" className="px-6 py-3 bg-card hover:bg-highlight text-slate-300  hover:text-white rounded-lg font-medium transition-colors">
                View Projects
              </Link>
              <a href={Resume} target="_blank" className="cursor-pointer px-6 py-3 bg-card hover:bg-highlight text-slate-300 hover:text-white border border-transparent rounded-lg font-medium transition-colors flex items-center gap-2">
                <Download size={18} /> Download Resume
              </a>
              <a href="https://www.linkdein.com/in/weiqin-yang-1a666b112" target="_blank" className="cursor-pointer px-6 py-3 bg-card hover:bg-highlight text-slate-300 hover:text-white border border-transparent rounded-lg font-medium transition-colors flex items-center gap-2">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-80 h-96 md:w-96 md:h-[30rem]">
               <img 
                 src={WeiqinYang}
                 alt="Weiqin Yang" 
                 className="w-full h-full object-cover rounded-xl"
               />
               <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-backgro to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
            <MapPin size={16} />
            <span>Based in Vancouver · Remote friendly</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {['DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Reaper', 'Pro Tools'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-background text-slate-300 rounded-lg text-sm border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;