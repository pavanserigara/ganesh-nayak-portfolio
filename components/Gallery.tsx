import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_SECTIONS } from '../constants';
import { Camera, Eye, MapPin, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{url: string; caption: string} | null>(null);

  return (
    <section id="gallery" className="py-24 bg-navy-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">Moments & Memories</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2 flex items-center justify-center gap-3">
                <Camera className="text-gold-500" size={32}/> Academic Gallery
            </h2>
        </div>

        <div className="space-y-20">
            {GALLERY_SECTIONS.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                    <div className="mb-8 border-l-4 border-gold-500 pl-4">
                        <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                        <p className="text-slate-400 flex items-center gap-2">
                             <MapPin size={16} className="text-gold-500"/>
                             {section.location}
                        </p>
                    </div>

                    {/* Grid updated to display 6 images as 2 rows of 3 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {section.images.map((img, imgIdx) => (
                            <motion.div 
                                key={imgIdx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: imgIdx * 0.05, duration: 0.5 }}
                                className="relative group aspect-[4/3] overflow-hidden rounded-md bg-navy-900 border border-white/5 cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img 
                                    src={img.url} 
                                    alt={img.caption}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                                    loading="lazy"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-2 transform translate-y-4 group-hover:translate-y-0">
                                    <div className="p-3 rounded-full bg-gold-500 text-navy-900 mb-2 shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                        <Eye size={20} />
                                    </div>
                                    <p className="text-white font-serif font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 px-4">
                                        {img.caption}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
                className="fixed inset-0 z-[110] bg-navy-950/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 sm:p-8"
            >
                <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 text-white/70 hover:text-gold-500 transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                >
                    <X size={32} />
                </button>
                
                <motion.img
                    src={selectedImage.url}
                    alt={selectedImage.caption}
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl border-2 border-white/10"
                    onClick={(e) => e.stopPropagation()}
                />
                
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 text-center"
                >
                    <h3 className="text-2xl font-serif text-white mb-2">{selectedImage.caption}</h3>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;