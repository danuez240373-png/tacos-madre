import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FeaturedFood from './components/FeaturedFood';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import OrderCTA from './components/OrderCTA';
import Visit from './components/Visit';
import Footer from './components/Footer';
import { useNavState, useScrollReveal } from './hooks';

const SECTION_IDS = ['home', 'menu', 'about', 'gallery', 'visit'];

export default function App() {
  const { scrolled, active } = useNavState(SECTION_IDS);
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar scrolled={scrolled} active={active} />

      <main id="main">
        <Hero />
        <Marquee />
        <FeaturedFood />
        <Menu />
        <About />
        <div className="seam seam--about-gallery" aria-hidden="true" />
        <Gallery />
        <OrderCTA />
        <Visit />
      </main>

      <Footer />
    </>
  );
}
