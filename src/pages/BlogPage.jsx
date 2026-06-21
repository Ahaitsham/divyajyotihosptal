// 

import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, CheckCircle2 } from 'lucide-react';
import { BLOGS } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';
import styles from './BlogPage.module.css';

export default function BlogPage() {

  const { id } = useParams();

  const blog = BLOGS.find(
    b => b.id === Number(id)
  );

  if (!blog) {
    return (
      <div style={{padding:'80px',textAlign:'center'}}>
        <h2>Blog not found</h2>

        <Link 
          to="/blogs"
          className="btn-primary"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }


  const renderContent = (data)=>{

    if(Array.isArray(data)){

      return (
        <ul className={styles.list}>
          {data.map((item,i)=>(
            <li key={i}>
              <CheckCircle2 size={16}/>
              <span>
                {typeof item === "string"
                ? item
                : item.title}
              </span>
            </li>
          ))}
        </ul>
      )
    }


    return data
      .split('\n\n')
      .map((p,i)=>
        <p key={i}>{p}</p>
      );

  };



  return (

    <div>


      <div className="page-hero">

        <h1>Health Blog</h1>

        <Link 
          to="/contact"
          className="btn-green"
        >
          <CalendarDays size={15}/>
          Book Appointment
        </Link>

      </div>



      <div className="container">


        <div className={styles.layout}>


          <main>


            <Link
              to="/blogs"
              className={styles.backLink}
            >
              <ArrowLeft size={16}/>
              Back to Blogs
            </Link>



            <article className={styles.article}>


              <div className={styles.heroImg}>

                <img
                  src={blog.image}
                  alt={blog.title}
                />

                <span className={styles.cat}>
                  {blog.category}
                </span>

              </div>




              <div className={styles.body}>


                <div className={styles.meta}>
                  <Clock size={14}/>
                  {blog.date}
                </div>



                <h1>{blog.title}</h1>


                <h2 className={styles.subtitle}>
                  {blog.subtitle}
                </h2>



                {
                  blog.heroDesc &&
                  <div className={styles.heroDesc}>
                    {renderContent(blog.heroDesc)}
                  </div>
                }



                {
                  blog.content &&
                  <div>
                    {renderContent(blog.content)}
                  </div>
                }




                {
                  blog.sections?.map((section,index)=>(


                    <section 
                      className={styles.section}
                      key={index}
                    >


                      <h2>
                        {section.title}
                      </h2>



                      {
                        section.type === "cards" &&

                        <div className={styles.cards}>

                          {
                            section.content.map((card,i)=>(

                              <div 
                                className={styles.card}
                                key={i}
                              >

                                <h3>
                                  {card.title}
                                </h3>

                                <p>
                                  {card.description}
                                </p>

                              </div>

                            ))
                          }

                        </div>

                      }




                      {
                        section.type === "faq" &&

                        <div className={styles.faq}>

                          {
                            section.content.map((faq,i)=>(

                              <div key={i}>

                                <h3>
                                  {faq.title}
                                </h3>

                                <p>
                                  {faq.description}
                                </p>

                              </div>

                            ))
                          }

                        </div>

                      }




                      {
                        section.type === "tags" &&

                        <div className={styles.tags}>

                          {
                            section.content.map((tag,i)=>(

                              <span key={i}>
                                {tag}
                              </span>

                            ))
                          }

                        </div>

                      }




                      {
                        !section.type &&
                        renderContent(section.content)
                      }



                    </section>


                  ))
                }





                {
                  blog.points &&

                  <div className={styles.points}>

                    <h3>
                      Key Takeaways
                    </h3>


                    {renderContent(blog.points)}

                  </div>

                }



                <div className={styles.cta}>

                  <p>
                    Have questions or need consultation?
                    Our specialists are here to help.
                  </p>


                  <Link
                    to="/contact"
                    className="btn-primary"
                  >

                    <CalendarDays size={15}/>
                    Book Consultation

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