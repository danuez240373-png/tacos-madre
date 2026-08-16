import { ArrowUpRight, Phone } from 'lucide-react';
import restaurant from '../data/restaurant';
import images from '../data/images';

export default function OrderCTA() {
  const { order, links, phone } = restaurant;

  return (
    <section className="order" id="order">
      <div className="order__media" aria-hidden="true">
        <img
          src={images.orderCta.src}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="container order__inner">
        <p className="eyebrow eyebrow--light reveal">Pick up or delivery</p>

        <h2 className="reveal">
          {order.heading}
          <span className="script">{order.headingAccent}</span>
        </h2>

        <p className="order__body reveal">{order.body}</p>

        <div className="order__actions reveal">
          <a
            className="btn btn--light"
            href={links.uberEats}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on Uber Eats
            <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
          <a
            className="btn btn--ghost"
            href={links.doorDash}
            target="_blank"
            rel="noopener noreferrer"
          >
            DoorDash
            <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href={phone.href}>
            <Phone size={16} aria-hidden="true" />
            {phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
