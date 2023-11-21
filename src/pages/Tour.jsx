import React, { useEffect, useRef } from 'react'
import Header from '../components/Header';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import bwoLogo from '../assets/bwo.jpeg'
import Footer from '../components/Footer';
import TourImageOne from '../assets/Tour_Images/TourImageOne.jpeg'
import TourImageTwo from '../assets/Tour_Images/TourImageTwo.jpeg'
import styles from '../styles/expertise.module.css'



const Education = () => {
    const educationSection = useRef();

    useEffect(() => {
      const homeTimeline = gsap.timeline();
    homeTimeline.fromTo(educationSection.current, { opacity: 0 }, { opacity: 1, duration: 4 });
    }, [])
  return (
    <>
      <main 
      ref={educationSection} 
      className="w-full h-auto px-8 flex items-center justify-center flex-col">
          <Header />
          <section className="expertise-container pt-24 pb-14 px-8 w-full h-auto flex items-center justify-center flex-col">
            <h1 className = {styles.tour_header}>19KEYS TOURS & DATES</h1>
              {/* <h1 className="w-full pt-[.8em] text-left text-[calc(16px_+_12vw)] text-white font-['Cinzel'] font-bold lg:pt-[.05em]">19KEYS TOURS & DATES</h1> */}
              <div className='flex items-center justify-center flex-col lg:flex-row-reverse lg:justify-between'>
                <img 
                  className='max-m-full w-[600px] h-[500px] object-cover rounded-lg border border-[rgba(255,255,255,.2)]'
                  src={TourImageOne} 
                  alt='The Block World Order'
                />
                <div className='w-full py-4 flex items-center justify-center flex-col gap-4 lg:w-1/2 lg:px-8'>
                  <small className="text-[calc(10px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">
                    
                    THOUGHT LEADER
                    
                    </small>
                  <h3 className="text-center text-[calc(16px_+_2vw)] text-white font-['Cinzel'] font-thin"></h3>
                  <p className="text-center text-[calc(16px_+_.5vw)] text-white font-['Source Sans Pro'] font-thin">
                        OCT, 28 Highest Level Tour
                  </p>
                  <Link 
                    to='https://bwo.cheatcode.com/'
                    target='_blank'>

                        <button className = {styles.link_btn}>
                            Get Tickets
                        </button>
                        
                    {/* <button className="relative text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold before:contents-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:left-0 before:bottom-0">Get Tickets!</button> */}
                  </Link>
                </div>
              </div>
          </section>


          <section className="expertise-container pb-14 px-8 w-full h-auto flex items-center justify-center flex-col">
            
              <div className='flex items-center justify-center flex-col lg:flex-row lg:justify-between'>
                <img 
                  className='max-m-full w-[600px] h-[500px] object-cover rounded-lg border border-[rgba(255,255,255,.2)]'
                  src={TourImageTwo} 
                  alt='The Block World Order'
                />
                <div className='w-full py-4 flex items-center justify-center flex-col gap-4 lg:w-1/2 lg:px-8'>
                  <small className="text-[calc(10px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">
                    
                    THOUGHT LEADER
                    
                    </small>
                  <h3 className="text-center text-[calc(16px_+_2vw)] text-white font-['Cinzel'] font-thin"></h3>
                  <p className="text-center text-[calc(16px_+_.5vw)] text-white font-['Source Sans Pro'] font-thin">
                        OCT, 28 Highest Level Tour
                  </p>
                  <Link 
                    to='https://bwo.cheatcode.com/'
                    target='_blank'>
                          <button className = {styles.link_btn}>
                            Get Tickets
                        </button>
                        
                    {/* <button className="relative text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold before:contents-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:left-0 before:bottom-0">Get Tickets!</button> */}
                  </Link>
                </div>
              </div>
          </section>
      </main>
      <Footer />
    </>
  )
}

export default Education