import { ArrowUpRight } from 'lucide-react';
import restaurant from '../data/restaurant';
import images from '../data/images';

/* Grid placement classes, in the order items appear in restaurant.featured */
const SLOTS = ['dish--lead', 'dish--b', 'dish--c', 'dish--d', 'dish--e'];

/* Top-border accent cycle for the supporting cards — the one showcase spot for
   the embroidered-logo colours. The lead card never takes one. */
const ACCENTS = [
  'var(--floral-teal)',
  'var(--floral-magenta)',
  'var(--floral-marigold)',
  'var(--chile)',
];

export default function FeaturedFood() {
  const { featured } = restaurant;

  return (
    <section className="section featured grain" id="featured">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__row">
            <div>
              <p className="eyebrow">Lo más pedido</p>
              <h2 style={{ marginTop: '16px' }}>
                What everybody
                <br />
                orders first.
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: '34ch' }}>
              Pulled straight from the counter and the delivery apps — these are
              the plates that leave the kitchen most.
            </p>
          </div>
        </div>

        <div className="featured__grid">
          {featured.map((dish, index) => {
            const isLead = index === 0;
            const image = images[dish.image];
            return (
              <article
                key={dish.id}
                className={`dish ${SLOTS[index]} ${isLead ? '' : 'dish--sm'} reveal`}
                style={{
                  '--reveal-delay': `${index * 70}ms`,
                  ...(!isLead && {
                    '--dish-accent': ACCENTS[(index - 1) % ACCENTS.length],
                  }),
                }}
              >
                {dish.badge && (
                  <span className="stamp dish__stamp">{dish.badge}</span>
                )}

                <figure className="dish__figure">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>

                <div className="dish__body">
                  <div className="dish__row">
                    <h3 className="dish__name">{dish.name}</h3>
                    <span className="dish__leader" aria-hidden="true" />
                    <span className="dish__price price">{dish.price}</span>
                  </div>
                  <p className="dish__desc">{dish.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="reveal"
          style={{ marginTop: 'clamp(30px, 4vw, 46px)', display: 'flex', gap: '14px', flexWrap: 'wrap' }}
        >
          <a className="btn btn--outline" href="#menu">
            See the full menu
          </a>
          <a
            className="btn btn--primary"
            href={restaurant.links[restaurant.primaryOrder]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order online
            <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
