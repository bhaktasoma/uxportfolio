import { useState } from "react";

export default function TestimonialCarousel({ items }) {
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
    <div className="carousel">
      <blockquote className="testimonial carousel-slide">
        <p>"{item.quote}"</p>
        <cite>
          {item.name}
          <span>{item.title}</span>
        </cite>
      </blockquote>
      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18 9 12l6-6" />
          </svg>
        </button>
        <div
          className="carousel-dots"
          role="tablist"
          aria-label="Testimonials"
          onKeyDown={onKeyDown}
        >
          {items.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              tabIndex={i === index ? 0 : -1}
              className={`carousel-dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <span className="carousel-dot-mark" />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="carousel-arrow"
          onClick={next}
          aria-label="Next testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
