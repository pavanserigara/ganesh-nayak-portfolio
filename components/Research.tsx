import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PUBLICATIONS, EVENTS_STATS } from '../constants';
import { ExternalLink, Quote, BookOpen, ChevronDown, ChevronUp, FileText } from 'lucide-react';

const Research: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="py-24 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-texture-dots opacity-20 pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-white/10 pb-12">
            {EVENTS_STATS.map((stat, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center group"
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-gold-400 mb-2 group-hover:text-white transition-colors">
                        {stat.value}<span className="text-2xl">{stat.suffix}</span>
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-medium">{stat.label}</p>
                </motion.div>
            ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-gold-400 font-bold uppercase tracking-widest text-sm">Scholarly Contributions</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">Published Papers</h2>
            </div>
            <a href="https://scholar.google.com/citations?hl=en&user=TcttpLQAAAAJ" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-gold-400 hover:text-white transition-colors mt-4 md:mt-0 border-b border-gold-400 pb-1 hover:border-white">
                Visit Google Scholar <ExternalLink size={16}/>
            </a>
        </div>

        <div className="grid grid-cols-1 gap-6">
            {PUBLICATIONS.map((pub, idx) => (
                <motion.div 
                    key={pub.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative bg-navy-900 rounded-sm border-l-4 transition-all duration-300 shadow-lg overflow-hidden ${
                        expandedId === pub.id ? 'border-gold-500 bg-navy-800' : 'border-gold-500/50 hover:bg-navy-800'
                    }`}
                >
                    <div className="p-6 md:p-8 relative z-10">
                        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote size={40} />
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                            <div className="flex-1 z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-white/10 rounded text-xs text-gold-300 font-mono border border-white/5">
                                        {pub.year}
                                    </span>
                                    <span className="text-teal-300 text-sm italic font-academic">{pub.journal}</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-white group-hover:text-gold-200 transition-colors leading-snug">
                                    {pub.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {pub.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-navy-950 text-slate-400 rounded-sm border border-navy-700">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-3 min-w-max z-10">
                                <p className="text-xs text-slate-500 font-mono hidden md:block">{pub.doi}</p>
                                <button 
                                    onClick={() => toggleExpand(pub.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold tracking-wider uppercase transition-all ${
                                        expandedId === pub.id 
                                        ? 'bg-gold-500 text-navy-900' 
                                        : 'bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 border border-white/10'
                                    }`}
                                >
                                    {expandedId === pub.id ? 'Hide Abstract' : 'Read Abstract'}
                                    {expandedId === pub.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                        {expandedId === pub.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 md:px-8 pb-8 pt-0 border-t border-white/5">
                                    <div className="pt-6 flex gap-4">
                                        <div className="shrink-0 mt-1 text-gold-500">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-gold-400 font-bold mb-2 text-sm uppercase tracking-widest">Abstract & Key Findings</h4>
                                            <p className="text-slate-300 leading-relaxed font-light text-lg">
                                                {pub.abstract}
                                            </p>
                                            <div className="mt-4 flex gap-4">
                                                 {pub.doi !== "UGC Approved" && (
                                                    <span className="text-xs text-slate-500 font-mono">
                                                        DOI/ISBN: <span className="text-slate-300">{pub.doi}</span>
                                                    </span>
                                                 )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
        
         <div className="mt-12 text-center">
            <p className="text-slate-400 italic text-sm">
                * Presented papers on Demonetization, Financial Inclusion, and Research Methodology at various National & International Seminars.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Research;