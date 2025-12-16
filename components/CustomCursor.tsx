import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable = 
            target.tagName === 'A' || 
            target.tagName === 'BUTTON' || 
            target.closest('a') || 
            target.closest('button') ||
            target.classList.contains('cursor-pointer');
            
        setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
        <style>{`
            /* Only hide default cursor on desktop devices with fine pointers */
            @media (pointer: fine) {
                body, a, button, input, textarea, select { 
                    cursor: none !important; 
                }
            }
        `}</style>
        
        {/* Main Dot - The sharp pointer */}
        <motion.div
            className="fixed top-0 left-0 w-2.5 h-2.5 bg-gold-400 rounded-full pointer-events-none z-[9999] hidden md:block"
            animate={{
                x: mousePosition.x - 5,
                y: mousePosition.y - 5,
                scale: isClicking ? 0.8 : (isHovering ? 0 : 1), // Disappear when hovering interactive elements to let ring take over or focus
                opacity: isHovering ? 0 : 1
            }}
            transition={{
                type: "tween",
                ease: "backOut",
                duration: 0.1
            }}
        />

        {/* Fluid Outer Ring */}
        <motion.div
            className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9998] hidden md:block backdrop-blur-[1px]"
            style={{
                background: isHovering ? 'rgba(251, 191, 36, 0.1)' : 'transparent',
            }}
            animate={{
                x: mousePosition.x - (isHovering ? 24 : 12),
                y: mousePosition.y - (isHovering ? 24 : 12),
                width: isHovering ? 48 : 24,
                height: isHovering ? 48 : 24,
                borderColor: isHovering ? '#fbbf24' : '#fbbf2480',
                borderWidth: isHovering ? '1.5px' : '1px',
                scale: isClicking ? 0.9 : 1
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.5
            }}
        />
        
        {/* Trailing Glow for extra elegance */}
        <motion.div 
            className="fixed top-0 left-0 w-8 h-8 bg-gold-500/20 rounded-full blur-xl pointer-events-none z-[9997] hidden md:block"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
            }}
        />
    </>
  );
};

export default CustomCursor;