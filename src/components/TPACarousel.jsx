import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TPA_PARTNERS } from '../data/siteData';
import styles from './TPACarousel.module.css';

function useVisibleCount() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 500) setCount(1);
      else if (w < 768) setCount(2);
      else if (w < 1024) setCount(3);
      else if (w < 1300) setCount(4);
      else setCount(5);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}

export default function TPACarousel() {
  const visibleCount = useVisibleCount();

  const [start, setStart] = useState(0);
  const total = TPA_PARTNERS.length;
  const maxStart = Math.max(0, total - visibleCount);

  useEffect(() => { setStart(0); }, [visibleCount]);
  useEffect(() => {
    const timer = setInterval(() => {
      setStart(p => (p >= maxStart ? 0 : p + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [maxStart]);

  const next = () => setStart(p => (p >= maxStart ? 0 : p + 1));
  const prev = () => setStart(p => (p <= 0 ? maxStart : p - 1));


  return (
  <div className={styles.wrapper}>
    <div className={styles.arrowsTop}>
      <button className={styles.arrowBtn} onClick={next} aria-label="Next"><ChevronRight size={18}/></button>
      <button className={styles.arrowBtn} onClick={prev} aria-label="Previous"><ChevronLeft size={18}/></button>
    </div>

    <div className={styles.viewport}>
      <div
        className={styles.track}
        style={{
          width: `${(total / visibleCount) * 100}%`,
          transform: `translateX(-${start * (100 / total)}%)`,
        }}
      >
        {TPA_PARTNERS.map(partner => (
          <div key={partner.id} className={styles.slideItem} style={{ width: `${100 / total}%` }}>
            <div className={styles.card}>
              <img src={partner.logo} alt={partner.name} title={partner.name}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
