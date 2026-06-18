import { useParams, Link } from 'react-router-dom';
import { CalendarDays, Award, Clock, CheckCircle2, ArrowLeft } from 'lucide-react';
import { DOCTORS } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';
import styles from './DoctorProfile.module.css';

export default function DoctorProfile() {
  const { id } = useParams();
  const doc = DOCTORS.find(d => d.id === parseInt(id));

  if (!doc) return (
    <div style={{ padding: '80px', textAlign: 'center' }}>
      <h2>Doctor not found</h2>
      <Link to="/doctors" className="btn-primary" style={{ marginTop: '20px' }}>← Back to Doctors</Link>
    </div>
  );

  return (
    <div>
      <div className="page-hero">
        <h1>Doctor Profile</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container">
        <div className={styles.layout}>
          {/* MAIN */}
          <main>
            <Link to="/doctors" className={styles.backLink}><ArrowLeft size={16}/> Back to Doctors</Link>

            <div className={styles.profileCard}>
              <div className={styles.profileImg}>
                <img src={doc.image} alt={doc.name}/>
              </div>
              <div className={styles.profileInfo}>
                <span className={styles.dept}>{doc.dept}</span>
                <h1>{doc.name}</h1>
                <p className={styles.designation}>{doc.designation}</p>
                <div className={styles.expBadge}><Clock size={15}/> {doc.experience}</div>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '20px' }}>
                  <CalendarDays size={15}/> Book Appointment
                </Link>
              </div>
            </div>

            {/* BIO */}
            <div className={styles.section}>
              <h2>About Dr. {doc.name.split(' ').slice(-1)}</h2>
              <p>{doc.bio}</p>
            </div>

            {/* QUALIFICATIONS */}
            <div className={styles.twoCol}>
              <div className={styles.section}>
                <h2>Qualifications</h2>
                <ul className={styles.list}>
                  {doc.qualifications.map(q => (
                    <li key={q}><Award size={16} color="#DE7639"/>{q}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.section}>
                <h2>Area of Special Interest</h2>
                <ul className={styles.list}>
                  {doc.specializations.map(s => (
                    <li key={s}><CheckCircle2 size={16} color="#de7639"/>{s}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.section}>
                <h2>Area of Special Interest</h2>
                <ul className={styles.list}>
                  {doc.specializations.map(s => (
                    <li key={s}><CheckCircle2 size={16} color="#de7639"/>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </main>

          {/* SIDEBAR */}
          <AppointmentSidebar/>
        </div>
      </div>
    </div>
  );
}
