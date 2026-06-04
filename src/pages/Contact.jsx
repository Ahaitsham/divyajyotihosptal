import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/siteData';
import styles from './Contact.module.css';

// ─── EMAILJS SETUP GUIDE ────────────────────────────────────────────────────
//
// The Gmail API error (412 insufficient scopes) happens when you connect
// Gmail using "Gmail API" in EmailJS. Use PERSONAL EMAIL SERVICE instead:
// 
// CORRECT SETUP STEPS:
// 1. Go to https://www.emailjs.com → Email Services → Add New Service
// 2. Choose "Personal Email" (NOT Gmail API) OR "Gmail" via OAuth
//    For Gmail OAuth: Click "Sign in with Google" → grant ALL requested scopes
//    For other email: choose "Other" and enter your SMTP details
// 3. Alternatively use SMTP directly:
//    Host: smtp.gmail.com, Port: 587, User: your@gmail.com
//    Password: a Gmail App Password (NOT your regular password)
//    → Google Account → Security → 2FA enabled → App Passwords → generate one
// 4. Create a Template with these variables (match exactly):
//    {{from_name}}  {{from_phone}}  {{from_email}}  {{department}}  {{message}}
// 5. Copy your Service ID, Template ID, and Public Key into the .env file:
//    VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//    VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//    VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
//
// Then uncomment the import and emailjs.send block below.
// ────────────────────────────────────────────────────────────────────────────

import emailjs from '@emailjs/browser'; // npm install @emailjs/browser

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', department: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [savedName, setSavedName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setSavedName(form.name);

    try {
      // ── STEP 1: Send Email via EmailJS ──────────────────────────────────
      // Uncomment this block once you have your EmailJS credentials:
      //
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_phone:   form.phone,
          from_email:   form.email || 'Not provided',
          department:   form.department || 'Not specified',
          message:      form.message || 'No message',
          to_email:     'ahtshamsaifi345@gmail.com',
          reply_to:     form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // ── STEP 2: Send WhatsApp notification ─────────────────────────────
      // This opens WhatsApp with a pre-filled message to your number.
      // Uncomment to enable:
      //
      const waText = encodeURIComponent(
        `🏥 *New Appointment Request*\n\n` +
        `👤 *Name:* ${form.name}\n` +
        `📞 *Phone:* ${form.phone}\n` +
        `📧 *Email:* ${form.email || 'N/A'}\n` +
        `🏥 *Department:* ${form.department || 'Not specified'}\n` +
        `📝 *Message:* ${form.message || 'No message'}`
      );
      window.open(`https://wa.me/${CONTACT.whatsapp}?text=${waText}`, '_blank');

      // Simulate success (remove this line once EmailJS is configured)
      await new Promise(r => setTimeout(r, 1200));

      setStatus('success');
      setForm({ name: '', phone: '', email: '', department: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div>
      <div className="page-hero">
        <h1>Contact Us</h1>
      </div>

      <div className="container" style={{ padding: '50px 0 20px' }}>
        <div className={styles.layout}>

          {/* INFO */}
          <div className={styles.infoPanel}>
            <h2>Get In Touch</h2>
            <p>We're here to help you with appointments, queries and emergency care. Reach us through any of the channels below.</p>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><Phone size={22}/></div>
                <div>
                  <h4>Phone / Emergency</h4>
                  <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><Mail size={22}/></div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><MapPin size={22}/></div>
                <div>
                  <h4>Address</h4>
                  <p>{CONTACT.address}</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}><Clock size={22}/></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>OPD: Mon–Sat, 9 AM – 7 PM</p>
                  <p>Emergency: 24×7</p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              <MessageCircle size={18}/> Chat on WhatsApp
            </a>
          </div>

          {/* FORM */}
          <div className={styles.formPanel}>
            <h2>Book an Appointment</h2>
            <p>Fill in the form and our team will contact you within the hour.</p>

            {status === 'success' ? (
              <div className={styles.success}>
                <CheckCircle2 size={48} color="#18b956"/>
                <h3>Appointment Request Sent!</h3>
                <p>Thank you, {savedName || 'there'}! We've received your request and will call you shortly.</p>
              </div>
            ) : status === 'error' ? (
              <div className={styles.errorBox}>
                <p>⚠️ Something went wrong. Please call us directly at <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a> or try again.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Full Name *</label>
                    <input required placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                  </div>
                  <div className={styles.field}>
                    <label>Phone Number *</label>
                    <input required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}/>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Email Address</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
                  </div>
                  <div className={styles.field}>
                    <label>Department</label>
                    <select value={form.department} onChange={e => setForm({...form, department: e.target.value})}>
                      <option value="">Select Department</option>
                      <option>IVF & Fertility</option>
                      <option>Gynecology</option>
                      <option>NICU / Pediatrics</option>
                      <option>Cardiology</option>
                      <option>Orthopedics</option>
                      <option>General Medicine</option>
                      <option>Emergency Care</option>
                      <option>General Surgery</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Message / Concern</label>
                  <textarea rows={4} placeholder="Describe your concern or preferred appointment time..." value={form.message} onChange={e => setForm({...form, message: e.target.value})}/>
                </div>
                <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                  <Send size={16}/>
                  {status === 'loading' ? 'Sending Request…' : 'Send Appointment Request'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
