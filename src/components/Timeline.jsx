import { useEffect, useRef, useState } from 'react';

const MILESTONES = [
  {
    date: 'December 3rd, 2025',
    title: 'We Started Our Journey Together',
    description:
      'The day two hearts decided to walk the same path. The beginning of our forever.',
    icon: '💕',
    color: '#e8708a',
  },
  // Add more milestones here as your story grows:
  // {
  //   date: 'February 14th, 2026',
  //   title: 'Our First Valentine\'s Day',
  //   description: '...',
  //   icon: '🌹',
  //   color: '#f595aa',
  // },
];

function TimelineCard({ milestone, index, visible }) {
  const isLeft = index % 2 === 0;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '24px',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${isLeft ? '-40px' : '40px'})`,
        transition: `opacity 0.6s ${0.15 * index}s ease-out, transform 0.6s ${0.15 * index}s ease-out`,
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.3rem',
          boxShadow: `0 0 20px ${milestone.color}44`,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {milestone.icon}
      </div>

      {/* Card */}
      <div
        className="glass-card"
        style={{
          width: 'calc(50% - 46px)',
          marginLeft: isLeft ? 0 : 'auto',
          marginRight: isLeft ? 'auto' : 0,
          padding: '28px 24px',
          textAlign: isLeft ? 'right' : 'left',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: milestone.color,
            marginBottom: '6px',
          }}
        >
          {milestone.date}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            color: 'var(--color-purple-700)',
            fontWeight: 600,
            marginBottom: '8px',
          }}
        >
          {milestone.title}
        </h3>
        <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          {milestone.description}
        </p>
      </div>

      {/* Spacer for the other side */}
      <div style={{ width: 'calc(50% - 46px)' }} aria-hidden="true" />
    </div>
  );
}

export default function Timeline() {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'var(--section-padding)',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ position: 'relative' }}>
        {/* Decorative blur */}
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-40px',
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
          Our Timeline
        </h2>
        <p
          className="section-subtitle"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s 0.1s ease-out, transform 0.7s 0.1s ease-out',
          }}
        >
          Every milestone is a treasure
        </p>

        {/* Timeline line */}
        <div style={{ position: 'relative', padding: '24px 0' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(to bottom, var(--color-purple-300), var(--color-pink-300), var(--color-purple-300))',
              transform: 'translateX(-50%)',
              borderRadius: 'var(--radius-full)',
              opacity: 0.6,
            }}
            aria-hidden="true"
          />

          {/* Milestones */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '60px',
              position: 'relative',
            }}
          >
            {MILESTONES.map((milestone, i) => (
              <TimelineCard
                key={i}
                milestone={milestone}
                index={i}
                visible={visible}
              />
            ))}
          </div>
        </div>

        {/* Add more hint */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '40px',
            color: 'var(--color-text-lighter)',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s 0.5s ease-out',
          }}
        >
          ...and many more chapters to come ✨
        </p>
      </div>
    </section>
  );
}
