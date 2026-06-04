import { Link } from 'react-router-dom';
import { CalendarDays, Award } from 'lucide-react';
import styles from './Director.module.css';

export default function Director() {
  return (
    <div>
      <div className="page-hero">
        <h1>Management & Advisory Board</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container" style={{ padding: '50px 0 70px' }}>
        <div className="section-title">
          <h2>Management and Advisory Board</h2>
          <p>The hospital is managed by dedicated executives with deep managerial expertise. The advisory board provides strategic guidance and serves as a tremendous ally of the management team.</p>
        </div>

        <div className={styles.tabBadge}>Management</div>

        <div className={styles.profileSection}>
          <div className={styles.profileLeft}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500" alt="Dr. Dharmendra Kumar Gupta"/>
            <div className={styles.nameTag}>
              <h3>Dr. Dharmendra Kumar Gupta</h3>
              <p>Chairman & Managing Director</p>
            </div>
          </div>
          <div className={styles.profileRight}>
            <div className={styles.profileContent}>
              <div className={styles.profileTitle}>
                <Award size={32} color="#DE7639"/>
                <div>
                  <h2>Dr. Dharmendra Kumar Gupta</h2>
                  <p>Chairman & Managing Director</p>
                </div>
              </div>
              <p><strong>Dr. Dharmendra Kumar Gupta</strong> is a highly experienced healthcare professional and visionary leader with extensive expertise in hospital management and medical administration.</p>
              <p>He has played a significant role in establishing advanced healthcare facilities and improving patient-centred medical services. His leadership continues to guide Divya Jyoti Hospital toward clinical excellence, innovation and compassionate care.</p>
              <p>Under his direction, the hospital focuses on ethical practices, modern healthcare technology and accessible treatment for all patients regardless of their economic background.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
