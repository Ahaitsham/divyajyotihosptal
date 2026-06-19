import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
} from 'lucide-react';

import { SPECIALITIES } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';
import styles from './SpecialityPage.module.css';

export default function SpecialityPage() {
  const { id } = useParams();

  const sp = SPECIALITIES.find(
    item => item.id === Number(id)
  );

  if (!sp) {
    return (
      <div style={{ padding: "80px", textAlign: "center" }}>
        <h2>Speciality not found</h2>
        <Link to="/specialities" className="btn-primary">
          ← Back to Specialities
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <div className="page-hero">
        <h1>{sp.name}</h1>

        <Link to="/contact" className="btn-green">
          <CalendarDays size={15} />
          Book An Appointment
        </Link>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <main>

            {/* BACK */}
            <Link to="/specialities" className={styles.backLink}>
              <ArrowLeft size={16} />
              Back to Specialities
            </Link>

            {/* TOP BOX */}
            <div className={styles.box}>
              <div className={styles.text}>
                <h2>{sp.name}</h2>
                <p>{sp.tagline || sp.desc}</p>

                <Link to="/contact" className="btn-primary">
                  <CalendarDays size={15} />
                  Book Appointment
                </Link>
              </div>

              <div className={styles.imgWrap}>
                <img src={sp.image} alt={sp.name} />
              </div>
            </div>

            {/* INTRO */}
            <div className={styles.section}>
              <h3>Overview</h3>
              {sp.intro?.map((para, i) => (
                <p key={i} className={styles.description}>
                  {para}
                </p>
              ))}
            </div>

            {/* WHY CHOOSE */}
            <div className={styles.section}>
              <h3>Why Choose Us</h3>
              <ul className={styles.pointList}>
                {sp.whyChooseUs?.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} color="#de7639" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className={styles.section}>
              <h3>Services</h3>
              <div className={styles.serviceCards}>
                {sp.servicesList?.map((srv, i) => (
                  <div key={i} className={styles.serviceCard}>
                    <h4>{srv.title}</h4>
                    <p>{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONDITIONS */}
            <div className={styles.section}>
              <h3>Conditions Treated</h3>
              <ul className={styles.pointList}>
                {sp.conditionsTreated?.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} color="#de7639" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CARE PROCESS */}
            <div className={styles.section}>
              <h3>Care Process</h3>
              <div className={styles.steps}>
                {sp.careProcess?.map((step, i) => (
                  <div key={i} className={styles.step}>
                    <b>Step {step.step}</b>
                    <span>{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className={styles.section}>
              <h3>FAQs</h3>

              {sp.faqs?.map((f, i) => (
                <div key={i} style={{ marginBottom: "14px" }}>
                  <b>{f.q}</b>
                  <p className={styles.description}>{f.a}</p>
                </div>
              ))}
            </div>

            {/* CLOSING NOTE */}
            <div className={styles.section}>
              <h3>Closing Note</h3>
              <p className={styles.description}>
                {sp.closingNote}
              </p>
            </div>

          </main>

          <AppointmentSidebar />
        </div>
      </div>
    </div>
  );
}