import FloatingHearts from './components/FloatingHearts';
import FloatingFlowers from './components/FloatingFlowers';
import SwimmingFish from './components/SwimmingFish';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveMessage from './components/LoveMessage';

export default function App() {
  return (
    <>
      {/* Background ambient effects */}
      <FloatingHearts count={28} />
      <FloatingFlowers count={16} />
      <SwimmingFish count={7} />

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <AboutUs />
        <Timeline />
        <Gallery />
        <LoveMessage />
      </main>
    </>
  );
}
