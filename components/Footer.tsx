import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 py-8 border-t border-white/5 text-slate-400 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Ganesh Nayak. All rights reserved.</p>
        <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Academic Integrity</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
