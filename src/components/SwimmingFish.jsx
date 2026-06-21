import { useMemo } from 'react';

const FISH_COLORS = [
  { body: '#ffb3c6', fin: '#f595aa', eye: '#4a3f52' },
  { body: '#c9b1ff', fin: '#b088f0', eye: '#4a3f52' },
  { body: '#ffd6e0', fin: '#ffc2d1', eye: '#4a3f52' },
  { body: '#d4b8f0', fin: '#c9b1ff', eye: '#4a3f52' },
  { body: '#ffe0e8', fin: '#ffb3c6', eye: '#4a3f52' },
];

function FishSVG({ colors, size }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tail fin */}
      <path
        d="M5 30L20 14L20 46L5 30Z"
        fill={colors.fin}
        opacity="0.8"
      />
      {/* Body */}
      <ellipse cx="52" cy="30" rx="38" ry="20" fill={colors.body} opacity="0.75" />
      {/* Dorsal fin */}
      <path
        d="M35 12C42 4 60 4 65 12"
        fill={colors.fin}
        opacity="0.7"
        stroke={colors.fin}
        strokeWidth="1"
      />
      {/* Eye */}
      <circle cx="76" cy="26" r="4" fill={colors.eye} opacity="0.8" />
      <circle cx="77" cy="25" r="1.5" fill="white" opacity="0.9" />
      {/* Mouth */}
      <path
        d="M89 31C87 33 84 34 82 33"
        stroke={colors.eye}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Bubbles */}
      <circle cx="92" cy="20" r="2" fill={colors.body} opacity="0.35" />
      <circle cx="96" cy="14" r="1.5" fill={colors.body} opacity="0.25" />
      <circle cx="94" cy="8" r="1" fill={colors.body} opacity="0.18" />
    </svg>
  );
}

export default function SwimmingFish({ count = 8 }) {
  const fishes = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = 40 + Math.random() * 70;
      const top = 5 + Math.random() * 88; // percentage from top
      const delay = Math.random() * 20;
      const duration = 15 + Math.random() * 20;
      const colors = FISH_COLORS[Math.floor(Math.random() * FISH_COLORS.length)];
      const reversed = Math.random() > 0.5;
      const animName = reversed ? 'swimHorizontalRev' : 'swimHorizontal';

      return {
        id: i,
        colors,
        size,
        reversed,
        style: {
          position: 'absolute',
          top: `${top}%`,
          left: 0,
          animation: `${animName} ${duration}s ${delay}s linear infinite`,
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
      {fishes.map((fish) => (
        <div key={fish.id} style={fish.style}>
          <FishSVG colors={fish.colors} size={fish.size} />
        </div>
      ))}
    </div>
  );
}
