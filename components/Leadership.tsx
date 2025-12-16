import React from 'react';
import { motion } from 'framer-motion';
import { RESPONSIBILITIES } from '../constants';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-cream-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Side */}
            <div className="lg:col-span-4">
                <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">Service & Administration</span>
                <h2 className="text-4xl font-serif font-bold text-navy-900 mt-2 mb-6">Institutional Leadership</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    Committed to institutional excellence through active participation in administrative roles, student welfare committees, and social service organizations.
                </p>
                <div className="p-6 bg-white border-l-4 border-gold-500 shadow-lg rounded-r-lg">
                    <p className="italic text-navy-800 font-medium">
                        "Leadership in education is about creating opportunities for others to grow."
                    </p>
                </div>
            </div>

            {/* Grid Side */}
            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {RESPONSIBILITIES.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group"
                        >
                            <div className="shrink-0 w-12 h-12 bg-navy-50 text-navy-900 rounded-full flex items-center justify-center group-hover:bg-navy-900 group-hover:text-gold-400 transition-all duration-300">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-navy-900 text-lg mb-1 group-hover:text-gold-600 transition-colors">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-snug">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;