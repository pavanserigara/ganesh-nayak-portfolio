import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';

const ResearchProfiles: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Google Scholar":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          </svg>
        );
      case "ResearchGate":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.564.376-.932.88-1.106 1.512l-.06.218h-2.181v6.786h-2.215V2.858h-2.738v10.612h2.261v-1.17h2.693v3.916H8.928V8.752h-2.26v12.39h7.502v-3.794h2.247l.033.155c.164.79.516 1.442 1.055 1.955.54.513 1.258.77 2.155.77 1.241 0 2.18-.466 2.815-1.4.635-.933.952-2.334.952-4.202 0-1.78-.316-3.132-.947-4.053-.632-.921-1.57-1.381-2.815-1.381-.84 0-1.532.228-2.075.684l-.078.068v-3.41h2.215c.61 0 1.135-.17 1.574-.51.439-.34.658-.783.658-1.327 0-.583-.223-1.036-.67-1.358-.446-.322-1.025-.483-1.734-.483z"/>
          </svg>
        );
      case "ORCID":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 17.623c-.718 0-1.3-.58-1.3-1.299 0-.718.582-1.299 1.3-1.299.719 0 1.301.581 1.301 1.299 0 .719-.582 1.299-1.301 1.299zm3.846-1.528H9.366V7.906h1.849v8.189zm5.965-3.328c0 2.216-1.096 3.424-3.303 3.424h-1.767V7.906h1.921c2.11 0 3.149 1.182 3.149 3.393v1.467z"/>
          </svg>
        );
      case "Vidwan":
        return (
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
           </svg>
        );
      default:
        return <LinkIcon className="w-16 h-16" />;
    }
  };

  const getBrandColors = (name: string) => {
    switch (name) {
      case "Google Scholar": return { text: "group-hover:text-[#4285F4]", hex: "#4285F4" };
      case "ResearchGate": return { text: "group-hover:text-[#00CCBB]", hex: "#00CCBB" };
      case "ORCID": return { text: "group-hover:text-[#A6CE39]", hex: "#A6CE39" };
      case "Vidwan": return { text: "group-hover:text-[#F37021]", hex: "#F37021" };
      default: return { text: "group-hover:text-gold-400", hex: "#fbbf24" };
    }
  };

  return (
    <section className="py-24 bg-navy-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-texture-dots opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">Connect & Follow</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">Research Profiles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {SOCIAL_LINKS.map((link, idx) => {
                const colors = getBrandColors(link.name);
                return (
                    <motion.a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group bg-navy-900 border border-white/5 p-10 rounded-lg flex flex-col items-center justify-center text-center gap-6 hover:border-white/20 hover:bg-navy-800 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                            style={{ backgroundColor: colors.hex }}
                        ></div>
                        
                        <div className={`text-slate-400 transition-colors duration-300 transform group-hover:scale-110 ${colors.text}`}>
                            {getIcon(link.name)}
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">{link.name}</h3>
                            <span className="text-xs text-slate-500 uppercase tracking-wider flex items-center justify-center gap-1 group-hover:text-gold-400 transition-colors">
                                View Profile <ExternalLink size={10} />
                            </span>
                        </div>
                    </motion.a>
                );
            })}
        </div>
      </div>
    </section>
  );
};

export default ResearchProfiles;