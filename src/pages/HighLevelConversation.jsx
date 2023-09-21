import React, { useEffect, useRef } from 'react'
import Header from '../components/Header';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
// import keysHLC from '../assets/19keys-three.jpeg';
import Footer from '../components/Footer';

const HighLevelConversation = () => {
    const hlcSection = useRef();

    useEffect(() => {
      const homeTimeline = gsap.timeline();
    homeTimeline.fromTo(hlcSection.current, { opacity: 0 }, { opacity: 1, duration: 4 });
    }, [])
  return (
    <>
      <main 
      ref={hlcSection} 
      className="w-full h-auto px-8 flex items-center justify-center flex-col">
          <Header />
          <section className="expertise-container pb-14 px-8 w-full h-auto flex items-center justify-center flex-col">
              <h1 className="w-full pt-[1.25em] text-left text-[calc(16px_+_8vw)] leading-[1em] text-white font-['Cinzel'] font-bold lg:pt-[.75em]">High Level Conversations</h1>
              <div className='py-[4em] flex items-center justify-center flex-col lg:flex-row-reverse lg:justify-between'>
                {/* <img 
                  className='max-m-full w-[600px] h-[500px] object-cover rounded-lg border border-[rgba(255,255,255,.125)]'
                  src={keysHLC} 
                  alt='High Level Conversations'
                /> */}
                <iframe 
                className='w-[400px] h-[240px] md:w-[520px] md:h-[300px] lg:w-[600px] lg:h-[360px]'
                src="https://www.youtube.com/embed/BesRjzDOYYM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className='w-full py-4 flex items-center justify-center flex-col gap-4 lg:w-1/2 lg:px-8'>
                  <small className="text-[calc(10px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">THE HIGHEST THOUGHTS</small>
                  <h3 className="text-center text-[calc(16px_+_2vw)] text-white font-['Cinzel'] font-thin">ENLIGHTENING THOUGHT PATTERNS WITH 19 KEYS.</h3>
                  <p className="text-center text-[calc(16px_+_.5vw)] text-white font-['Source Sans Pro'] font-thin">
                    Embrace the essence of life's journey, not just the destination. Immerse yourself in these transformative keys,
                    empowering you in spirituality, entrepreneurship, future building, and mind management. Let these
                    insights guide and elevate you throughout your profound voyage of growth and self-discovery.
                  </p>
                  <Link 
                    to='https://bwo.cheatcode.com/'
                    target='_blank'>
                    <button className="relative text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold before:contents-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:left-0 before:bottom-0">Watch Now</button>
                  </Link>
                </div>
              </div>
          </section>
      </main>
      <Footer />
    </>
  )
}

export default HighLevelConversation