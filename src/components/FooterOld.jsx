import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/siteData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      {/* MAP */}
      <div className="map-placeholder">
        <MapPin size={28} />
        Google Map — Divya Jyoti Hospital, {CONTACT.address}
      </div>

      <footer className={styles.footer}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>Divya Jyoti Hospital</h3>
            <p>Your Health, Our Priority</p>
            <p className={styles.tagline}>Providing compassionate and advanced healthcare with experienced specialists since 2005.</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {[['About', '/about'], ['Doctors', '/doctors'], ['Specialities', '/specialities'], ['Services', '/services'], ['Blogs', '/blogs'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Specialities</h4>
            <ul>
              {['IVF & Fertility', 'Gynecology', 'NICU', 'Pediatrics', 'Cardiology', 'Orthopedics'].map(s => (
                <li key={s}><Link to="/specialities">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <li><Phone size={14} /><a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a></li>
              <li><Mail size={14} /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><MapPin size={14} /><span>{CONTACT.address}</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 Divya Jyoti Hospital. All Rights Reserved. | Website  Developed by <a href="https://ahaitshamkhan.vercel.app" target="_blank" rel="noopener noreferrer">Ahaitsham</a>
          </p>
        </div>
      </footer>

      {/* WHATSAPP FAB */}
      <a
        href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </>
  );
}
