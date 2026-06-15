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
            <img src="/images/dr. ramkishan.png" alt="Divya Jyoti Hospital"/>
          </div>
          <div className={styles.overviewContent}>
            <h2>About Divya Jyoti Hospital</h2>
            <h3>A Legacy of Trust, Compassion & Excellence Since 2005</h3><br />
            <p>Founded in 2005 by Dr. Ramkishan Singh, Divya Jyoti Hospital, Jewar was established with a mission to provide high-quality healthcare services to the people of Jewar and nearby communities. Built on the principles of compassion, integrity, and clinical excellence, the hospital has become a trusted name in healthcare for thousands of families across the region</p>
            <p>As one of the pioneering healthcare institutions in Jewar, Divya Jyoti Hospital introduced advanced medical facilities and reliable emergency care services at a time when quality healthcare access was limited. Over the years, the hospital has continuously evolved, adopting modern medical technologies and expanding its specialties to meet the growing healthcare needs of the community.</p>
            <p>Today, Divya Jyoti Hospital stands as a comprehensive multi-specialty healthcare centre, offering expert medical care across various disciplines, including Gynaecology & IVF, Paediatrics & NICU, Urology, General Surgery, Internal Medicine, Critical Care, Diagnostics, and Emergency Services. Our team of experienced doctors, skilled nursing staff, and dedicated healthcare professionals work together to ensure every patient receives personalized and compassionate care.</p>
            <p>We believe that healthcare is not just about treating illnesses—it is about building trust, providing comfort, and improving the quality of life for every patient who walks through our doors. With a patient-first approach and a commitment to excellence, we continue to serve the community with the same dedication and values upon which the hospital was founded.</p>

            
          </div>
        </section>
        
        <section className={styles.overview}>
          
          <div className={styles.overviewContent}>
            <h2>Why Choose Divya Jyoti Hospital?</h2>
            
              <ul>
                <li>•	<b>Established in 2005</b>  by Dr. Ramkishan Singh</li>
                <li>•	Over<b>20 years of trusted healthcare service</b> </li>
                <li>•	Advanced multi-specialty medical care under one roof</li>
                <li>•	24×7 Emergency & Critical Care Services</li>
                <li>•	Experienced and qualified medical specialists</li>
                <li>•	Modern operation theatres and diagnostic facilities</li>
                <li>•	Advanced NICU and Paediatric care services</li>
                <li>•	Patient-centric approach with compassionate treatment</li>
                <li>•	Affordable and accessible healthcare for all</li>
              </ul>
            
            
            <Link to="/contact" className="btn-primary" style={{ marginTop: '8px' }}>
              <CalendarDays size={15}/> Book Appointment
            </Link>
          </div>
          <div className={styles.overviewImg}>
            <img src="/images/Building.jpg.jpeg" alt="Divya Jyoti Hospital"/>
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
