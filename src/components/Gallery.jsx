import { Instagram } from 'lucide-react';
import restaurant from '../data/restaurant';
import images from '../data/images';

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head reveal">
          <div className="section-head__row">
            <div>
              <p className="eyebrow">La cocina</p>
              <h2 style={{ marginTop: '16px' }}>Come hungry.</h2>
            </div>
            <a
              className="btn btn--outline btn--sm"
              href={restaurant.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={15} aria-hidden="true" />
              @_tacosmadres
            </a>
          </div>
        </div>

        <div className="gallery__grid reveal">
          {images.gallery.map((photo, index) => (
            <figure className={`gallery__item g${index + 1}`} key={photo.src + index}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="gallery__caption">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
