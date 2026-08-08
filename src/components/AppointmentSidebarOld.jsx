import { useState } from 'react';
import { CalendarDays, Phone, Send } from 'lucide-react';
import { CONTACT } from '../data/siteData';
import styles from './AppointmentSidebar.module.css';

export default function AppointmentSidebar() {
  const [form, setForm] = useState({ name: '', phone: '', concern: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    await new Promise(r => setTimeout(r, 1000));
    setStatus('success');
    setTimeout(() => { setStatus('idle'); setForm({ name: '', phone: '', concern: '' }); }, 3000);
  };

  return (
    <aside className={styles.sidebar}>
      {/* QUICK LINKS */}
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Quick Actions</h3>
        <a href="/contact" className={styles.quickBtn}>
          <CalendarDays size={16} />
          Book an Appointment
        </a>
        <a href={`tel:${CONTACT.phone}`} className={`${styles.quickBtn} ${styles.greenBtn}`}>
          <Phone size={16} />
          {CONTACT.phone}
        </a>
        <a
          href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g,'')}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.quickBtn} ${styles.waBtn}`}
        >
          WhatsApp Us
        </a>
      </div>

      {/* APPOINTMENT FORM */}
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Request an Appointment</h3>
        {status === 'success' ? (
          <div className={styles.success}>
            ✓ Thank you! We'll contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={`sidebar-form ${styles.form}`}>
            <input
              required
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
            />
            <input
              required
              placeholder="Contact Number"
              value={form.phone}
              onChange={e => setForm({...form, phone: e.target.value})}
            />
            <textarea
              rows={4}
              placeholder="Your Concern / Department"
              value={form.concern}
              onChange={e => setForm({...form, concern: e.target.value})}
            />
            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              <Send size={15} />
              {status === 'loading' ? 'Sending…' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}
