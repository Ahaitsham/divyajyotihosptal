import { Link } from 'react-router-dom';
import { CalendarDays, CheckCircle2, Award, HeartPulse, Shield, Users, Star, Target } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <div>
      <div className="page-hero">
        <h1>About Us</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container" style={{ padding: '40px 0 60px' }}>

        {/* OVERVIEW */}
        <section className={styles.overview}>
          <div className={styles.overviewImg}>
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700" alt="Divya Jyoti Hospital"/>
          </div>
          <div className={styles.overviewContent}>
            <h2>Overview</h2>
            <p>Divya Jyoti Hospital is committed to delivering advanced and compassionate healthcare services. With modern medical infrastructure and experienced specialists, we strive to provide patient-focused treatment and holistic care.</p>
            <p>Our multidisciplinary team combines technology, expertise and empathy to ensure excellent medical outcomes while maintaining safety and comfort for every patient.</p>
            <p>We continuously innovate and uphold ethical medical practices to serve our community with trust and excellence.</p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '8px' }}>
              <CalendarDays size={15}/> Book Appointment
            </Link>
          </div>
        </section>

        {/* STATS */}
        <div className={styles.statsRow}>
          {[
            { val: '56', label: 'Hospital Beds' },
            { val: '8', label: 'Emergency Services' },
            { val: '400+', label: 'Procedures Performed' },
            { val: '18+', label: 'Years of Service' },
          ].map(s => (
            <div key={s.label} className={styles.statBox}>
              <h3>{s.val}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>

        {/* MISSION & VISION */}
        <div className={styles.mvGrid}>
          <div className={styles.mvCard}>
            <div className={styles.mvImg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500')` }}/>
            <div className={styles.mvContent}>
              <div className={styles.mvIcon}><Target size={28}/></div>
              <h3>Our Mission</h3>
              <p>To provide affordable, compassionate and advanced healthcare services while prioritising patient wellbeing and medical excellence for every individual we serve.</p>
            </div>
          </div>
          <div className={styles.mvCard}>
            <div className={styles.mvImg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500')` }}/>
            <div className={styles.mvContent}>
              <div className={styles.mvIcon}><Star size={28}/></div>
              <h3>Our Vision</h3>
              <p>To become a trusted and nationally recognised healthcare institution known for innovation, quality treatment and exceptional community care.</p>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <section className={styles.valuesSection}>
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The foundation of Divya Jyoti Hospital lies in core values that guide every decision and action.</p>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: <Users size={24}/>, title: 'Respect', desc: 'We treat every patient with dignity, compassion and genuine respect.' },
              { icon: <Shield size={24}/>, title: 'Accountability', desc: 'We uphold ethical and transparent healthcare practices at all times.' },
              { icon: <CheckCircle2 size={24}/>, title: 'Safety', desc: 'Patient safety remains our highest priority in every procedure.' },
              { icon: <HeartPulse size={24}/>, title: 'Collaboration', desc: 'Teamwork across specialities enables superior patient outcomes.' },
              { icon: <Award size={24}/>, title: 'Excellence', desc: 'We pursue excellence in treatment, technology and service delivery.' },
              { icon: <CalendarDays size={24}/>, title: 'Patient First', desc: 'Every decision is made with the patient at the absolute centre.' },
            ].map(v => (
              <div key={v.title} className={styles.valueBox}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
