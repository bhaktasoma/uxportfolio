import { useState } from "react";

export default function ImageCarousel({ items, onImageClick }) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  return (
    <div className="image-carousel">
      <figure className="image-carousel-slide">
        <button
          className="cs-diagram-zoom"
          onClick={() => onImageClick && onImageClick(item, index)}
          aria-label="View full size"
        >
          <img src={item.src} alt={item.alt || ""} />
        </button>
        {item.caption && <figcaption>{item.caption}</figcaption>}
      </figure>
      <div className="carousel-controls">
        <button type="button" className="carousel-arrow" onClick={prev} aria-label="Previous image">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18 9 12l6-6" />
          </svg>
        </button>
        <div className="carousel-dots" role="tablist" aria-label="Component gallery" onKeyDown={onKeyDown}>
          {items.map((it, i) => (
            <button
              key={it.alt || i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1}`}
              tabIndex={i === index ? 0 : -1}
              className={`carousel-dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <span className="carousel-dot-mark" />
            </button>
          ))}
        </div>
        <button type="button" className="carousel-arrow" onClick={next} aria-label="Next image">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
