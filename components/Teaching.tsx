import React from 'react';
import { motion } from 'framer-motion';
import { TEACHING_INTERESTS, KEY_INITIATIVES } from '../constants';
import { BookOpen, GraduationCap, Star } from 'lucide-react';

const Teaching: React.FC = () => {
  return (
    <section id="teaching" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top translate-x-20 -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">Academic Focus</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">Teaching & Mentorship</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {TEACHING_INTERESTS.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white border border-slate-100 p-8 rounded-lg shadow-sm hover:shadow-xl hover:border-gold-200 transition-all duration-300 group"
                >
                    <div className="w-14 h-14 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">{item.subject}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Key Initiatives Highlight */}
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-texture-dots opacity-10"></div>
            
            <div className="relative z-10 mb-10 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                    <Star className="text-gold-500 fill-gold-500"/> Key Academic Initiatives
                </h3>
                <p className="text-slate-300">Beyond the classroom: Fostering holistic development.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {KEY_INITIATIVES.map((init, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-gold-500 rounded-lg shadow-lg">
                                {init.icon}
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg leading-tight">{init.title}</h4>
                                <span className="text-xs text-gold-400 uppercase tracking-wider">{init.role}</span>
                            </div>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                            {init.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Teaching;