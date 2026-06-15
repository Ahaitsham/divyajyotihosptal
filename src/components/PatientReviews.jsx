import { useState } from 'react';
import { Star, Quote, Play, X } from 'lucide-react';
import { PATIENT_REVIEWS, PATIENT_VIDEOS } from '../data/siteData';
import styles from './PatientReviews.module.css';

export default function PatientReviews() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {/* TEXT REVIEWS */}
        <div className={styles.reviewsCol}>
          {PATIENT_REVIEWS.map(review => (
            <div key={review.id} className={styles.reviewCard}>
              <Quote size={24} color="#0085A9" className={styles.quoteIcon}/>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill={i < review.rating ? '#f5b50a' : 'none'} color="#f5b50a"/>
                ))}
              </div>
              <p className={styles.reviewText}>{review.text}</p>
              <div className={styles.reviewAuthor}>
                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                <div>
                  <h5>{review.name}</h5>
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIDEO TESTIMONIALS */}
        <div className={styles.videosCol}>
          <h3 className={styles.videosTitle}>Related videos</h3>
          {PATIENT_VIDEOS.map(video => (
            <button key={video.id} className={styles.videoCard} onClick={() => setActiveVideo(video)}>
              <div className={styles.videoThumb}>
                <img src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} alt={video.title}/>
                <div className={styles.playOverlay}>
                  <Play size={20} fill="white" color="white"/>
                </div>
              </div>
              <span className={styles.videoTitle}>{video.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className={styles.modalOverlay} onClick={() => setActiveVideo(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActiveVideo(null)}><X size={22}/></button>
            <div className={styles.iframeWrap}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className={styles.modalTitle}>{activeVideo.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
