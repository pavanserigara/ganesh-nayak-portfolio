import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA, PROFILE_IMAGE_URL, PERSONAL_DETAILS } from '../constants';
import { Award, BookOpen, User, Star, Music, Puzzle, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream-50 relative">
      <div className="container mx-auto px-6">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full mx-auto aspect-[3/4] max-w-sm rounded-sm p-3 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500 border border-slate-200">
              <div className="w-full h-full overflow-hidden border border-slate-100">
                  <img 
                    src={PROFILE_IMAGE_URL} 
                    alt="Ganesh Nayak" 
                    className="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-gold-500/30 rounded-sm"></div>
            <div className="absolute -bottom-10 -right-4 bg-navy-900 p-6 shadow-2xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-1">
                    <Star className="text-gold-400 fill-gold-400" size={20}/>
                    <Star className="text-gold-400 fill-gold-400" size={20}/>
                    <Star className="text-gold-400 fill-gold-400" size={20}/>
                </div>
                <h4 className="font-serif font-bold text-2xl text-white">8+ Years</h4>
                <p className="text-slate-400 text-sm font-mono uppercase tracking-wide">Experience</p>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
               <span className="px-3 py-1 bg-gold-100 text-gold-700 font-bold uppercase tracking-widest text-xs rounded-sm">About Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-8 leading-tight">
              A Dedicated Academician & <br/>
              <span className="italic text-gold-600 font-academic">Research Scholar</span>
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-10">
                <p className="mb-4">
                  I am <strong className="text-navy-900">Ganesh Nayak</strong>, a seasoned educator with a passion for transforming Commerce and Finance education. 
                  My objective is to foster an environment of intellectual growth where students are empowered with practical skills and ethical values.
                </p>
                <p>
                  With a proactive approach to adopting new technologies and teaching methodologies, I aim to contribute significantly 
                  to the academic community through rigorous research in <span className="text-navy-800 font-semibold">Financial Inclusion</span>, <span className="text-navy-800 font-semibold">Digital Marketing</span>, and <span className="text-navy-800 font-semibold">EdTech</span>.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                    {icon: <User size={18}/>, text: "Student-Centric Approach"},
                    {icon: <BookOpen size={18}/>, text: "Research-Oriented"},
                    {icon: <Award size={18}/>, text: "Continuous Learner"},
                    {icon: <CheckCircle size={18}/>, text: "Industry Aligned"},
                ].map((attr, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-100 shadow-sm hover:border-gold-300 transition-colors rounded-sm">
                        <div className="text-gold-500 bg-gold-50 p-2 rounded-full">{attr.icon}</div>
                        <span className="font-semibold text-navy-900 text-sm">{attr.text}</span>
                    </div>
                ))}
            </div>

            {/* Personal Profile Table */}
            <div className="bg-white border-t-4 border-navy-900 shadow-lg p-6">
                 <h3 className="font-serif font-bold text-lg text-navy-900 mb-4 flex items-center gap-2">
                    <User size={20} className="text-gold-500"/> Personal Profile
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm">
                    <div>
                        <span className="block text-slate-400 text-xs uppercase tracking-wider">Languages</span>
                        <span className="font-medium text-navy-900">{PERSONAL_DETAILS.languages.join(", ")}</span>
                    </div>
                    <div>
                        <span className="block text-slate-400 text-xs uppercase tracking-wider">Hobbies</span>
                        <span className="font-medium text-navy-900">{PERSONAL_DETAILS.hobbies.join(", ")}</span>
                    </div>
                    <div>
                        <span className="block text-slate-400 text-xs uppercase tracking-wider">Date of Birth</span>
                        <span className="font-medium text-navy-900">{PERSONAL_DETAILS.dob}</span>
                    </div>
                    <div>
                        <span className="block text-slate-400 text-xs uppercase tracking-wider">Father's Name</span>
                        <span className="font-medium text-navy-900">{PERSONAL_DETAILS.fatherName}</span>
                    </div>
                 </div>
            </div>
          </motion.div>
        </div>

        {/* Academic Qualification - Redesigned Grid */}
        <div className="relative">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 hidden md:block"></div>
            
            <div className="text-center mb-16">
                 <span className="bg-cream-50 px-4 text-gold-600 font-bold uppercase tracking-widest text-sm relative z-10">Education Timeline</span>
                 <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2 bg-cream-50 inline-block px-4 relative z-10">Academic Qualifications</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {TIMELINE_DATA.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-white p-0 shadow-lg group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
                    >
                        {/* Top Accent Bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-navy-900 to-navy-800 group-hover:from-gold-500 group-hover:to-gold-400 transition-all duration-500"></div>
                        
                        <div className="p-8 flex-1 flex flex-col relative overflow-hidden">
                            {/* Watermark Icon */}
                            <GraduationCap className="absolute -right-4 -bottom-4 text-slate-50 opacity-10 rotate-12 group-hover:scale-110 transition-transform" size={120} />
                            
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <div className="bg-slate-50 text-navy-900 font-bold px-3 py-1 text-xs uppercase tracking-wider border border-slate-200">
                                    {item.year}
                                </div>
                                <div className="text-gold-500 font-serif italic font-bold text-lg">
                                    {item.details.match(/\d+(\.\d+)?%/)?.[0]}
                                </div>
                            </div>

                            <h4 className="text-2xl font-serif font-bold text-navy-900 mb-2 relative z-10 group-hover:text-gold-600 transition-colors">
                                {item.degree}
                            </h4>
                            
                            <div className="mb-6 relative z-10">
                                <p className="text-slate-800 font-medium flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                                    {item.institution}
                                </p>
                                <p className="text-slate-500 text-sm mt-1 ml-4 italic">
                                    {item.board}
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 relative z-10">
                                <p className="text-sm text-slate-600">
                                    {item.details.replace(/Secured \d+(\.\d+)?% \| /, '')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;