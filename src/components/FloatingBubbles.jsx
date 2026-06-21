import { useState, useEffect, useCallback, useRef } from 'react';

const BUBBLE_COLORS = [
  { fill: '#c9b1ff', glow: 'rgba(201,177,255,0.6)' },
  { fill: '#ffb3c6', glow: 'rgba(255,179,198,0.6)' },
  { fill: '#d4b8f0', glow: 'rgba(212,184,240,0.6)' },
  { fill: '#ffd6e0', glow: 'rgba(255,214,224,0.6)' },
  { fill: '#b088f0', glow: 'rgba(176,136,240,0.55)' },
  { fill: '#f595aa', glow: 'rgba(245,149,170,0.55)' },
  { fill: '#e8d5f5', glow: 'rgba(232,213,245,0.6)' },
  { fill: '#ffc2d1', glow: 'rgba(255,194,209,0.6)' },
  { fill: '#a8d8ea', glow: 'rgba(168,216,234,0.55)' },
  { fill: '#b5e3f0', glow: 'rgba(181,227,240,0.55)' },
  { fill: '#c4e8f5', glow: 'rgba(196,232,245,0.55)' },
  { fill: '#d4effa', glow: 'rgba(212,239,250,0.5)' },
];

let idCounter = 0;

function makeBubble(side) {
  const size = 22 + Math.random() * 44;
  const c = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];
  const drift = (Math.random() - 0.5) * 100;
  const duration = 6 + Math.random() * 7;
  const delay = Math.random() * 0.6;
  const leftBase = side === 'left'
    ? 3 + Math.random() * 12
    : 85 + Math.random() * 12;

  return {
    id: ++idCounter,
    style: {
      position: 'absolute',
      bottom: '-60px',
      left: `${leftBase}%`,
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7) 0%, ${c.fill} 40%, ${c.fill}88 100%)`,
      borderRadius: '50%',
      border: '1.5px solid rgba(255,255,255,0.5)',
      boxShadow: `inset -2px -2px 6px rgba(255,255,255,0.35), inset 1px 1px 4px rgba(255,255,255,0.25), 0 0 16px ${c.glow}`,
      opacity: 0,
      animation: `bubbleFloat ${duration}s ${delay}s ease-out forwards`,
      '--drift': `${drift}px`,
      pointerEvents: 'none',
      zIndex: 0,
    },
  };
}

export default function FloatingBubbles({ intervalMs = 3000 }) {
  const [bubbles, setBubbles] = useState([]);
  const timersRef = useRef([]);

  const spawnBubble = useCallback(() => {
    const side = Math.random() > 0.5 ? 'left' : 'right';
    const bubble = makeBubble(side);
    setBubbles((prev) => {
      const kept = prev.slice(-14);
      return [...kept, bubble];
    });

    // Auto-remove after animation
    const removeTimer = setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
    }, 15000);

    timersRef.current.push(removeTimer);
  }, []);

  useEffect(() => {
    // Spawn first bubble quickly, then on interval
    const initial = setTimeout(spawnBubble, 500);
    const interval = setInterval(spawnBubble, intervalMs);

    timersRef.current.push(initial);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
      timersRef.current.forEach(clearTimeout);
    };
  }, [spawnBubble, intervalMs]);

  return (
    <>
      {/* Inject keyframe once */}
      <style>{`
        @keyframes bubbleFloat {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          8% {
            opacity: 0.7;
            transform: translateY(-6vh) translateX(calc(var(--drift) * 0.15)) scale(0.85);
          }
          25% {
            opacity: 0.5;
            transform: translateY(-25vh) translateX(calc(var(--drift) * 0.4)) scale(1);
          }
          60% {
            opacity: 0.25;
            transform: translateY(-65vh) translateX(calc(var(--drift) * 0.7)) scale(1.1);
          }
          100% {
            transform: translateY(-105vh) translateX(var(--drift)) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {bubbles.map((b) => (
          <div key={b.id} style={b.style} />
        ))}
      </div>
    </>
  );
}
