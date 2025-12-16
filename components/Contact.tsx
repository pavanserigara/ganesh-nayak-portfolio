import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Research Collaboration',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clean phone number (remove all non-digits)
    const phoneNumber = CONTACT_INFO.phone.replace(/[^0-9]/g, '');
    
    // Construct the WhatsApp message
    const messageText = `*New Inquiry from Academic Portfolio*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`;
      
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Abstract Map Graphic */}
      <div className="absolute right-0 bottom-0 opacity-5">
         <svg width="400" height="400" viewBox="0 0 200 200">
             <path fill="currentColor" d="M45,-76C58,-69,68,-57,75,-44C82,-31,86,-17,85,-3C84,11,78,25,69,37C60,49,48,59,35,66C22,73,8,77,-5,76C-18,75,-31,69,-42,60C-53,51,-62,39,-68,26C-74,13,-77,-1,-73,-13C-69,-25,-58,-35,-47,-43C-36,-51,-25,-57,-13,-59C-1,-61,11,-60,23,-58Z" transform="translate(100 100)" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Info Side */}
            <div>
                <span className="text-gold-400 font-bold uppercase tracking-widest text-sm">Contact Information</span>
                <h2 className="text-4xl font-serif font-bold mt-2 mb-6">Let's Connect</h2>
                <p className="text-slate-300 mb-10 text-lg leading-relaxed font-light">
                    I am available for guest lectures, research collaborations, and academic consultancy.
                    Feel free to reach out via email, phone, or WhatsApp.
                </p>

                <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-400 border border-white/10 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                            <Mail size={22}/>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-gold-400 transition-colors font-mono">{CONTACT_INFO.email}</a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-400 border border-white/10 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                            <Phone size={22}/>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Mobile Number</p>
                            <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-medium hover:text-gold-400 transition-colors font-mono">{CONTACT_INFO.phone}</a>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-5 group">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold-400 border border-white/10 group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors">
                            <MapPin size={22}/>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Residence</p>
                            <p className="text-lg font-medium leading-snug">{CONTACT_INFO.address}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-lg text-white">Research Profiles</h4>
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map((link, idx) => (
                            <a 
                                key={idx} 
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all font-serif font-bold text-xl"
                                title={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-cream-50 text-navy-900 p-8 md:p-10 rounded-sm shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900"></div>
                <h3 className="text-2xl font-serif font-bold mb-6">Send a WhatsApp Message</h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-all"
                                placeholder="Prof. John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-navy-900 focus:ring-1 focus:ring-navy-900 transition-all"
                                placeholder="john@university.edu"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">Subject</label>
                        <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-navy-900 transition-all"
                        >
                            <option value="Research Collaboration">Research Collaboration</option>
                            <option value="Guest Lecture Invite">Guest Lecture Invite</option>
                            <option value="Student Inquiry">Student Inquiry</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-navy-700 uppercase tracking-wider mb-2">Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:border-navy-900 transition-all resize-none"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="w-full py-4 bg-navy-900 text-white font-bold rounded-sm hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                        Send via WhatsApp <Send size={18}/>
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;