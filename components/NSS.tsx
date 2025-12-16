import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { NSS_ACTIVITIES, NSS_LOGO_URL } from '../constants';
import { Users, Flag } from 'lucide-react';

// Counter Component for animation
const Counter: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const NSS: React.FC = () => {
  return (
    <section id="nss" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-50 text-navy-900 rounded-full mb-3 border border-navy-100">
                <Flag size={14} className="fill-navy-900"/>
                <span className="text-xs font-bold uppercase tracking-wider">Community Service</span>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg p-2 flex items-center justify-center border border-slate-100">
                 <img src={NSS_LOGO_URL} alt="NSS Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              National Service Scheme (NSS)
            </h2>
            <p className="text-xl font-academic italic text-slate-600">
              "Not Me, But You"
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-navy-900 to-gold-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg text-slate-600"
            >
                <p className="lead">
                    As an <strong className="text-navy-900">NSS Program Officer</strong>, I have had the privilege of leading one of the most vibrant youth movements in the country. My role involves channeling the energy of young students towards nation-building and social welfare.
                </p>
                <p>
                    Through regular activities and special camping programs, we aim to instill a sense of civic responsibility, discipline, and empathy in students. Our initiatives range from village adoption schemes to emergency relief operations, ensuring that education extends beyond the four walls of the classroom.
                </p>
                
                <div className="not-prose mt-8 flex gap-6 md:gap-12">
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-navy-900 flex items-baseline">
                           <Counter end={12} duration={2} suffix="+" />
                        </span>
                        <span className="text-xs uppercase tracking-wide text-slate-500 font-bold mt-1">Special Camps</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-navy-900 flex items-baseline">
                            <Counter end={150} duration={2.5} suffix="+" />
                        </span>
                        <span className="text-xs uppercase tracking-wide text-slate-500 font-bold mt-1">Volunteers</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold text-navy-900 flex items-baseline">
                            <Counter end={30} duration={2} suffix="+" />
                        </span>
                        <span className="text-xs uppercase tracking-wide text-slate-500 font-bold mt-1">Outreach Events</span>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {NSS_ACTIVITIES.map((activity, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                    >
                        <div className={`w-12 h-12 ${activity.bg} rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                            {activity.icon}
                        </div>
                        <h3 className="font-bold text-navy-900 text-lg mb-2">{activity.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {activity.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Quote Banner */}
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-texture-dots opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
                <Users className="w-12 h-12 text-gold-500 mx-auto mb-6 opacity-80" />
                <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6">
                    "The best way to find yourself is to lose yourself in the service of others."
                </blockquote>
                <cite className="text-gold-400 font-medium not-italic tracking-wider uppercase text-sm">- Mahatma Gandhi</cite>
            </div>
        </div>

      </div>
    </section>
  );
};

export default NSS;