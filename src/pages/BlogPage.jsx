import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, CheckCircle2 } from 'lucide-react';
import { BLOGS } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';
import styles from './BlogPage.module.css';

export default function BlogPage() {
  const { id } = useParams();
  const blog = BLOGS.find(b => b.id === parseInt(id));

  if (!blog) return (
    <div style={{ padding: '80px', textAlign: 'center' }}>
      <h2>Blog not found</h2>
      <Link to="/blogs" className="btn-primary" style={{ marginTop: '20px' }}>← Back to Blogs</Link>
    </div>
  );

  return (
    <div>
      <div className="page-hero">
        <h1>Health Blog</h1>
        <Link to="/contact" className="btn-green"><CalendarDays size={15}/> Book An Appointment</Link>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <main>
            <Link to="/blogs" className={styles.backLink}><ArrowLeft size={16}/> Back to Blogs</Link>

            <article className={styles.article}>
              <div className={styles.heroImg}>
                <img src={blog.image} alt={blog.title}/>
                <span className={styles.cat}>{blog.category}</span>
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <Clock size={14}/> {blog.date}
                </div>
                <h1>{blog.title}</h1>
                <h2 className={styles.subtitle}>{blog.subtitle}</h2>

                {blog.content.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                <div className={styles.points}>
                  <h3>Key Takeaways</h3>
                  <ul>
                    {blog.points.map(pt => (
                      <li key={pt}><CheckCircle2 size={16} color="#0085A9"/>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cta}>
                  <p>Have questions or need a consultation? Our specialists are here to help.</p>
                  <Link to="/contact" className="btn-primary">
                    <CalendarDays size={15}/> Book a Consultation
                  </Link>
                </div>
              </div>
            </article>
          </main>

          <AppointmentSidebar/>
        </div>
      </div>
    </div>
  );
}
