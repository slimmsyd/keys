import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsArrowDown, BsArrowRight, BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import bgVideo from '../assets/bg-animation.mp4';
import keysVid from '../assets/keys-vid.mp4';
import keysHeroImg from '../assets/19keys-two.jpeg';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef();
  const heroSection = useRef();
  const rateSection = useRef();
  const rateTitle = useRef();
  const bookingRatesContainer = useRef();
  const aboutSection = useRef();

  useEffect(() => {
    const homeTimeline = gsap.timeline();
    homeTimeline.fromTo(homeRef.current, { opacity: 0 }, { opacity: 1, duration: 4 });

    gsap.to(heroSection.current, {
      y: '-30%',
      scrollTrigger: {
        trigger: heroSection.current,
        start: 'top top',
        endTrigger: rateSection.current,
        end: 'top top',
        scrub: true,
      },
    });

    gsap.fromTo(
      [rateTitle.current, bookingRatesContainer.current],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2.5,
        scrollTrigger: {
          trigger: rateSection.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      aboutSection.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2.5,
        scrollTrigger: {
          trigger: rateSection.current,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animation for price numbers
    const priceElements = document.querySelectorAll('.booking-price');
    priceElements.forEach((priceElement) => {
      const price = parseInt(priceElement.innerText);
      gsap.fromTo(
        priceElement,
        { opacity: 0, y: '20px' },
        {
          opacity: 1,
          y: '0px',
          duration: 1,
          delay: 1.5,
          onStart: () => {
            animateNumber(0, price, priceElement);
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((instance) => instance.kill());
  }, []);

  const animateNumber = (start, end, element) => {
    gsap.to(element, {
      duration: 2,
      innerText: Math.round(start),
      roundProps: 'innerText',
      onUpdate: () => {
        element.innerText = Math.round(start);
        start++;
      },
      onComplete: () => {
        element.innerText = end;
      },
    });
  };

  return (
    <>
      <main 
      ref={homeRef} 
      className="w-full h-auto flex items-center justify-center flex-col">
        <Header />
        {/* HERO SECTION */}
        <section 
        ref={heroSection} 
        className="fixed top-0 w-full h-screen px-8 flex items-center justify-center flex-col">
          <h1 className="hero-title text-[calc(16px_+_5vw)] leading-[1em] text-white font-['Cinzel'] font-bold translate-x-[calc(12px_+_-4vw)] translate-y-[calc(12px_+_2vw)] z-[99]">
            Global Thought Leader
          </h1>
          <img
            className="hero-img max-w-full w-[440px] h-[440px] object-cover opacity-80 z-[90]"
            src={keysHeroImg}
            alt="19Keys"
          />
          <BsArrowDown className="text-[calc(16px_+_5vw)] text-white font-thin translate-y-[-12px] z-[99]" />
          <video className="absolute w-full h-full object-cover" loop muted autoPlay playsInline>
            <source className="inset-0 w-full h-full" src={bgVideo} type="video/mp4" />
          </video>
        </section>
        {/* RATE SECTION */}
        <section
          ref={rateSection}
          className="rate-section mt-[100vh] pt-[8em] pb-8 px-8 w-full h-screen bg-black flex items-center justify-center flex-col gap-[4em] z-[100] lg:pt-[unset]">
          <h1 ref={rateTitle} className="text-center text-[calc(16px_+_2.5vw)] font-['Cinzel'] text-white font-thin italic lg:w-3/4">
            "One of the leading voices and groundbreaking entrepreneurs of our generation."
          </h1>
          {/* <div ref={bookingRatesContainer} className="flex items-center justify-center flex-col gap-[calc(2em_+_4em)] md:flex-row">
            <div className="flex items-center justify-center flex-col gap-2">
              <span className="text-center text-[calc(16px_+_.25vw)] text-white font-['Cinzel'] font-thin">Online Event Rate</span>
              <p className="text-center text-[calc(16px_+_1vw)] text-white font-['Cinzel'] font-thin">
                $<span className="booking-price">5</span>k+
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
              <span className="text-center text-[calc(16px_+_.25vw)] text-white font-['Cinzel'] font-thin">Panel Rate</span>
              <p className="text-center text-[calc(16px_+_1vw)] text-white font-['Cinzel'] font-thin">
                $<span className="booking-price">11</span>k+
              </p>
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
              <span className="text-center text-[calc(16px_+_.25vw)] text-white font-['Cinzel'] font-thin">Conference Rate</span>
              <p className="text-center text-[calc(16px_+_1vw)] text-white font-['Cinzel'] font-thin">
                $<span className="booking-price">19</span>k+
              </p>
            </div>
          </div> */}
        </section>
        {/* ABOUT SECTION */}
        <section
          ref={aboutSection}
          className="about-section pb-[4em] px-8 w-full h-[auto] flex items-center justify-center flex-col-reverse bg-black z-[100] lg:flex-row lg:items-start lg:justify-between lg:px-[6em]">
          <div className="lg:w-1/2">
            <h1 className="w-full pt-8 text-[calc(16px_+_1vw)] text-white font-['Cinzel'] font-bold">19Keys</h1>
            <p className="w-full py-4 px-1.2 text-[calc(16px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin lg:w-3/4">
              Guided by the mantra of 'Slaveship to Ownership', he emerges as a Global Thought Leader and a pioneering force in Web 3, Business, Mindset,
              Holistic Wealth, Tech, Metaphysics, and Financial literacy. With a vast global following, he inspires millions to embark on a journey of
              self-discovery and limitless growth.
            </p>
            <Link 
            to='/keys/expertise'
            className="flex items-center gap-4">
              <button className="text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold">Learn More</button>
              <BsArrowRight className="arrow-right text-[calc(16px_+_.25vw)] text-white" />
            </Link>
          </div>
          <video className="relative w-full h-[calc(18em_+_24em)] rounded-[2em] object-cover lg:w-[60%]" loop muted autoPlay playsInline>
            <source className="absolute inset-0 w-full h-full" src={keysVid} type="video/mp4" />
          </video>
        </section>
        {/* HIGH LEVEL CONVERSATIONS */}
        <section className="highLevel-section w-full py-12 h-auto px-8 flex items-center justify-center flex-col bg-black z-[100]">
          <div className='w-full flex items-center justify-center flex-col gap-10 lg:flex-row lg:gap lg:col-span-3 lg:items-start'>
          <div className='w-full border-b border-[#ffffff6d] flex items-start justify-center flex-col gap-4 pb-[6em] lg:border-b-0 lg:border-r lg:border-[#ffffff6d] lg:pt-16 lg:px-16 lg:w-[33%]'>
              <div>
                <h1 className="text-[calc(16px_+_.5vw)] text-white font-['Cinzel'] font-semibold">High Level Conversations</h1>
                <Link 
                to='https://www.youtube.com/playlist?list=PLXa8HXFcKT94-5I_FVD23rEzohplSf2-x'
                target='_blank'
                className="flex items-center gap-4 text-[calc(10px_+_.3vw)] text-[#ffffff99] font-['Source Sans Pro'] font-thin">
                  Watch On Youtube
                  <BsArrowUpRight />
                </Link>
              </div>
              <p className="w-3/4 text-[calc(16px_+_.20vw)] text-white font-['Source Sans Pro'] font-thin">The High Level Conversation show has 25 Million views & counting.</p>
            </div>
            <div className='w-full border-b border-[#ffffff6d] flex items-start justify-center flex-col gap-4 pb-[6em] lg:border-b-0 lg:border-r lg:border-[#ffffff6d] lg:pt-16 lg:px-16 lg:w-[33%]'>
              <div>
                <h1 className="text-[calc(16px_+_.5vw)] text-white font-['Cinzel'] font-semibold">Technology Analyst</h1>
                <Link 
                to='/keys/expertise'
                className="flex items-center gap-4 text-[calc(10px_+_.3vw)] text-[#ffffff99] font-['Source Sans Pro'] font-thin">
                  Education
                  <BsArrowUpRight />
                </Link>
              </div>
              <p className="text-[calc(16px_+_.20vw)] text-white font-['Source Sans Pro'] font-thin">Keys educates the masses with his extensive experience in Web3,
                Artificial Intelligence & innovation.
              </p>
            </div>
            <div className='w-full flex items-start justify-center flex-col gap-4 lg:pb-[6em] lg:pt-16 lg:px-16 lg:w-[33%]'>
              <div>
                <h1 className="text-[calc(16px_+_.5vw)] text-white font-['Cinzel'] font-semibold">Public Speaker</h1>
                <Link 
                to='/keys/booking'
                className="flex items-center gap-4 text-[calc(10px_+_.3vw)] text-[#ffffff99] font-['Source Sans Pro'] font-thin">
                  Book 19Keys
                  <BsArrowUpRight />
                </Link>
              </div>
              <p className="text-[calc(16px_+_.20vw)] text-white font-['Source Sans Pro'] font-thin">
                19Keys has spoken at events and institutions around the world while
                inspiring and empowering millions more.
              </p>
            </div>
          </div>
        </section>
        <section className='about-section px-8 w-full h-[25vh] flex items-center justify-center bg-[#111111] z-[100]'>
          <h1 className="text-center text-[calc(16px_+_.20vw)] text-white font-['Source Sans Pro'] font-thin">
            If you're interested or would like to chat about a potential collaboration, please get in <Link
          to='/keys/booking' 
          className='relative before:contents-[""] before:w-full before:h-[1px] before:bg-white before:absolute before:left-0 before:bottom-[-2px]'>
            touch</Link>.
          </h1>
        </section>
      <Footer />
      </main>
    </>
  );
};

export default Home;