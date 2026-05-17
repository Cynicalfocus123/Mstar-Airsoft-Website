import type { GalleryItem } from '../types/siteContent';

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <section className="section section-anchor" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">Field Visuals</p>
        <h2>Gallery</h2>
      </div>
      <div className="gallery-grid">
        {items.map((item) => (
          <figure className="gallery-card" key={item.id}>
            <img src={item.imagePath} alt={item.alt} loading="lazy" width="640" height="420" />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
