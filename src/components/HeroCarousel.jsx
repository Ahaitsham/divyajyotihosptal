import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { CAROUSEL_SLIDES } from '../data/siteData';
import styles from './HeroCarousel.module.css';

const AUTOPLAY_MS = 5500;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex(prev => (prev + 1) % CAROUSEL_SLIDES.length);
  }, []);

  const prev = () => {
    setIndex(p => (p - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={styles.carousel}>
      {CAROUSEL_SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${i === index ? styles.activeSlide : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== index}
        >
          <div className={styles.overlay} />
          <div className={styles.content}>
            <h1 className={i === index ? styles.fadeIn : ''}>{slide.heading}</h1>
            <p className={i === index ? styles.fadeIn : ''}>{slide.subheading}</p>
            <Link to="/contact" className={`btn-green ${styles.cta} ${i === index ? styles.fadeIn : ''}`}>
              <CalendarDays size={16}/> {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* ARROWS */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous slide">
        <ChevronLeft size={24}/>
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next slide">
        <ChevronRight size={24}/>
      </button>

      {/* DOTS */}
      <div className={styles.dots}>
        {CAROUSEL_SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
