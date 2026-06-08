import React, { useEffect, useState } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Exact durations matching the css animation timings
    const fadeOutTimeout = setTimeout(() => {
      setHidden(true);
    }, 2600);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 3400); // Wait for the transition to finish completely

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div
      id="intro"
      className={`${hidden ? 'hidden' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#020810',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '28px',
        transition: 'opacity 0.8s ease, visibility 0.8s ease',
      }}
    >
      <div className="intro-scales" style={{ width: '100px', height: '100px', position: 'relative' }}>
        <div className="intro-glow" />
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          {/* Stem */}
          <path d="M24 6 L24 42" />
          {/* Crossbar */}
          <path d="M8 16 L40 16" />
          {/* Left arm */}
          <path d="M8 16 L8 28" />
          {/* Right arm */}
          <path d="M40 16 L40 28" />
          {/* Left pan arc */}
          <path d="M2 28 Q8 34 14 28" />
          {/* Right pan arc */}
          <path d="M34 28 Q40 34 46 28" />
          {/* Base */}
          <path d="M16 42 L32 42" />
        </svg>
      </div>
      <div className="intro-wordmark font-serif">LexPK</div>
      <div className="intro-sub font-josefin">Pakistan Legal Intelligence</div>
    </div>
  );
}
