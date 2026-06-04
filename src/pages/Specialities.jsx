import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { SPECIALITIES } from '../data/siteData';
import styles from './Specialities.module.css';

export default function Specialities() {
  return (
    <div>
      <div className="page-hero">
        <h1>Our Specialities</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container" style={{ padding: '50px 0 70px' }}>
        <div className="section-title">
          <h2>Medical Specialities</h2>
          <p>Comprehensive care across all major medical disciplines</p>
        </div>

        <div className={styles.grid}>
          {SPECIALITIES.map(sp => (
            <div key={sp.id} className={styles.card}>
              <div className={styles.img} style={{ backgroundImage: `url(${sp.image})` }}>
                <div className={styles.overlay}/>
                <h3>{sp.name}</h3>
              </div>
              <div className={styles.content}>
                <p>{sp.desc}</p>
                <Link to="/contact" className={styles.link}>
                  Book Appointment <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
