import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, TrendingUp, BarChart2, PieChart, Globe, BookOpen, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy-950 text-white pt-20">
        
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,34,64,0)_0%,_rgba(2,6,23,0.8)_100%)] z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-texture-dots opacity-30 pointer-events-none"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gold-500/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-teal-500/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        
        {/* Commerce 3D Elements */}
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[10%] text-gold-500/10 hidden lg:block"
        >
          <BarChart2 size={180} strokeWidth={1} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 40, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[5%] text-teal-400/10 hidden lg:block"
        >
          <Globe size={200} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
            style={{ y, opacity }}
            className="text-center max-w-5xl mx-auto"
        >
           {/* Top Tagline */}
           <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
           >
             <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
             <span className="text-gold-400 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
                Welcome to my academic profile
             </span>
             <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
           </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 tracking-tight"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400">
              Ganesh Nayak
            </span>
          </motion.h1>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="relative inline-block mb-10"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-teal-400 rounded-lg blur opacity-20"></div>
             <div className="relative bg-navy-900/50 backdrop-blur-sm border border-white/10 px-6 py-4 rounded-lg">
                <p className="text-xl md:text-2xl text-slate-200 font-light font-academic italic">
                  "Empowering <span className="text-gold-400 font-normal">Commerce Education</span> Through <br className="hidden md:block"/>
                  Research & Innovation"
                </p>
             </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8 }}
             className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a href="#about" className="group relative px-8 py-3 bg-gold-500 text-navy-900 rounded-sm font-bold overflow-hidden shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]">
               <div className="absolute inset-0 w-full h-full bg-white/30 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 origin-left"></div>
               <span className="relative">Explore Profile</span>
            </a>
            <a href="#research" className="px-8 py-3 border border-white/20 text-white rounded-sm font-bold hover:bg-white/5 transition-all flex items-center gap-3 group">
              View Publications 
              <span className="bg-white/10 p-1 rounded-full group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                 <TrendingUp size={14} />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-navy-900/80 backdrop-blur-md border-t border-white/5 py-4 overflow-hidden z-20">
        <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 mx-6 text-slate-400 text-sm font-mono uppercase tracking-widest">
                    <span className="flex items-center gap-2"><BookOpen size={14} className="text-gold-500"/> Commerce</span>
                    <span className="flex items-center gap-2"><BarChart2 size={14} className="text-teal-400"/> Finance</span>
                    <span className="flex items-center gap-2"><Award size={14} className="text-gold-500"/> Research</span>
                    <span className="flex items-center gap-2"><TrendingUp size={14} className="text-teal-400"/> Economics</span>
                </div>
            ))}
        </div>
      </div>
      
      {/* CSS for scroll animation if not in tailwind config */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;