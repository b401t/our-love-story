import { useMemo } from 'react';

const FLOWER_PATHS = [
  // 5-petal flower
  'M16 0C16 6 12 8 12 8C12 8 16 10 16 16C16 10 20 8 20 8C20 8 16 6 16 0Z M8 4C10.5 8 8 13 8 13C8 13 13 11.5 16 8C13 11.5 13 16 13 16C13 16 18 13 20 9C18 13 20 18 20 18C20 18 24 15 24 10C24 15 28 18 28 18C28 18 24 20 20 25C24 22 28 22 28 22C28 22 24 26 20 32C24 28 20 24 20 24C20 24 18 28 14 32C16 27 16 24 16 24C16 24 12 28 8 32C10 27 8 24 8 24C8 24 4 28 0 32C4 26 0 22 0 22C0 22 4 22 8 25C4 20 0 18 0 18C0 18 4 15 8 10C4 15 0 18 0 18C0 18 3.5 13 6 9C8 13 8 13 8 13C8 13 5.5 8 8 4Z',
  // Simple rounded flower
  'M16 2C16 8 10 10 10 10C10 10 16 12 16 20C16 12 22 10 22 10C22 10 16 8 16 2Z',
];

const PETAL_COLORS = [
  '#e8d5f5', '#d4b8f0', '#c9b1ff', '#ffd6e0',
  '#ffc2d1', '#ffb3c6', '#f3edfa', '#ffe0e8',
];

function WitheredFlower({ style, variant }) {
  const path = FLOWER_PATHS[variant % FLOWER_PATHS.length];

  return (
    <div
      className="floating-flower"
      style={{
        ...style,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(176,136,240,0.2))',
        }}
      >
        {/* Stem */}
        <line
          x1="16" y1="18" x2="16" y2="32"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Small leaf */}
        <ellipse
          cx="12" cy="24" rx="4" ry="2"
          fill="currentColor"
          opacity="0.3"
          transform="rotate(-30 12 24)"
        />
        {/* Petals */}
        <circle cx="16" cy="10" r="5" fill="currentColor" opacity="0.7" />
        <circle cx="10" cy="14" r="4.5" fill="currentColor" opacity="0.65" />
        <circle cx="22" cy="14" r="4.5" fill="currentColor" opacity="0.65" />
        <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.55" />
        <circle cx="20" cy="8" r="4" fill="currentColor" opacity="0.55" />
        {/* Center */}
        <circle cx="16" cy="11" r="2.5" fill="currentColor" opacity="0.85" />
      </svg>
    </div>
  );
}

export default function FloatingFlowers({ count = 18 }) {
  const flowers = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const size = 20 + Math.random() * 32;
      const left = Math.random() * 100;
      const delay = Math.random() * 18;
      const duration = 10 + Math.random() * 16;
      const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      const opacity = 0.2 + Math.random() * 0.35;
      const variant = i;

      return {
        id: i,
        variant,
        style: {
          position: 'absolute',
          top: '-60px',
          left: `${left}%`,
          width: `${size}px`,
          height: `${size * 1.4}px`,
          color: color,
          opacity: opacity,
          animation: `petalFall ${duration}s ${delay}s ease-in infinite`,
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
      {flowers.map((flower) => (
        <WitheredFlower
          key={flower.id}
          style={flower.style}
          variant={flower.variant}
        />
      ))}
    </div>
  );
}
