import { useMemo } from 'react';

const FISH_COLORS = [
  { body: '#ffb3c6', belly: '#ffe0e8', spine: '#f595aa', cheek: '#f595aa', fin: '#ffc2d1', eye: '#4a3f52' },
  { body: '#c9b1ff', belly: '#e8d5f5', spine: '#b088f0', cheek: '#b088f0', fin: '#d4b8f0', eye: '#4a3f52' },
  { body: '#ffd6e0', belly: '#fff0f3', spine: '#ffc2d1', cheek: '#ffb3c6', fin: '#ffe0e8', eye: '#4a3f52' },
  { body: '#d4b8f0', belly: '#f3edfa', spine: '#c9b1ff', cheek: '#c9b1ff', fin: '#e8d5f5', eye: '#4a3f52' },
  { body: '#ffe0e8', belly: '#fff5f7', spine: '#ffb3c6', cheek: '#f595aa', fin: '#ffd6e0', eye: '#4a3f52' },
];

function FishSVG({ colors, size }) {
  const w = 100;
  const h = 70;
  const cx = w * 0.45;
  const cy = h * 0.5;
  const bodyRx = 30;
  const bodyRy = 25;

  return (
    <svg
      width={size}
      height={size * (h / w)}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ---- Spines (behind body) ---- */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const sx = cx + (bodyRx - 2) * Math.cos(rad);
        const sy = cy + (bodyRy - 2) * Math.sin(rad);
        const ex = cx + (bodyRx + 8) * Math.cos(rad);
        const ey = cy + (bodyRy + 8) * Math.sin(rad);
        return (
          <line
            key={angle}
            x1={sx}
            y1={sy}
            x2={ex}
            y2={ey}
            stroke={colors.spine}
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        );
      })}

      {/* ---- Tail fin ---- */}
      <path
        d={`M${cx - bodyRx + 4} ${cy} L${cx - bodyRx - 14} ${cy - 14} L${cx - bodyRx - 8} ${cy} L${cx - bodyRx - 14} ${cy + 14} Z`}
        fill={colors.fin}
        opacity="0.7"
      />

      {/* ---- Body (round chubby) ---- */}
      <ellipse cx={cx} cy={cy} rx={bodyRx} ry={bodyRy} fill={colors.body} opacity="0.8" />

      {/* ---- Belly highlight ---- */}
      <ellipse
        cx={cx + 4}
        cy={cy + 8}
        rx={bodyRx * 0.55}
        ry={bodyRy * 0.45}
        fill={colors.belly}
        opacity="0.55"
      />

      {/* ---- Side fin ---- */}
      <ellipse
        cx={cx - 2}
        cy={cy + 12}
        rx="7"
        ry="4"
        fill={colors.fin}
        opacity="0.6"
        transform={`rotate(15 ${cx - 2} ${cy + 12})`}
      />

      {/* ---- Big cute eyes ---- */}
      {/* White of eye */}
      <circle cx={cx + 16} cy={cy - 7} r="9" fill="white" opacity="0.92" />
      {/* Iris */}
      <circle cx={cx + 17} cy={cy - 7} r="5.5" fill={colors.eye} opacity="0.85" />
      {/* Pupil highlight */}
      <circle cx={cx + 19} cy={cy - 9} r="2.2" fill="white" opacity="0.9" />
      {/* Tiny highlight sparkle */}
      <circle cx={cx + 14} cy={cy - 10} r="1.2" fill="white" opacity="0.7" />

      {/* ---- Rosy cheek ---- */}
      <ellipse cx={cx + 10} cy={cy + 4} rx="6" ry="4" fill={colors.cheek} opacity="0.3" />

      {/* ---- Cute mouth (w shape :3) ---- */}
      <path
        d={`M${cx + 21} ${cy + 1} Q${cx + 23} ${cy - 1} ${cx + 25} ${cy + 1} Q${cx + 27} ${cy - 1} ${cx + 29} ${cy + 1}`}
        stroke={colors.eye}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.45"
      />

      {/* ---- Bubbles ---- */}
      <circle cx={cx + 32} cy={cy - 16} r="2.5" fill={colors.body} opacity="0.28" />
      <circle cx={cx + 37} cy={cy - 23} r="1.8" fill={colors.body} opacity="0.2" />
      <circle cx={cx + 34} cy={cy - 30} r="1.2" fill={colors.body} opacity="0.14" />

      {/* ---- Tiny dorsal fin ---- */}
      <path
        d={`M${cx - 4} ${cy - bodyRy + 1} Q${cx + 2} ${cy - bodyRy - 8} ${cx + 8} ${cy - bodyRy + 1}`}
        fill={colors.fin}
        opacity="0.4"
      />
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
