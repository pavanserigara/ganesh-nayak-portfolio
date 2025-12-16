import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { ChevronDown, ChevronUp, Award, GraduationCap } from 'lucide-react';

const SkillsAndCerts: React.FC = () => {
  const [activeCertCategory, setActiveCertCategory] = useState<string | null>(CERTIFICATIONS[0].category);

  return (
    <section id="skills" className="py-24 bg-white bg-texture-graph">
      <div className="container mx-auto px-6">
        
        {/* Skills & Certs Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Skills */}
            <div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-8 flex items-center gap-3">
                    <span className="w-10 h-1 bg-gold-500 block"></span> Technical Expertise
                </h3>
                <div className="space-y-6">
                    {SKILLS.map((skill, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between mb-2 items-center">
                                <span className="font-bold text-navy-900 flex items-center gap-2">
                                    <span className="text-gold-500">{skill.icon}</span> {skill.name}
                                </span>
                                <span className="text-sm text-slate-500 font-mono">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="h-full bg-navy-900 rounded-full relative"
                                >
                                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/30 to-transparent"></div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-10 p-6 bg-cream-100 border border-gold-300/30 rounded-lg">
                    <h4 className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                        <GraduationCap size={20} className="text-gold-600"/> Teaching Philosophy
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed italic">
                        "To improve the standard of profession and empowering students with necessary skills, qualities, knowledge, attitude and value of time."
                    </p>
                </div>
            </div>

            {/* Right: Certifications */}
            <div>
                 <h3 className="text-2xl font-serif font-bold text-navy-900 mb-8 flex items-center gap-3">
                    <span className="w-10 h-1 bg-gold-500 block"></span> Continuous Learning (FDPs)
                </h3>
                <div className="space-y-3">
                    {CERTIFICATIONS.map((cert) => (
                        <div key={cert.category} className="border border-slate-200 bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <button 
                                onClick={() => setActiveCertCategory(activeCertCategory === cert.category ? null : cert.category)}
                                className={`w-full flex justify-between items-center p-4 text-left font-semibold transition-colors ${
                                    activeCertCategory === cert.category ? 'bg-navy-900 text-white' : 'bg-white text-navy-900 hover:bg-slate-50'
                                }`}
                            >
                                {cert.category}
                                {activeCertCategory === cert.category ? <ChevronUp size={20}/> : <ChevronDown size={20}/>}
                            </button>
                            <AnimatePresence>
                                {activeCertCategory === cert.category && (
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2">
                                            {cert.items.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 text-slate-700 text-sm py-1 border-b border-slate-200/50 last:border-0">
                                                    <Award size={16} className="text-gold-500 mt-0.5 shrink-0"/>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsAndCerts;