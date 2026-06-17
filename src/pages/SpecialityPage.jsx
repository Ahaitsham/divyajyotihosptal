import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, CheckCircle2, Shield } from 'lucide-react';
import { SPECIALITIES } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';
import styles from './SpecialityPage.module.css';

export default function SpecialityPage() {
  const { id } = useParams();
  const sp = SPECIALITIES.find(s => s.id === parseInt(id));

  if (!sp) return (
    <div style={{ padding: '80px', textAlign: 'center' }}>
      <h2>Speciality not found</h2>
      <Link to="/specialities" className="btn-primary" style={{ marginTop: '20px' }}>← Back to Specialities</Link>
    </div>
  );

  return (
    <div>
      <div className="page-hero">
        <h1>{sp.name}</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <main>
            <Link to="/specialities" className={styles.backLink}><ArrowLeft size={16}/> Back to Specialities</Link>

            {/* HERO BOX */}
            <div className={styles.box}>
              <div className={styles.text}>
                <h2>{sp.name}</h2>
                <p>{sp.longDesc}</p>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '8px' }}>
                  <CalendarDays size={15}/> Book Appointment
                </Link>
              </div>
              <div className={styles.imgWrap}>
                <img src={sp.image} alt={sp.name}/>
              </div>
            </div>

            {/* WHAT WE OFFER */}
            <div className={styles.section}>
              <h3>What We Offer</h3>
              <ul className={styles.pointList}>
                {sp.points.map(pt => (
                  <li key={pt}><CheckCircle2 size={16} color="#de7639"/>{pt}</li>
                ))}
              </ul>
            </div>

            {/* WHY CHOOSE US */}
            <div className={styles.section}>
              <h3>Why Choose Divya Jyoti Hospital?</h3>
              <div className={styles.whyBox}>
                <Shield size={40} color="#0085A9"/>
                <p>Our {sp.name} team combines experienced specialists, modern infrastructure and a patient-first approach to deliver safe, effective and compassionate care for every individual.</p>
              </div>
            </div>
          </main>

          <AppointmentSidebar/>
        </div>
      </div>
    </div>
  );
}
