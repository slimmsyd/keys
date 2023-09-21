import React, { useEffect, useRef } from 'react'
import Header from '../components/Header';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import keysTroy from '../assets/keys-troy.jpeg'
import keysEyl from '../assets/keys-eyl.jpeg'
import royalKeys from '../assets/19keys.jpeg'
import keysFullEyl from '../assets/keys-full-eyl.jpeg'
import Footer from '../components/Footer';

const Expertise = () => {
    const expertiseSection = useRef();

    useEffect(() => {
      const homeTimeline = gsap.timeline();
    homeTimeline.fromTo(expertiseSection.current, { opacity: 0 }, { opacity: 1, duration: 4 });
    }, [])
  return (
    <>
      <main 
      ref={expertiseSection} 
      className="w-full h-auto px-8 flex items-center justify-center flex-col">
          <Header />
          <section className="expertise-container pb-14 px-8 w-full h-auto flex items-center justify-center flex-col">
              <h1 className="w-full pt-[.8em] text-left text-[calc(16px_+_12vw)] text-white font-['Cinzel'] font-bold lg:pt-[.25em]">Expertise</h1>
              <div className='flex items-center justify-center flex-col lg:flex-row-reverse lg:justify-between'>
                <img 
                  className='max-m-full w-[600px] h-[500px] object-cover rounded-lg'
                  src={keysEyl} 
                  alt='19Keys with Rashad from Earn Your Leisure'
                />
                <div className='w-full py-4 flex items-center justify-center flex-col gap-4 lg:w-1/2 lg:px-8'>
                  <small className="text-[calc(10px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">CNN News Article</small>
                  <h3 className="text-center text-[calc(16px_+_2vw)] text-white font-['Cinzel'] font-thin">BLACK CONSUMERS ARE TAKING CONTROL OF THEIR FINANCIAL FUTURES</h3>
                  <p className="text-center text-[calc(16px_+_.5vw)] text-white font-['Source Sans Pro'] font-thin">
                    Earn Your Leisure is a financial literacy movement with a different look and sound that brought thousands of African
                    Americans to a conference in Atlanta recently. Despite the growth of the Black middle class, African Americans still
                    grapple with the worst effects of rising inflation because they lag behind their White counterparts in income, wealth,
                    financial savings and homeownership, researchers say.
                  </p>
                  <Link 
                    to='https://www.cnn.com/2022/08/23/us/black-investors-earn-your-leisure-economy-reaj'
                    target='_blank'>
                    <button className="relative text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold before:contents-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:left-0 before:bottom-0">Read More</button>
                  </Link>
                </div>
              </div>
          </section>
          <section className="expertise-container py-[calc(2em_+_2em)] px-8 w-full h-auto flex items-center justify-center flex-col">
              <div className='flex items-center justify-center flex-col lg:flex-row lg:justify-between'>
                <img 
                  className='max-m-full w-[600px] h-[500px] object-cover rounded-lg'
                  src={royalKeys} 
                  alt='19Keys with Rashad from Earn Your Leisure'
                />
                <div className='w-full py-4 flex items-center justify-center flex-col gap-4 lg:w-1/2 lg:px-8'>
                  <small className="text-[calc(10px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">Black Enterprise Youtube Channel</small>
                  <h3 className="text-center text-[calc(16px_+_2vw)] text-white font-['Cinzel'] font-thin">19Keys Talks Black Empowerment</h3>
                  <p className="text-center text-[calc(16px_+_.5vw)] text-white font-['Source Sans Pro'] font-thin">
                    Financial literacy advocate, entrepreneur, and thought leader 19Keys opens up about his personal journey, insatiable
                    hunger for knowledge, closing the racial wealth gap, and using cryptocurrency to empower the Black community.
                  </p>
                  <Link
                  to='https://www.youtube.com/watch?v=TSw2N_k6ST0'
                  target='_blank'>
                    <button className="relative text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold before:contents-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:left-0 before:bottom-0">Watch On Youtube</button>
                  </Link>
                </div>
              </div>
          </section>
          <section className="expertise-container py-[calc(2em_+_2em)] px-8 w-full h-auto flex items-center justify-center flex-col">
              <div className='flex items-center justify-center flex-col lg:flex-row-reverse lg:justify-between'>
                <img 
                  className='max-m-full w-[600px] h-[500px] object-cover rounded-lg'
                  src={keysFullEyl} 
                  alt='19Keys with Rashad from Earn Your Leisure'
                />
                <div className='w-full py-4 flex items-center justify-center flex-col gap-4 lg:w-1/2 lg:px-8'>
                  <small className="text-[calc(10px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">Black Enterprise Article</small>
                  <h3 className="text-center text-[calc(16px_+_2vw)] text-white font-['Cinzel'] font-thin">EARN YOUR LEISURE PARTNERS WITH STEVE HARVEY</h3>
                  <p className="text-center text-[calc(16px_+_.5vw)] text-white font-['Source Sans Pro'] font-thin">
                    Ending the UK’s Black History Month with Invest Fest London is important to the founders of Earn Your Leisure, as it celebrates and further
                    educates future leaders of commerce and finance on the most impactful wealth building methods of today.
                  </p>
                  <Link
                  to='https://www.blackenterprise.com/earn-your-leisure-partners-with-steve-harvey-to-assemble-all-star-financial-lineup-for-invest-fest-london/'
                  target='_blank'>
                    <button className="relative text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold before:contents-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:left-0 before:bottom-0">Read More</button>
                  </Link>
                </div>
              </div>
          </section>
          <section className="expertise-container py-[calc(2em_+_2em)] px-8 w-full h-auto flex items-center justify-center flex-col">
              <div className='flex items-center justify-center flex-col lg:flex-row lg:justify-between'>
                <img 
                  className='max-m-full w-[600px] h-[500px] object-cover rounded-lg'
                  src={keysTroy} 
                  alt='19Keys with Rashad from Earn Your Leisure'
                />
                <div className='w-full py-4 flex items-center justify-center flex-col gap-4 lg:w-1/2 lg:px-8'>
                  <small className="text-[calc(10px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">Vanguard Article</small>
                  <h3 className="text-center text-[calc(16px_+_2vw)] text-white font-['Cinzel'] font-thin">19KEYS IS A FIRM BELIEVER IN THE UNLIMITED POTENTIAL OF THE HUMAN MIND</h3>
                  <p className="text-center text-[calc(16px_+_.5vw)] text-white font-['Source Sans Pro'] font-thin">
                    Technological evolution has furthered disruptive technology, which for entrepreneurs means that one has to work extra hard today to enable their business to thrive in this new era. Nowadays,
                    it is much easier to supersede old habits or products. Just look at what 19Keys has achieved by leveraging the tools of the age of technology!
                  </p>
                  <Link
                  to='https://www.vanguardngr.com/2021/05/19-keys-is-a-firm-believer-in-the-unlimited-potential-of-the-human-mind/'
                  target='_blank'>
                    <button className="relative text-[calc(16px_+_.20vw)] text-white font-['Cinzel'] font-semibold before:contents-[''] before:absolute before:w-full before:h-[1px] before:bg-white before:left-0 before:bottom-0">Read More</button>
                  </Link>
                </div>
              </div>
          </section>
      </main>
      <Footer />
    </>
  )
}

export default Expertise