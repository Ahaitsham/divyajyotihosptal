import { Link } from 'react-router-dom';
import { CalendarDays, ArrowRight, Clock } from 'lucide-react';
import { BLOGS } from '../data/siteData';
import styles from './Blogs.module.css';

export default function Blogs() {
  return (
    <div>
      <div className="page-hero">
        <h1>Health Blogs</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container" style={{ padding: '50px 0 70px' }}>
        <div className="section-title">
          <h2>Latest Health Articles</h2>
          <p>Expert insights to help you stay informed and healthy</p>
        </div>

        <div className={styles.grid}>
          {BLOGS.map(blog => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className={styles.card}>
              <div className={styles.img} style={{ backgroundImage: `url(${blog.image})` }}>
                <span className={styles.cat}>{blog.category}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <Clock size={13}/> {blog.date}
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.subtitle}</p>
                <span className={styles.read}>Read Article <ArrowRight size={14}/></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
