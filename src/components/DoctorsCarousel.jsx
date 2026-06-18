import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, CalendarDays } from 'lucide-react';
import { DOCTORS } from '../data/siteData';
import styles from './DoctorsCarousel.module.css';

function useVisibleCount() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 600) setCount(1);
      else if (w < 900) setCount(2);
      else if (w < 1200) setCount(3);
      else setCount(4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

export default function DoctorsCarousel() {
  const visibleCount = useVisibleCount();
  const [start, setStart] = useState(0);
  const total = DOCTORS.length;

  // Reset start if it goes out of bounds on resize
  useEffect(() => {
    setStart(0);
  }, [visibleCount]);

  const maxStart = Math.max(0, total - visibleCount);


  useEffect(() => {
  const timer = setInterval(() => {
    setStart(p => (p >= maxStart ? 0 : p + 1));
  }, 3000);
  return () => clearInterval(timer);
}, [maxStart]);


  const next = () => setStart(p => (p >= maxStart ? 0 : p + 1));
  const prev = () => setStart(p => (p <= 0 ? maxStart : p - 1));

  // const visibleDoctors = DOCTORS.slice(start, start + visibleCount);

  return (
  <div className={styles.wrapper}>
    <div className={styles.viewport}>
      <div
        className={styles.track}
        style={{
          width: `${(total / visibleCount) * 100}%`,
          transform: `translateX(-${start * (100 / total)}%)`,
        }}
      >
        {DOCTORS.map(doc => (
          <div key={doc.id} className={styles.slideItem} style={{ width: `${100 / total}%` }}>
            <div className={styles.card}>
              <Link to={`/doctors/${doc.id}`} className={styles.imgLink}>
                <div className={styles.imgWrap}>
                  <img src={doc.image} alt={doc.name}/>
                </div>
              </Link>
              <div className={styles.info}>
                <h4>{doc.name}</h4>
                <p className={styles.dept}>{doc.designation}</p>
                <p className={styles.exp}>{doc.experience}</p>
                <div className={styles.btnRow}>
                  <Link to={`/doctors/${doc.id}`} className={styles.viewBtn}>
                    View Profile <ArrowRight size={13}/>
                  </Link>
                  <Link to="/contact" className={styles.bookBtn}>
                    <CalendarDays size={13}/> Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ARROWS */}
    <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous doctors">
      <ChevronLeft size={20}/>
    </button>
    <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next doctors">
      <ChevronRight size={20}/>
    </button>

    {/* DOTS */}
    <div className={styles.dots}>
      {Array.from({ length: maxStart + 1 }).map((_, i) => (
        <button
          key={i}
          className={`${styles.dot} ${i === start ? styles.activeDot : ''}`}
          onClick={() => setStart(i)}
          aria-label={`Go to position ${i + 1}`}
        />
      ))}
    </div>
  </div>
);
}
