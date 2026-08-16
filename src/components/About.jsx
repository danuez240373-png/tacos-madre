import restaurant from '../data/restaurant';
import images from '../data/images';

export default function About() {
  const { about } = restaurant;

  return (
    <section className="section about grain" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__media reveal">
            <div className="about__media-main">
              <img
                src={images.aboutPrimary.src}
                alt={images.aboutPrimary.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about__media-sub" aria-hidden="true">
              <img
                src={images.aboutSecondary.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div
            className="about__body reveal"
            style={{ '--reveal-delay': '110ms' }}
          >
            <p className="eyebrow">{about.eyebrow}</p>
            <h2>
              {about.heading}
              <span className="script">{about.headingAccent}</span>
            </h2>

            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <blockquote className="about__quote">
              <q>{about.quote}</q>
              <cite>{about.quoteAttribution}</cite>
            </blockquote>
          </div>
        </div>

        {/* Facts read as their own chapter, full-width under the grid, rather
            than crowding the 54ch text column next to the pull-quote. */}
        <dl className="about__facts reveal" style={{ '--reveal-delay': '160ms' }}>
          {about.facts.map((fact) => (
            <div className="about__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
