import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import restaurant from '../data/restaurant';
import images from '../data/images';

export default function Menu() {
  const { categories, note } = restaurant.menu;
  const [activeId, setActiveId] = useState(categories[0].id);
  const category = categories.find((c) => c.id === activeId) ?? categories[0];
  const aside = images[category.image];

  /* Left/right arrows move between tabs, matching the ARIA tabs pattern. */
  const onTabKeyDown = (event) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1 };
    const step = keys[event.key];
    if (!step) return;
    event.preventDefault();
    const index = categories.findIndex((c) => c.id === activeId);
    const next = categories[(index + step + categories.length) % categories.length];
    setActiveId(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section-head">
          <div className="section-head__row">
            <div>
              <p className="eyebrow">La carta</p>
              <h2 style={{ marginTop: '16px' }}>The menu.</h2>
            </div>
            <p className="menu__intro">
              Carnes y guisados, tortillas pressed by hand in the kitchen.
              Breakfast starts at 8am and the griddle stays on until 10.
            </p>
          </div>
        </div>

        <div
          className="menu__tabs"
          role="tablist"
          aria-label="Menu categories"
          onKeyDown={onTabKeyDown}
        >
          {categories.map((c) => (
            <button
              key={c.id}
              id={`tab-${c.id}`}
              type="button"
              role="tab"
              className="menu__tab"
              aria-selected={c.id === activeId}
              aria-controls={`panel-${c.id}`}
              tabIndex={c.id === activeId ? 0 : -1}
              onClick={() => setActiveId(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div
          className="menu__panel"
          id={`panel-${category.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${category.id}`}
          tabIndex={-1}
          key={category.id}
        >
          <div>
            <div className="menu__cat">
              <h3>{category.label}</h3>
              {category.sublabel && <span>{category.sublabel}</span>}
            </div>
            {category.note && <p className="menu__note">{category.note}</p>}

            {category.choose && (
              <div className="menu__meats">
                <p className="menu__meats-label">Choose your meat or guisado</p>
                <ul className="menu__meats-list">
                  {restaurant.meats.map((meat) => (
                    <li className="meat" key={meat}>
                      {meat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ul className="menu__list">
              {category.items.map((item) => (
                <li key={item.name}>
                  <div className="menu__row">
                    <span className="menu__name">{item.name}</span>
                    {item.tag && <span className="menu__tag">{item.tag}</span>}
                    {item.price && (
                      <>
                        <span className="menu__leader" aria-hidden="true" />
                        <span className="menu__price price">{item.price}</span>
                      </>
                    )}
                  </div>
                  {item.description && (
                    <p className="menu__desc">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>

            <div className="menu__foot">
              <p>{note}</p>
              <a
                className="btn btn--light btn--sm"
                href={restaurant.links[restaurant.primaryOrder]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order online
                <ArrowUpRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="menu__aside">
            <figure>
              <img
                src={aside.src}
                alt={aside.alt}
                loading="lazy"
                decoding="async"
                style={aside.objectPosition ? { objectPosition: aside.objectPosition } : undefined}
              />
              <figcaption>{category.label}</figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
