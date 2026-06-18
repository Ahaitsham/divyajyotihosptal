import { Link } from 'react-router-dom';
import { CalendarDays, CheckCircle2, Award, HeartPulse, Shield, Users, Star, Target } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <div>
      <div className="page-hero">
        <h1>About Us</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15} /> Book An Appointment</Link>
      </div>

      <div className="container" style={{ padding: '40px 0 60px' }}>

        {/* OVERVIEW */}
        <section className={styles.overview}>
          <div className={styles.overviewImg}>
            <img src="/images/dr. ramkishan.png" alt="Divya Jyoti Hospital" />
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
              <CalendarDays size={15} /> Book Appointment
            </Link>
          </div>
          <div className={styles.overviewImg}>
            <img src="/images/Building.jpg.jpeg" alt="Divya Jyoti Hospital" />
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

        <section className={styles.overview}>
          <div className={styles.overviewImg}>
            <img src="/images/Dr.Tarun.jpeg" alt="Divya Jyoti Hospital" />
          </div>
          <div className={styles.overviewContent}>
            <h2>Director's Message</h2>
            <h3>Message from Dr. Tarun Singh</h3><br />
            <p>Healthcare is more than treating diseases—it is about restoring confidence, improving quality of life, and building lasting relationships with patients and their families.</p>
            <p>At Divya Jyoti Hospital, my vision has always been to create a center where advanced medical expertise meets genuine compassion. Every patient who walks through our doors deserves individualized attention, transparent communication, and treatment based on the latest medical advancements.</p>
            <p>As a Urologist and Surgeon, I have dedicated my career to providing effective, minimally invasive, and evidence-based solutions that help patients return to their normal lives as quickly as possible. We continuously invest in modern technology, skilled professionals, and quality systems to ensure the highest standards of care.</p>
            <p>Our greatest achievement is the trust our patients place in us. That trust inspires us every day to raise the benchmark of healthcare delivery and remain committed to excellence in every aspect of patient care</p>
            <p>Thank you for choosing Divya Jyoti Hospital. We are honored to serve you and your family.</p>
            <p><b>Dr. Tarun Singh</b> <br />
            Director & Consultant Urologist <br />
            Divya Jyoti Hospital Jewar</p>


          </div>
        </section>


        <section className={styles.overview}>

          <div className={styles.overviewContent}>
            <h2>Director's Message</h2>
            <h3>Message from Dr. Rashmi Pilania</h3><br />
            <p>Every woman deserves healthcare that is compassionate, respectful, and designed around her unique needs. At Divya Jyoti Hospital, we strive to create an environment where women and families feel supported, understood, and empowered throughout their healthcare journey.</p>
            <p>My passion lies in helping women achieve better health and assisting couples in realizing their dream of parenthood. Whether it is routine gynecological care, high-risk pregnancy management, fertility treatment, or reproductive health guidance, our approach combines clinical excellence with personalized attention.</p>
            <p>We understand that behind every medical consultation is a story, a hope, and often a life-changing decision. That is why we focus not only on treatment but also on building confidence, providing emotional support, and ensuring that every patient feels valued and cared for.</p>
            <p>At Divya Jyoti Hospital, we are committed to bringing advanced fertility and women's healthcare services closer to our community while maintaining the highest standards of safety, ethics, and medical excellence.</p>
            <p>It is a privilege to be a part of your healthcare journey, and we look forward to serving you with dedication and compassion.</p>
            <p><b>Dr. Rashmi Pilania</b> <br />
            Director & Consultant Obstetrician, Gynaecologist & Fertility Specialist <br /> 
            Divya Jyoti Hospital, Jewar</p>
            

          </div>

          <div className={styles.overviewImg}>
            <img src="/images/Dr.Rashmi.jpeg" alt="Divya Jyoti Hospital" />
          </div>
        </section>

        {/* MISSION & VISION */}
        <div className={styles.mvGrid}>
          <div className={styles.mvCard}>
            <div className={styles.mvImg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500')` }} />
            <div className={styles.mvContent}>
              <div className={styles.mvIcon}><Target size={28} /></div>
              <h3>Our Mission</h3>
              <p>To provide affordable, compassionate and advanced healthcare services while prioritising patient wellbeing and medical excellence for every individual we serve.</p>
            </div>
          </div>
          <div className={styles.mvCard}>
            <div className={styles.mvImg} style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500')` }} />
            <div className={styles.mvContent}>
              <div className={styles.mvIcon}><Star size={28} /></div>
              <h3>Our Vision</h3>
              <p>To become a trusted and nationally recognised healthcare institution known for innovation, quality treatment and exceptional community care.</p>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <section className={styles.valuesSection}>
          <div className="section-title">
            <h2>"Healing with Compassion, Serving with Excellence."</h2>
            <p>Divya Jyoti Hospital, Jewar – Trusted Healthcare for Every Generation Since 2005.</p>
          </div>
          <div className={styles.valuesGrid}>
            {[
              { icon: <Users size={24} />, title: 'Respect', desc: 'We treat every patient with dignity, compassion and genuine respect.' },
              { icon: <Shield size={24} />, title: 'Accountability', desc: 'We uphold ethical and transparent healthcare practices at all times.' },
              { icon: <CheckCircle2 size={24} />, title: 'Safety', desc: 'Patient safety remains our highest priority in every procedure.' },
              { icon: <HeartPulse size={24} />, title: 'Collaboration', desc: 'Teamwork across specialities enables superior patient outcomes.' },
              { icon: <Award size={24} />, title: 'Excellence', desc: 'We pursue excellence in treatment, technology and service delivery.' },
              { icon: <CalendarDays size={24} />, title: 'Patient First', desc: 'Every decision is made with the patient at the absolute centre.' },
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
