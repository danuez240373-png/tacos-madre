import { ArrowUpRight, ChevronDown, Clock, MapPin, Phone } from 'lucide-react';
import restaurant from '../data/restaurant';
import images from '../data/images';
import { useParallax } from '../hooks';

export default function Hero() {
  const mediaRef = useParallax(0.16);
  const { hero, address, phone, hours, links } = restaurant;
  const orderUrl = links[restaurant.primaryOrder];

  return (
    <section className="hero" id="home">
      <div className="hero__media" ref={mediaRef}>
        <img
          src={images.tacos.src}
          alt={images.tacos.alt}
          width="1449"
          height="1179"
          fetchpriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__badge">
        <img src={images.hero.src} alt={images.hero.alt} decoding="async" />
      </div>

      <div className="container hero__inner">
        <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>

        <h1 className="hero__title">
          <span>{hero.headlineTop}</span>
          <span>{hero.headlineMid}</span>
          <span className="script hero__accent">{hero.headlineAccent}</span>
        </h1>

        <p className="hero__lede">{hero.lede}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#menu">
            View the menu
          </a>
          <a
            className="btn btn--ghost"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now
            <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero__ribbon">
        <div className="container hero__ribbon-inner">
          <span className="hero__fact">
            <Clock size={15} aria-hidden="true" />
            {hours.summary}
          </span>
          <a
            className="hero__fact"
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={15} aria-hidden="true" />
            {address.line}, {address.city}
          </a>
          <a className="hero__fact" href={phone.href}>
            <Phone size={15} aria-hidden="true" />
            {phone.display}
          </a>
          <a className="hero__scroll" href="#featured">
            Scroll
            <ChevronDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
