import { ArrowUpRight, Navigation, Phone } from 'lucide-react';
import restaurant from '../data/restaurant';
import images from '../data/images';

/* JS weeks start on Sunday; the hours list starts on Monday. */
const todayIndex = (new Date().getDay() + 6) % 7;

export default function Visit() {
  const { address, phone, hours, links } = restaurant;

  return (
    <section className="section visit grain" id="visit">
      <div className="container visit__grid">
        <div className="reveal">
          <p className="eyebrow">Visítanos</p>
          <h2 style={{ marginTop: '16px' }}>
            On Ramona,
            <br />
            every day.
          </h2>

          <div className="visit__blocks">
            <div>
              <p className="visit__block-label">Address</p>
              <a
                className="visit__address"
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                {address.line}
                <br />
                {address.city}, {address.state} {address.zip}
              </a>
            </div>

            <div>
              <p className="visit__block-label">Phone</p>
              <a className="visit__phone" href={phone.href}>
                {phone.display}
              </a>
            </div>

            <div>
              <p className="visit__block-label">Hours · {hours.note}</p>
              <ul className="visit__hours">
                {hours.days.map((day, index) => (
                  <li
                    key={day.day}
                    className={index === todayIndex ? 'is-today' : undefined}
                  >
                    <span className="day">
                      {day.day}
                      {index === todayIndex ? ' · Today' : ''}
                    </span>
                    <span className="time">
                      {day.open} – {day.close}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="visit__actions">
              <a
                className="btn btn--primary"
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={15} aria-hidden="true" />
                Get directions
              </a>
              <a className="btn btn--outline" href={phone.href}>
                <Phone size={15} aria-hidden="true" />
                Call the shop
              </a>
            </div>
          </div>
        </div>

        <div className="visit__media reveal" style={{ '--reveal-delay': '110ms' }}>
          <div className="visit__photo">
            <img
              src={images.visit.src}
              alt={images.visit.alt}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="visit__map">
            <div className="visit__map-bar">
              <span>{address.line}</span>
              <a
                className="link-underline"
                href={links.mapLarger}
                target="_blank"
                rel="noopener noreferrer"
              >
                Larger map
                <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </div>
            <iframe
              title={`Map showing ${restaurant.name} at ${address.full}`}
              src={links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
