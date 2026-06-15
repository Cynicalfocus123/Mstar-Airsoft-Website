import type { GameTerrainContent } from '../types/siteContent';
import { getPublicAssetPath } from '../utils/publicAssetPath';

interface GameTerrainProps {
  content: GameTerrainContent;
}

export function GameTerrain({ content }: GameTerrainProps) {
  return (
    <section className="section section-anchor game-terrain-section" id="gallery">
      <div className="game-terrain-inner">
        <header className="game-terrain-heading">
          <div>
            {content.eyebrow ? <p className="eyebrow">{content.eyebrow}</p> : null}
            <h2>{content.title}</h2>
          </div>
          <p>{content.description}</p>
        </header>
        <div className="game-terrain-grid">
          {content.items.map((item) => (
            <article className="game-terrain-card" key={item.id}>
              <div className="game-terrain-media">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={getPublicAssetPath(item.posterPath)}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <source src={getPublicAssetPath(item.videoPath)} type="video/webm" />
                </video>
              </div>
              <div className="game-terrain-card-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
