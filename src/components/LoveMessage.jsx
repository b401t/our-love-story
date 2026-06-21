import { useEffect, useRef, useState } from 'react';

export default function LoveMessage() {
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
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="message"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'var(--section-padding)',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ position: 'relative' }}>
        {/* Top decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '250px',
            background: 'radial-gradient(ellipse, rgba(255,178,198,0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Hearts row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '36px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
          aria-hidden="true"
        >
          {['💜', '💕', '💜'].map((heart, i) => (
            <span
              key={i}
              style={{
                fontSize: '2rem',
                animation: `bob ${2 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {heart}
            </span>
          ))}
        </div>

        {/* Main message card */}
        <div
          className="glass-card"
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '52px 44px',
            textAlign: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s 0.15s ease-out, transform 0.7s 0.15s ease-out',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 600,
              color: 'var(--color-purple-700)',
              marginBottom: '28px',
              lineHeight: 1.3,
            }}
          >
            No Matter Where Life Goes,{' '}
            <span style={{ color: 'var(--color-pink-600)' }}>This Story Is Ours</span>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: 'var(--color-text)',
              marginBottom: '32px',
            }}
          >
            In every heartbeat, in every smile, in every quiet moment we share —{' '}
            there is something undeniable, something real. You are my favorite hello{' '}
            and my hardest goodbye. Here's to every sunrise we'll watch together,{' '}
            every storm we'll weather, and every dream we'll chase side by side.
          </p>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: 'var(--color-text-light)',
              fontStyle: 'italic',
            }}
          >
            Thank you for being the most beautiful part of my story. I can't wait{' '}
            to see what the next chapters bring — as long as they're with you.
          </p>

          {/* Signature */}
          <div
            style={{
              marginTop: '36px',
              paddingTop: '28px',
              borderTop: '1px solid var(--color-purple-200)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: 'var(--color-pink-600)',
                fontWeight: 600,
              }}
            >
              With all my love,
            </span>
            <br />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                color: 'var(--color-purple-600)',
                fontWeight: 500,
              }}
            >
              Chí Bảo & Yến Nhi
            </span>
            <span
              style={{
                display: 'block',
                marginTop: '8px',
                fontSize: '1.5rem',
                animation: 'heartBeat 2.5s ease-in-out infinite',
              }}
              aria-label="love"
            >
              💖
            </span>
          </div>
        </div>

        {/* Bottom sparkle decorations */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '44px',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s 0.4s ease-out',
          }}
          aria-hidden="true"
        >
          {['✨', '🌸', '💫', '🌸', '✨'].map((sparkle, i) => (
            <span
              key={i}
              style={{
                fontSize: '1.2rem',
                animation: `sparkle ${2 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                opacity: 0.5,
              }}
            >
              {sparkle}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '60px 24px 40px',
          color: 'var(--color-text-lighter)',
          fontSize: '0.85rem',
          fontWeight: 500,
        }}
      >
        <p>
          Made with 💜 for the most special person in my life
        </p>
        <p style={{ marginTop: '4px' }}>
          © {new Date().getFullYear()} Chí Bảo & Yến Nhi — Forever begins here
        </p>
      </footer>
    </section>
  );
}
