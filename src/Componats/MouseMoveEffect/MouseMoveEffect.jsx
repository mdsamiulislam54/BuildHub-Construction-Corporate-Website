import React, { useEffect, useState } from 'react';

const MouseMoveEffect = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPositionX(e.clientX);
      setPositionY(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
     <div
      style={{
        position: 'fixed', // Fix position relative to viewport
        left: `${positionX - 20}px`, // Adjust to center the effect
        top: `${positionY - 20}px`, // Adjust to center the effect
        pointerEvents: 'none', // Don't block other interactions
        zIndex: 9999, // Ensure it's above other elements
        transform: 'translate(-50%, -50%)', // Optional: center the dot at mouse
        width: '20px', // Width of the light effect
        height: '20px', // Height of the light effect
        border:'2px solid gold', // Light yellow color with opacity
        borderRadius: '50%', // Circular shape
         // Light effect shadow
        transition: 'left 0.1s ease, top 0.1s ease, box-shadow 0.3s ease', // Smooth transitions
      }}
    >
      {/* The light effect itself */}
    </div>
  
    </>
   
  );
};

export default MouseMoveEffect;
