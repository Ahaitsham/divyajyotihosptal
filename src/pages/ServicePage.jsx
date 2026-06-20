import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, CheckCircle2, Shield } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';
import styles from './ServicePage.module.css';

export default function ServicePage() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === parseInt(id));

  if (!service) return (
    <div style={{ padding: '80px', textAlign: 'center' }}>
      <h2>Service not found</h2>
      <Link to="/services" className="btn-primary" style={{ marginTop: '20px' }}>← Back to Services</Link>
    </div>
  );

  return (
    <div>
      <div className="page-hero">
        <h1>{service.name}</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <main>
            <Link to="/services" className={styles.backLink}><ArrowLeft size={16}/> Back to Services</Link>

            {/* HERO SERVICE BOX */}
            <div className={styles.box}>
              <div className={styles.text}>
                <h2>{service.name}</h2>
                <p>{service.heroDesc}</p>
                <Link to="/contact" className="btn-primary" style={{ marginTop: '8px' }}>
                  <CalendarDays size={15}/> Book Appointment
                </Link>
              </div>
              <div className={styles.imgWrap}>
                <img src={service.image} alt={service.name}/>
              </div>
            </div>

            {/* DYNAMIC SECTIONS */}
            {service.sections?.map((section, index) => (
              <div className={styles.section} key={index}>
                <h3>{section.title}</h3>

                {/* LIST (bullet / cards / tags / faq) */}
                {Array.isArray(section.content) && !section.steps && (
                  <>
                    {section.type === 'cards' ? (
                      <div className={styles.serviceCards}>
                        {section.content.map(item => (
                          <div className={styles.serviceCard} key={item.title}>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : section.type === 'tags' ? (
                      <div className={styles.tagsGrid}>
                        {section.content.map(item => (
                          <span className={styles.tag} key={item}>{item}</span>
                        ))}
                      </div>
                    ) : section.type === 'faq' ? (
                      <div className={styles.faqList}>
                        {section.content.map(item => (
                          <details className={styles.faqItem} key={item.title}>
                            <summary className={styles.faqQ}>{item.title}</summary>
                            <p className={styles.faqA}>{item.description}</p>
                          </details>
                        ))}
                      </div>
                    ) : (
                      <ul className={styles.pointList}>
                        {section.content.map(item => (
                          <li key={item}>
                            <CheckCircle2 size={16} color="#18b956"/>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* STEPS */}
                {section.steps && (
                  <div className={styles.steps}>
                    {section.content.map((item, i) => (
                      <div className={styles.step} key={item}>
                        <b>Step {i + 1}</b>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* PLAIN TEXT */}
                {typeof section.content === 'string' && (
                  <p className={styles.description}>{section.content}</p>
                )}
              </div>
            ))}

            {/* FALLBACK WHY-CHOOSE-US — only shown if service has no custom "Why" section */}
            {!service.sections?.some(s => /why (choose|patients|families)/i.test(s.title)) && (
              <div className={styles.section}>
                <h3>Why Choose Divya Jyoti Hospital?</h3>
                <div className={styles.whyBox}>
                  <Shield size={40} color="#0085A9"/>
                  <p>Our {service.name} team combines experienced specialists, modern infrastructure and patient-first care to provide safe and effective treatment.</p>
                </div>
              </div>
            )}
          </main>

          <AppointmentSidebar/>
        </div>
      </div>
    </div>
  );
}