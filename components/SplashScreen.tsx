import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const titles = ["Academic", "Researcher", "Commerce & Finance"];
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setDisplayedTitle(
        isDeleting
          ? fullText.substring(0, displayedTitle.length - 1)
          : fullText.substring(0, displayedTitle.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayedTitle === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedTitle === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, loopNum, titles, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wider mb-6 text-gold-400">
          Ganesh Nayak
        </h1>
        <div className="h-8">
            <p className="text-xl md:text-2xl font-light tracking-widest uppercase border-r-2 border-gold-400 pr-2 inline-block">
            {displayedTitle}
            </p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        onClick={onComplete}
        className="mt-16 px-8 py-3 border border-gold-400 text-gold-400 rounded-full hover:bg-gold-400 hover:text-navy-900 transition-all duration-300 z-10 font-medium tracking-wide"
      >
        Enter Portfolio
      </motion.button>
    </motion.div>
  );
};

export default SplashScreen;