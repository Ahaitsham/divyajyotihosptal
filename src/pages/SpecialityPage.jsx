import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CalendarDays, 
  CheckCircle2, 
  Shield 
} from 'lucide-react';

import { SPECIALITIES } from '../data/siteData';
import AppointmentSidebar from '../components/AppointmentSidebar';

import styles from './SpecialityPage.module.css';


export default function SpecialityPage() {


  const { id } = useParams();


  const sp = SPECIALITIES.find(
    item => item.id === Number(id)
  );



  if(!sp){

    return (

      <div style={{
        padding:"80px",
        textAlign:"center"
      }}>

        <h2>
          Speciality not found
        </h2>


        <Link 
          to="/specialities"
          className="btn-primary"
        >
          ← Back to Specialities
        </Link>


      </div>

    );

  }





  return (

    <div>



      <div className="page-hero">


        <h1>
          {sp.name}
        </h1>


        <Link
          to="/contact"
          className="btn-green"
        >

          <CalendarDays size={15}/>

          Book An Appointment

        </Link>


      </div>





      <div className="container">


        <div className={styles.layout}>


          <main>



            <Link
              to="/specialities"
              className={styles.backLink}
            >

              <ArrowLeft size={16}/>

              Back to Specialities

            </Link>





            {/* TOP BOX */}

            <div className={styles.box}>


              <div className={styles.text}>


                <h2>
                  {sp.name}
                </h2>


                <p>
                  {sp.heroDesc}
                </p>



                <Link
                  to="/contact"
                  className="btn-primary"
                >

                  <CalendarDays size={15}/>

                  Book Appointment

                </Link>


              </div>





              <div className={styles.imgWrap}>


                <img
                  src={sp.image}
                  alt={sp.name}
                />


              </div>



            </div>









            {/* DYNAMIC CONTENT */}



            {
              sp.sections?.map((section,index)=>(


                <div
                  className={styles.section}
                  key={index}
                >



                  <h3>
                    {section.title}
                  </h3>





                  {/* LIST */}

                  {
                    Array.isArray(section.content)
                    &&
                    !section.steps
                    &&

                    (

                    <ul className={styles.pointList}>


                      {
                        section.content.map(item=>(


                          <li key={item}>


                            <CheckCircle2
                              size={16}
                              color="#de7639"
                            />


                            {item}


                          </li>


                        ))
                      }


                    </ul>


                    )

                  }






                  {/* STEPS */}


                  {
                    section.steps
                    &&

                    (

                    <div className={styles.steps}>


                      {
                        section.content.map((item,i)=>(


                          <div
                            className={styles.step}
                            key={item}
                          >

                            <b>
                              Step {i+1}
                            </b>


                            <span>
                              {item}
                            </span>


                          </div>


                        ))
                      }


                    </div>

                    )

                  }








                  {/* TEXT */}


                  {
                    typeof section.content === "string"
                    &&

                    (

                    <p className={styles.description}>

                      {section.content}

                    </p>

                    )

                  }



                </div>



              ))
            }









            {/* COMMON WHY BOX */}


            {/* <div className={styles.section}>


              <h3>
                Why Choose Divya Jyoti Hospital?
              </h3>



              <div className={styles.whyBox}>


                <Shield
                  size={40}
                  color="#0085A9"
                />


                <p>

                  Our {sp.name} team combines
                  experienced specialists, modern
                  infrastructure and patient-first care
                  to provide safe and effective treatment.

                </p>


              </div>



            </div> */}




          </main>





          <AppointmentSidebar />


        </div>


      </div>


    </div>

  );

}