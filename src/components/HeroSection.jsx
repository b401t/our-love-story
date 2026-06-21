import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    function calcDays() {
      const start = new Date('2025-12-03');
      const now = new Date();
      const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
      setDaysTogether(diff);
    }
    calcDays();
    const interval = setInterval(calcDays, 1000 * 60 * 60); // update hourly
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top gradient blur */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(201,177,255,0.35) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Central glowing heart */}
      <div
        className="hero-heart"
        style={{
          animation: 'heartBeat 2.5s ease-in-out infinite, glowPulse 3s ease-in-out infinite',
          marginBottom: '32px',
          color: '#e8708a',
          filter: 'drop-shadow(0 0 20px rgba(232,112,138,0.3))',
        }}
        aria-hidden="true"
      >
        <svg width="80" height="80" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 28C16 28 4 20 4 12C4 7.58 7.58 4 12 4C14.83 4 17.3 5.5 18.3 7.5C18.77 8.35 19.23 8.35 19.7 7.5C20.7 5.5 23.17 4 26 4C30.42 4 34 7.58 34 12C34 20 22 28 16 28Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #c9b1ff 0%, #e8708a 50%, #d4b8f0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '12px',
          lineHeight: 1.2,
          animation: 'fadeInUp 1s ease-out',
        }}
      >
        Our Love Story
      </h1>

      {/* Names */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
          fontWeight: 500,
          color: 'var(--color-purple-700)',
          marginBottom: '8px',
          animation: 'fadeInUp 1s 0.15s ease-out both',
        }}
      >
        Trương Chí Bảo <span style={{ color: 'var(--color-pink-600)', margin: '0 8px' }}>&</span>{' '}
        Trần Lan Yến Nhi
      </h2>

      {/* Date */}
      <p
        style={{
          fontSize: '1.15rem',
          color: 'var(--color-text-light)',
          fontWeight: 500,
          marginBottom: '32px',
          animation: 'fadeInUp 1s 0.3s ease-out both',
        }}
      >
        Together since December 3rd, 2025
      </p>

      {/* Days counter */}
      <div
        className="glass-card"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '16px',
          padding: '16px 32px',
          animation: 'fadeInUp 1s 0.45s ease-out both',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            color: 'var(--color-pink-600)',
            lineHeight: 1,
          }}
        >
          {daysTogether}
        </span>
        <span
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-light)',
            fontWeight: 500,
          }}
        >
          days of love
          <br />
          and counting...
        </span>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--color-text-lighter)',
          fontSize: '0.85rem',
          fontWeight: 500,
          animation: 'bob 2s ease-in-out infinite',
          opacity: 0.7,
        }}
        aria-hidden="true"
      >
        <span>Scroll down</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, var(--color-purple-100), transparent)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    </section>
  );
}
