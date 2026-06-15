import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, CalendarDays, ChevronRight, Star, Users, Clock, Award,
  HeartPulse, Baby, Stethoscope, Bone, Scissors, Zap, FlaskConical,
  Pill, Ambulance, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, MapPin
} from 'lucide-react';
import { DOCTORS, SPECIALITIES, BLOGS, FAQS, CONTACT } from '../data/siteData';
import HeroCarousel from '../components/HeroCarousel';
import DoctorsCarousel from '../components/DoctorsCarousel';
import styles from './Home.module.css';
import { submitForm } from '../hooks/useFormSubmit';


const ICON_MAP = {
  HeartPulse, Baby, Stethoscope, Bone, Scissors, Zap,
  FlaskConical, Pill, Ambulance, Heart: HeartPulse,
  Activity: Zap, Users,
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', concern: '' });
  const [formStatus, setFormStatus] = useState('idle');

const handleFormSubmit = async (e) => {
  e.preventDefault();

  setFormStatus('loading');

  try {

    await submitForm({
      name: form.name,
      phone: form.phone,
      department: form.concern,
      formType: "Homepage Appointment Request"
    });


    setFormStatus('success');

    setTimeout(() => {
      setFormStatus('idle');
      setForm({
        name: '',
        phone: '',
        concern: ''
      });
    },3000);


  } catch(error) {

    console.error("Form submission failed:", error);
    setFormStatus('idle');

    alert("Something went wrong. Please try again.");

  }
};

  return (
    <div className={styles.home}>

      {/* ── HERO CAROUSEL ── */}
      <HeroCarousel />

      {/* ── STATS BAR ── */}
      <div className={styles.statsBarStatic}>
        {[
          { icon: <Users size={22}/>, val: '250+', label: 'Specialists' },
          { icon: <Clock size={22}/>, val: '24×7', label: 'Emergency' },
          { icon: <HeartPulse size={22}/>, val: '10,000+', label: 'Patients Yearly' },
          { icon: <Star size={22}/>, val: '4.8★', label: 'Patient Rating' },
        ].map(s => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statIcon}>{s.icon}</div>
            <div>
              <div className={styles.statVal}>{s.val}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── QUICK SERVICES ── */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-title">
            <h2>Quick Services</h2>
            <p>Comprehensive healthcare services designed around your needs</p>
          </div>
          <div className={styles.quickGrid}>
            {[
              { icon: <Ambulance size={28}/>, label: 'Emergency & Trauma Care', path: '/services' },
              { icon: <Stethoscope size={28}/>, label: 'Doctor Consulation', path: '/services' },
              { icon: <CheckCircle2 size={28}/>, label: 'Preventive Health Checkup', path: '/services' },
              { icon: <Zap size={28}/>, label: 'Radiology', path: '/services' },
              { icon: <FlaskConical size={28}/>, label: 'Path Lab', path: '/services' },
              { icon: <Pill size={28}/>, label: 'Pharmacy', path: '/services' },
              { icon: <HeartPulse size={28}/>, label: 'Home Care', path: '/services' },
            ].map(item => (
              <Link to={item.path} key={item.label} className={styles.quickCard}>
                <div className={styles.quickIcon}>{item.icon}</div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALITIES ── */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="container">
          <div className="section-title">
            <h2>Our Specialities</h2>
            <p>World-class medical expertise across key specialities</p>
          </div>
          <div className={styles.specialitiesGrid}>
            {SPECIALITIES.map(sp => (
              <Link to="/specialities" key={sp.id} className={styles.spCard}>
                <div className={styles.spImg} style={{ backgroundImage: `url(${sp.image})` }} />
                <div className={styles.spContent}>
                  <h4>{sp.name}</h4>
                  <p>{sp.desc}</p>
                  <span className={styles.spLink}>Learn More <ArrowRight size={14}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT FORM ── */}
      <section className={styles.apptSection}>
        <div className="container">
          <div className={styles.apptWrap}>
            <div className={styles.apptLeft}>
              <h2>Schedule Your Consultation Today</h2>
              <p>Our specialists are ready to help. Fill in your details and we'll get back to you within the hour.</p>
              <ul className={styles.apptFeatures}>
                {['Expert doctors available 24×7', 'Same-day appointments available', 'Insurance & cashless facility', 'Free first consultation for seniors'].map(f => (
                  <li key={f}><CheckCircle2 size={16}/> {f}</li>
                ))}
              </ul>
            </div>
            <div className={styles.apptRight}>
              {formStatus === 'success' ? (
                <div className={styles.formSuccess}>
                  <CheckCircle2 size={40} color="#18b956"/>
                  <h3>Thank You!</h3>
                  <p>We've received your request and will call you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className={styles.apptForm}>
                  <h3>Book an Appointment</h3>
                  <div className={styles.formRow}>
                    <input required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                    <input required placeholder="Mobile Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}/>
                  </div>
                  <input placeholder="Department / Concern" value={form.concern} onChange={e => setForm({...form, concern: e.target.value})}/>
                  <button type="submit" className="btn-green" disabled={formStatus === 'loading'}>
                    <CalendarDays size={16}/>
                    {formStatus === 'loading' ? 'Submitting…' : 'Request Appointment'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctors</h2>
            <p>Experienced specialists dedicated to your wellbeing</p>
          </div>
          <DoctorsCarousel />
          <div className={styles.viewAll}>
            <Link to="/doctors" className="btn-primary">
              View All Doctors <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={`${styles.section} ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyImg}>
              <img src="/images/Building.jpg.jpeg" alt="Hospital"/>
              <div className={styles.whyBadge}>
                <Award size={28}/>
                <div> 
                  <strong>NABH</strong>
                  <span>Accredited</span>
                </div>
              </div>
            </div>
            <div className={styles.whyContent}>
              <h2>Why Choose Divya Jyoti Hospital?</h2>
              <p>We combine cutting-edge medical technology with compassionate care to deliver exceptional outcomes for every patient.</p>
              <div className={styles.whyPoints}>
                {[
                  { icon: <HeartPulse size={20}/>, title: 'Advanced Technology', desc: 'State-of-the-art equipment for accurate diagnostics and treatment.' },
                  { icon: <Users size={20}/>, title: 'Expert Specialists', desc: '250+ experienced doctors across 20+ specialities.' },
                  { icon: <Clock size={20}/>, title: '24×7 Emergency', desc: 'Round-the-clock emergency care with rapid response teams.' },
                  { icon: <Award size={20}/>, title: 'Accredited Quality', desc: 'NABH accredited for highest standards of patient care.' },
                ].map(pt => (
                  <div key={pt.title} className={styles.whyPoint}>
                    <div className={styles.whyPointIcon}>{pt.icon}</div>
                    <div>
                      <h5>{pt.title}</h5>
                      <p>{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className={`${styles.section} ${styles.sectionGray}`}>
        <div className="container">
          <div className="section-title">
            <h2>Health Blogs</h2>
            <p>Stay informed with expert healthcare insights</p>
          </div>
          <div className={styles.blogsGrid}>
            {BLOGS.map(blog => (
              <Link to={`/blogs/${blog.id}`} key={blog.id} className={styles.blogCard}>
                <div className={styles.blogImg} style={{ backgroundImage: `url(${blog.image})` }}>
                  <span className={styles.blogCat}>{blog.category}</span>
                </div>
                <div className={styles.blogContent}>
                  <p className={styles.blogDate}>{blog.date}</p>
                  <h4>{blog.title}</h4>
                  <p className={styles.blogExcerpt}>{blog.subtitle}</p>
                  <span className={styles.blogRead}>Read More <ArrowRight size={14}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section}>
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common queries</p>
          </div>
          <div className={styles.faqList}>
            {FAQS.map((faq, i) => (
              <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
                <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                </button>
                {openFaq === i && <div className={styles.faqA}>{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
