
import React, { useEffect, useRef } from 'react';

const CursorFollower: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${clientX - 20}px, ${clientY - 20}px, 0)`;
      }
    };

    const onMouseEnterLink = () => {
      document.body.classList.add('cursor-hover');
    };

    const onMouseLeaveLink = () => {
      document.body.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Add hover listeners to all current and future links/buttons
    const updateListeners = () => {
        const interactiveElements = document.querySelectorAll('a, button, input, .clickable');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnterLink);
            el.addEventListener('mouseleave', onMouseLeaveLink);
        });
    };

    updateListeners();
    // Re-run periodically for dynamic content
    const interval = setInterval(updateListeners, 1000);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
};

export default CursorFollower;
