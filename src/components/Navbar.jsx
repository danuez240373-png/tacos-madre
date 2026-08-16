import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import restaurant from '../data/restaurant';

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'visit', label: 'Visit' },
];

export default function Navbar({ scrolled, active }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const orderUrl = restaurant.links[restaurant.primaryOrder];

  // Lock the page behind the mobile overlay
  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    return () => document.body.classList.remove('is-locked');
  }, [open]);

  // Escape closes the overlay and returns focus to the toggle
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Never leave the overlay open when resizing up to desktop
  useEffect(() => {
    const query = window.matchMedia('(min-width: 901px)');
    const onChange = (event) => event.matches && setOpen(false);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  // Keep keyboard/AT users from reaching content hidden behind the full-screen
  // overlay — the overlay itself isn't a focus trap, so without this Tab can
  // walk straight past the last panel link into <main>/<footer>.
  useEffect(() => {
    const targets = [document.getElementById('main'), document.querySelector('footer')].filter(
      Boolean
    );

    targets.forEach((el) => {
      if (open) {
        el.setAttribute('inert', '');
        el.setAttribute('aria-hidden', 'true');
      } else {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      }
    });

    return () => {
      targets.forEach((el) => {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      });
    };
  }, [open]);

  const wordmark = (
    <>
      Tacos
      <span className="nav__dot" aria-hidden="true" />
      Madres
    </>
  );

  return (
    <header
      className={`nav${scrolled && !open ? ' nav--solid' : ''}${open ? ' is-open' : ''}`}
    >
      <div className="container nav__inner">
        <a className="nav__brand" href="#home" onClick={() => setOpen(false)}>
          {wordmark}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--primary btn--sm"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order now
            <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Closed state uses visibility:hidden, which also removes these links
          from the tab order — so no `hidden` attribute (it would kill the
          transition). */}
      <div className="nav__panel" id="mobile-menu">
        <nav className="nav__panel-links" aria-label="Mobile">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.id}
              className="nav__panel-link"
              style={{ '--i': index }}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__panel-foot">
          <a
            className="btn btn--primary"
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Order online
            <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
          <a href={restaurant.phone.href} className="link-underline">
            <Phone size={15} aria-hidden="true" />
            {restaurant.phone.display}
          </a>
          <a
            href={restaurant.links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            <MapPin size={15} aria-hidden="true" />
            {restaurant.address.line}
          </a>
        </div>
      </div>
    </header>
  );
}
