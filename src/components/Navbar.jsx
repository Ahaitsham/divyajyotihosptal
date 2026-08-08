import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { CONTACT } from '../data/siteData';
import { submitForm } from '../hooks/useFormSubmit';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Specialities', path: '/specialities' },
  { label: 'Services', path: '/services' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitForm({
        name: form.name,
        phone: form.phone,
        formType: 'Call Back Request',
      });
      setStatus('success');
      // Auto-close modal after showing success for 2.5s
      setTimeout(() => {
        setCallbackOpen(false);
        setStatus('idle');
        setForm({ name: '', phone: '' });
      }, 2500);
    } catch (err) {
      console.error('Callback form error:', err);
      setStatus('error');
    }
  };

  return (
    <>
      {/* TOP BAR — sticky */}
      <div className={styles.topbar}>
        <div className={styles.topbarInner}>
       
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="Divya Jyoti Hospital" className={styles.logoImg} />
          </Link>

          <div className={styles.topRight}>
            <a href={`tel:${CONTACT.phone}`} className={styles.emergency}>
              <Phone size={15} />
              <span>Emergency: {CONTACT.phone}</span>
            </a>
            <button className={styles.callbackBtn} onClick={() => setCallbackOpen(true)}>
              Request Call Back
            </button>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP NAV — below topbar */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

     
      {menuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.mobileDrawer} onClick={e => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              <img src="/logo.png" alt="Divya Jyoti Hospital" className={styles.drawerLogo} />
              <button className={styles.drawerClose} onClick={() => setMenuOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className={styles.drawerLinks}>
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${styles.drawerLink} ${location.pathname === link.path ? styles.drawerActive : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={styles.drawerFooter}>
              <a href={`tel:${CONTACT.phone}`} className={styles.drawerPhone}>
                <Phone size={15}/> {CONTACT.phone}
              </a>
              <button className={styles.drawerCallbackBtn} onClick={() => { setMenuOpen(false); setCallbackOpen(true); }}>
                Request Call Back
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CALLBACK MODAL */}
      {callbackOpen && (
        <div className={styles.modalOverlay} onClick={() => { setCallbackOpen(false); setStatus('idle'); }}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => { setCallbackOpen(false); setStatus('idle'); }}><X size={20}/></button>
            <h3>Request a Call Back</h3>
            <p>Our team will call you back shortly.</p>

            {status === 'success' ? (
              <div className={styles.successMsg}>✓ Thank you, {form.name}! We'll call you soon.</div>
            ) : status === 'error' ? (
              <div className={styles.errorMsg}>
                Something went wrong. Please call us directly at <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.callbackForm}>
                <input
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  disabled={status === 'loading'}
                />
                <input
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  disabled={status === 'loading'}
                />
                <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
