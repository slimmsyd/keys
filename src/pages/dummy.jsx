


import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import styles from '../styles/expertise.module.css'
import Header from '../components/Header'
import Lenis from '@studio-freight/lenis'
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import KeysImage from '../../src/assets/keys-eyl.jpeg'
import KeysEylImage from '../../src/assets/keys-full-eyl.jpeg'
import Keys from '../../src/assets/19keys.jpeg'
import Keys2 from "../../src/assets/19Keys_2.jpeg"
import preloadImages from '../components/ScrollAnimation/utils'
import { ScrollTrigger  } from 'gsap/all'
import PieChart from '../components/PieChart';
import TourImageOne from '../assets/Tour_Images/TourImageOne.jpeg'
import '../index.css'



const Tour = () => { 




  
    return(
<>

        <Header />



        <div className = {styles.loading}>
        
            <div className = {styles.frame}>

            </div>



        </div>





        <section className = {`${styles.project} ${styles.project_intro}`}>
              
              <h1>19KEYS TOUR & EVENTS</h1>

                <div className = {styles.project__misson}>
                    <p>119KEYS TOUR & EVENTS</p>
                </div>




        </section>




        <section className = {styles.tour_wrapper}>

            <div className = {styles.tour_container}>

                    <div className = {styles.tour_image_container}>
                        <img src = {TourImageOne} />
                    </div>
                

            <div className = {styles.tour_contents_wrapper}>

                    <button className = {styles.tour_button}>
                                Get Tickets
                            </button>

            </div>
                



            </div>




        </section>


  




     
            </>

    )


}


export default Tour;