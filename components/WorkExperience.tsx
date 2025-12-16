import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-gold-600 font-bold uppercase tracking-widest text-sm">Career Path</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">Teaching Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {EXPERIENCE_DATA.map((job, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-gold-500 group"
                >
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-navy-50 text-navy-900 rounded-lg group-hover:bg-navy-900 group-hover:text-white transition-colors">
                            <Briefcase size={24} />
                        </div>
                        <span className="text-sm font-medium text-slate-400 flex items-center gap-1">
                            <Calendar size={14}/> {job.period}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-1">{job.role}</h3>
                    <h4 className="text-lg text-gold-600 font-medium mb-4">{job.institution}</h4>
                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {job.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                        {job.type}
                    </span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
