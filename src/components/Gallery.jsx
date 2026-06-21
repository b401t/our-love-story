import { useEffect, useRef, useState } from 'react';

const PLACEHOLDER_CARDS = [
  {
    id: 1,
    title: 'Our First Photo',
    subtitle: 'The beginning of everything',
    gradient: 'linear-gradient(135deg, #e8d5f5, #ffd6e0)',
    emoji: '📸',
  },
  {
    id: 2,
    title: 'A Beautiful Memory',
    subtitle: 'Moments we cherish forever',
    gradient: 'linear-gradient(135deg, #ffd6e0, #ffe0e8)',
    emoji: '🌸',
  },
  {
    id: 3,
    title: 'Laughter & Joy',
    subtitle: 'The sound of our happiness',
    gradient: 'linear-gradient(135deg, #d4b8f0, #e8d5f5)',
    emoji: '✨',
  },
  {
    id: 4,
    title: 'Our Adventure',
    subtitle: 'Exploring the world together',
    gradient: 'linear-gradient(135deg, #ffc2d1, #ffd6e0)',
    emoji: '🌍',
  },
  {
    id: 5,
    title: 'Quiet Moments',
    subtitle: 'Where words aren\'t needed',
    gradient: 'linear-gradient(135deg, #c9b1ff, #d4b8f0)',
    emoji: '🌙',
  },
  {
    id: 6,
    title: 'Forever & Always',
    subtitle: 'The best is yet to come',
    gradient: 'linear-gradient(135deg, #ffb3c6, #f595aa)',
    emoji: '💝',
  },
];

function MemoryCard({ card, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '4 / 5',
        overflow: 'hidden',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: `opacity 0.6s ${0.08 * index}s ease-out, transform 0.6s ${0.08 * index}s ease-out, box-shadow 0.4s ease`,
        boxShadow: hovered
          ? '0 16px 40px rgba(176,136,240,0.22), 0 0 0 2px rgba(201,177,255,0.3)'
          : 'var(--glass-shadow)',
      }}
    >
      {/* Gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: card.gradient,
          opacity: hovered ? 1 : 0.85,
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Decorative frame */}
      <div
        style={{
          position: 'absolute',
          inset: '12px',
          border: '2px dashed rgba(255,255,255,0.5)',
          borderRadius: 'var(--radius-md)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '28px',
          textAlign: 'center',
        }}
      >
        {/* Emoji */}
        <span
          style={{
            fontSize: '3rem',
            marginBottom: '20px',
            transform: hovered ? 'scale(1.15) translateY(-6px)' : 'scale(1)',
            transition: 'transform 0.4s var(--ease-spring)',
            display: 'block',
          }}
          role="img"
          aria-hidden="true"
        >
          {card.emoji}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--color-purple-700)',
            fontWeight: 600,
            marginBottom: '6px',
            transition: 'color 0.3s ease',
          }}
        >
          {card.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-light)',
            fontWeight: 500,
            transition: 'color 0.3s ease',
          }}
        >
          {card.subtitle}
        </p>

        {/* Hover overlay hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.7)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--color-purple-600)',
            }}
          >
            Add photo ✦
          </span>
        </div>
      </div>

      {/* Corner decorations */}
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />
    </div>
  );
}

function CornerDecoration({ position }) {
  const posStyles = {
    'top-left': { top: '18px', left: '18px' },
    'top-right': { top: '18px', right: '18px', transform: 'rotate(90deg)' },
    'bottom-left': { bottom: '18px', left: '18px', transform: 'rotate(-90deg)' },
    'bottom-right': { bottom: '18px', right: '18px', transform: 'rotate(180deg)' },
  };

  return (
    <div
      style={{
        position: 'absolute',
        ...posStyles[position],
        width: '8px',
        height: '8px',
        background: 'rgba(255,255,255,0.55)',
        borderRadius: '2px',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'var(--section-padding)',
        zIndex: 1,
      }}
    >
      <div className="section-container">
        {/* Decorative blurs */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '-50px',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(255,178,198,0.18) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-50px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(201,177,255,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        <h2
          className="section-title"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          Our Memories
        </h2>
        <p
          className="section-subtitle"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s 0.1s ease-out, transform 0.7s 0.1s ease-out',
          }}
        >
          Little moments, big feelings
        </p>

        {/* Gallery grid */}
        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '28px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {PLACEHOLDER_CARDS.map((card, i) => (
            <MemoryCard
              key={card.id}
              card={card}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
