import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div>
      <div className="page-hero">
        <h1>Our Services</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container" style={{ padding: '50px 0 70px' }}>
        <div className="section-title">
          <h2>Healthcare Services</h2>
          <p>Advanced medical services delivered with compassion and expertise</p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(svc => (
            <Link to={`/services/${svc.id}`} key={svc.id} className={styles.card}>
              <div className={styles.img}>
                <img src={svc.image} alt={svc.name}/>
                <span className={styles.tag}>{svc.tag}</span>
              </div>
              <div className={styles.content}>
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
                <span className={styles.more}>Learn More <ArrowRight size={14}/></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
