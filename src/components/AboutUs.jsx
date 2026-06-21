import { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        position: 'relative',
        padding: 'var(--section-padding)',
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ position: 'relative' }}>
        {/* Decorative corner blur */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-40px',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(255,178,198,0.25) 0%, transparent 70%)',
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
          About Us
        </h2>
        <p
          className="section-subtitle"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s 0.1s ease-out, transform 0.7s 0.1s ease-out',
          }}
        >
          Two hearts, one journey
        </p>

        <div
          className="glass-card"
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            padding: '48px 40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s 0.2s ease-out, transform 0.7s 0.2s ease-out',
          }}
        >
          {/* Boy info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '32px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-purple-400), var(--color-purple-600))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                flexShrink: 0,
                boxShadow: 'var(--shadow-glow-purple)',
              }}
              aria-hidden="true"
            >
              ♂
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  color: 'var(--color-purple-700)',
                  fontWeight: 600,
                }}
              >
                Trương Chí Bảo
              </h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                June 20th, 2003
              </p>
            </div>
          </div>

          {/* Heart connector */}
          <div
            style={{
              textAlign: 'center',
              margin: '-8px 0',
              fontSize: '2rem',
              color: 'var(--color-pink-500)',
              animation: 'heartBeat 2.5s ease-in-out infinite',
            }}
            aria-hidden="true"
          >
            💕
          </div>

          {/* Girl info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: '24px',
              marginBottom: '36px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-pink-400), var(--color-pink-600))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                flexShrink: 0,
                boxShadow: 'var(--shadow-glow-pink)',
              }}
              aria-hidden="true"
            >
              ♀
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  color: 'var(--color-pink-600)',
                  fontWeight: 600,
                }}
              >
                Trần Lan Yến Nhi
              </h3>
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                November 17th, 2008
              </p>
            </div>
          </div>

          {/* Story paragraph */}
          <div
            style={{
              borderTop: '1px solid var(--color-purple-200)',
              paddingTop: '32px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.9,
                color: 'var(--color-text)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Every love story is beautiful, but ours is my favorite.{' '}
              From the moment our paths crossed, something just felt right.{' '}
              Through laughter, late-night conversations, and countless little moments,{' '}
              we've built something truly special. This is not just a website —{' '}
              it's a small chapter of the endless book we're writing together,{' '}
              one day at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
