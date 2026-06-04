import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, CheckCircle2, Shield } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';
import styles from './ServicePage.module.css';

const SERVICE_DETAILS = {
  1: {
    title: 'Emergency & Trauma Care',
    intro: 'Divya Jyoti Hospital\'s Emergency & Trauma department provides round-the-clock emergency services to accident and emergency victims. Equipped with advanced facilities and specialised teams, we ensure rapid medical care for every critical situation.',
    points: ['Dedicated Emergency Surgery procedures', 'Specialised ICU and Trauma care', 'Advanced monitoring systems', 'Cardiac and Neuro Emergency support', 'Emergency laboratory and diagnostics', 'Multiple observation and recovery beds', '24×7 Fast Ambulance Services'],
    why: 'Our hospital combines compassionate care with advanced technology, ensuring timely diagnosis and treatment during medical emergencies. Patient safety, rapid response and expert care remain our highest priorities.',
  },
  2: {
    title: 'IVF & Infertility Treatment',
    intro: 'Our IVF centre offers comprehensive fertility solutions with state-of-the-art laboratory infrastructure and experienced reproductive specialists. We personalise every treatment protocol to maximise success rates.',
    points: ['IVF and ICSI procedures', 'IUI (Intrauterine Insemination)', 'Egg and embryo freezing', 'Donor egg and sperm programmes', 'Preimplantation Genetic Testing (PGT)', 'Fertility counselling and support'],
    why: 'Divya Jyoti Hospital\'s IVF team combines clinical expertise with empathetic care to guide couples through their fertility journey with confidence and hope.',
  },
  3: {
    title: 'NICU — Neonatal Intensive Care',
    intro: 'Our Level III NICU is equipped with advanced monitoring technology and staffed by experienced neonatologists to provide the best possible care for premature and critically ill newborns.',
    points: ['Advanced incubators and warmers', 'Ventilator support for preterm babies', 'Phototherapy for jaundice', 'Continuous vital monitoring', 'Infection control protocols', 'Parental guidance and counselling'],
    why: 'We believe every newborn deserves the best start in life. Our NICU team works tirelessly to ensure optimal outcomes for even the most vulnerable neonates.',
  },
  4: {
    title: 'Radiology & Imaging',
    intro: 'Our digital radiology suite offers a full range of diagnostic imaging services interpreted by expert radiologists for accurate and timely diagnosis.',
    points: ['Digital X-ray', 'Colour Doppler Ultrasound', 'CT Scan', 'MRI', '2D Echo Cardiography', 'Mammography'],
    why: 'Accurate imaging is the cornerstone of effective treatment. Our radiologists provide detailed reports ensuring every clinician has the information needed for optimal patient care.',
  },
  5: {
    title: 'Pathology Laboratory',
    intro: 'Our NABL-accredited pathology lab offers comprehensive diagnostic testing with rapid turnaround times and accurate results.',
    points: ['Haematology & Biochemistry', 'Microbiology & Culture', 'Histopathology & Cytology', 'Hormone & Thyroid profiles', 'Pregnancy and fertility tests', 'Home sample collection available'],
    why: 'Reliable diagnostics underpin effective treatment. Our lab uses advanced automated analysers and quality-controlled processes for precise results every time.',
  },
  6: {
    title: '24×7 Pharmacy',
    intro: 'Our in-house pharmacy stocks a comprehensive range of medications, surgical consumables and healthcare products, available round the clock for inpatients and outpatients.',
    points: ['24×7 dispensing services', 'Genuine branded and generic medicines', 'Surgical consumables and equipment', 'Home delivery facility', 'Pharmacist counselling available', 'Insurance billing support'],
    why: 'Patient convenience and medication safety are paramount. Our pharmacists ensure the right medication is dispensed at the right time with proper counselling.',
  },
};

export default function ServicePage() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === parseInt(id));
  const details = SERVICE_DETAILS[parseInt(id)];

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
            <div className={styles.serviceBox}>
              <div className={styles.serviceText}>
                <h2>{details.title}</h2>
                <p>{details.intro}</p>
              </div>
              <div className={styles.serviceImg}>
                <img src={service.image} alt={service.name}/>
              </div>
            </div>

            {/* FACILITIES */}
            <div className={styles.section}>
              <h3>Facilities at Divya Jyoti Hospital</h3>
              <ul className={styles.pointList}>
                {details.points.map(pt => (
                  <li key={pt}><CheckCircle2 size={16} color="#18b956"/>{pt}</li>
                ))}
              </ul>
            </div>

            {/* WHY */}
            <div className={styles.section}>
              <h3>Why Choose Divya Jyoti Hospital?</h3>
              <div className={styles.whyBox}>
                <Shield size={40} color="#0085A9"/>
                <p>{details.why}</p>
              </div>
            </div>
          </main>

          <AppointmentSidebar/>
        </div>
      </div>
    </div>
  );
}
