import React from 'react';
import { motion } from 'framer-motion';
import { MEDIA_COVERAGE } from '../constants';
import { Newspaper, ExternalLink, Calendar } from 'lucide-react';

const MediaCoverage: React.FC = () => {
  return (
    <section id="media" className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">In The News</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">Media Coverage & Reports</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Featuring highlights of academic events, NSS activities, and expert lectures covered by leading regional news portals.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDIA_COVERAGE.map((item, idx) => (
                <motion.a 
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full"
                >
                    {/* Thumbnail Area */}
                    <div className="h-48 bg-navy-900 relative overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-60"></div>
                        
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100">
                             <ExternalLink size={16} />
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-4">
                            <span className="inline-block px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-sm shadow-sm uppercase tracking-wider">
                                {item.source}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-wider mb-3">
                            <Calendar size={12} />
                            <span>{item.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors leading-tight line-clamp-2">
                            {item.title}
                        </h3>
                        <div className="mt-auto pt-4 border-t border-slate-50">
                            <span className="text-sm font-semibold text-slate-500 group-hover:text-navy-900 transition-colors flex items-center gap-2">
                                Read Full Article <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"/>
                            </span>
                        </div>
                    </div>
                </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;