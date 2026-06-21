import { useMemo } from 'react';

const HEART_COLORS = [
  '#ffb3c6',
  '#ffc2d1',
  '#ffd6e0',
  '#f595aa',
  '#e8708a',
  '#c9b1ff',
  '#d4b8f0',
  '#e8d5f5',
];

function Heart({ style }) {
  return (
    <div
      className="floating-heart"
      style={style}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 28C16 28 4 20 4 12C4 7.58 7.58 4 12 4C14.83 4 17.3 5.5 18.3 7.5C18.77 8.35 19.23 8.35 19.7 7.5C20.7 5.5 23.17 4 26 4C30.42 4 34 7.58 34 12C34 20 22 28 16 28Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default function FloatingHearts({ count = 25 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = 10 + Math.random() * 28;
      const left = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = 8 + Math.random() * 14;
      const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
      const opacity = 0.15 + Math.random() * 0.35;
      const rotation = Math.random() * 360;

      return {
        id: i,
        style: {
          position: 'absolute',
          bottom: '-40px',
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          color: color,
          opacity: opacity,
          animation: `floatUpFade ${duration}s ${delay}s ease-in infinite`,
          transform: `rotate(${rotation}deg)`,
          filter: 'blur(0.5px)',
          zIndex: 0,
        },
      };
    });
  }, [count]);

  return (
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
      {hearts.map((heart) => (
        <Heart key={heart.id} style={heart.style} />
      ))}
    </div>
  );
}
