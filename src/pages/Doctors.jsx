import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { DOCTORS } from '../data/siteData';
import styles from './Doctors.module.css';

export default function Doctors() {
  return (
    <div>
      <div className="page-hero">
        <h1>Our Doctors</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container" style={{ padding: '50px 0 70px' }}>
        <div className="section-title">
          <h2>Meet Our Specialists</h2>
          <p>Experienced, compassionate doctors dedicated to your health</p>
        </div>

        <div className={styles.grid}>
          {DOCTORS.map(doc => (
            <Link to={`/doctors/${doc.id}`} key={doc.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={doc.image} alt={doc.name}/>
              </div>
              <div className={styles.info}>
                <span className={styles.dept}>{doc.dept}</span>
                <h3>{doc.name}</h3>
                <p className={styles.designation}>{doc.designation}</p>
                <p className={styles.exp}>{doc.experience}</p>
                <div className={styles.viewBtn}>
                  View Profile <ArrowRight size={14}/>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
