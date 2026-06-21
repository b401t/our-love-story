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
    const interval = setInterval(calcDays, 1000 * 60 * 60);
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
          animation: 'heartBeat 2.5s ease-in-out infinite',
          marginBottom: '32px',
          width: '110px',
          height: '110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-hidden="true"
      >
        <svg
          width="110"
          height="110"
          viewBox="0 -8 144 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: 'drop-shadow(0 0 14px rgba(232,112,138,0.35))',
          }}
        >
          <path
            d="M67.396 125.449L68.119 125.669C70.78 126.474 73.293 127.233 74.949 130.561C74.991 130.645 75.05 130.719 75.122 130.779C75.194 130.838 75.278 130.882 75.368 130.907C75.425 130.922 75.483 130.929 75.542 130.929C75.67 130.929 75.795 130.892 75.903 130.821C77.124 130.018 78.274 129.291 79.366 128.6C81.655 127.152 83.631 125.903 85.521 124.447C92.299 119.338 98.485 113.475 103.96 106.965C111.156 98.264 118.597 89.266 125.602 79.847C129.986 73.95 133.723 67.368 136.882 61.663C140.042 55.891 141.923 49.495 142.396 42.917C143.253 32.107 140.707 22.364 134.828 13.958C128.286 4.602 119.585 0.046 108.986 0.397C97.029 0.8 86.513 5.415 77.73 14.114C77.304 14.556 76.909 15.028 76.55 15.526C75.867 16.425 75.219 17.279 74.244 17.617C63.998 7.541 56.165 3.6 44.447 2.589C32.421 1.552 22.685 5.457 15.508 14.19C11.946 18.507 8.824 23.175 6.19 28.125C0.575 38.741 -0.596 50.033 2.718 61.689C5.672 72.093 10.599 81.818 17.225 90.325C30.471 107.388 47.352 119.207 67.396 125.449ZM17.79 30.135C19.328 27.207 21.043 24.377 22.923 21.659C27.393 15.072 33.692 11.748 41.681 11.748C42.671 11.748 43.686 11.799 44.728 11.901C55.398 12.948 63.958 17.695 70.169 26.008C70.915 27.007 71.728 27.931 72.445 28.746C72.736 29.078 73.011 29.39 73.253 29.676C73.353 29.796 73.493 29.875 73.646 29.901C76.527 30.403 77.691 28.895 78.555 27.447C83.543 19.093 91.307 14.107 102.989 11.756C105.755 11.273 108.577 11.202 111.364 11.544C115.789 11.965 119.585 14.161 122.648 18.068C126.138 22.55 128.207 27.991 128.582 33.68C129.2 40.255 128.004 46.875 125.127 52.807C122.959 57.404 120.492 61.851 117.741 66.118C112.633 73.717 107.177 81.271 101.903 88.577L100.069 91.119C96.141 96.565 92.079 102.054 88.151 107.363C86.734 109.278 85.318 111.194 83.902 113.112C83.292 113.939 82.656 114.75 81.983 115.609C81.761 115.892 81.536 116.18 81.307 116.474C79.423 115.692 77.588 114.927 75.789 114.18C71.544 112.417 67.495 110.735 63.457 109.028C52.278 104.38 42.153 97.484 33.695 88.761C25.024 79.753 19.015 70.116 15.324 59.298C11.959 49.431 12.765 39.891 17.79 30.135Z"
            fill="#e8708a"
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
