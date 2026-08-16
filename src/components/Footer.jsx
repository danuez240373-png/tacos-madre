import { Instagram, Star } from 'lucide-react';
import restaurant from '../data/restaurant';
import { NAV_LINKS } from './Navbar';

export default function Footer() {
  const { address, phone, hours, links, showDemoNotice } = restaurant;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand-col">
          <p className="footer__brand">
            Tacos
            <br />
            Madres
          </p>
          <p className="footer__tagline">
            Family-owned Mexican kitchen in Baldwin Park. Made from scratch,
            served every day.
          </p>
          <div className="footer__socials">
            <a
              className="footer__social"
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tacos Madres on Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              className="footer__social"
              href={links.yelp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tacos Madres on Yelp"
            >
              <Star size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="footer__title">Visit</h2>
          <ul className="footer__list">
            <li>
              <a href={links.directions} target="_blank" rel="noopener noreferrer">
                {address.line}
                <br />
                {address.city}, {address.state} {address.zip}
              </a>
            </li>
            <li>
              <a href={phone.href}>{phone.display}</a>
            </li>
            <li>
              <span>{hours.summary}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Explore</h2>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Order online</h2>
          <ul className="footer__list">
            <li>
              <a href={links.uberEats} target="_blank" rel="noopener noreferrer">
                Uber Eats
              </a>
            </li>
            <li>
              <a href={links.doorDash} target="_blank" rel="noopener noreferrer">
                DoorDash
              </a>
            </li>
            <li>
              <a href={links.grubhub} target="_blank" rel="noopener noreferrer">
                Grubhub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {restaurant.name}. All rights reserved.
        </p>
        {showDemoNotice && (
          /* Set restaurant.showDemoNotice to false to remove this line. */
          <p>Website design demo · photography shown is stock imagery.</p>
        )}
      </div>
    </footer>
  );
}
