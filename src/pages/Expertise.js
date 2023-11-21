


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
import '../index.css'
const Expertisesecond = () => { 
    gsap.registerPlugin(ScrollTrigger);

//     useEffect(() => {
//         let lenis;

//         const initSmoothScrolling = () => {
//             lenis = new Lenis({
//                 lerp: 0.1,
//                 smoothWheel: true
//             });

//             lenis.on('scroll', () => ScrollTrigger.update());

//             const scrollFn = (time) => {
//                 lenis.raf(time);
//                 requestAnimationFrame(scrollFn);
//             };
//             requestAnimationFrame(scrollFn);
//         };

//         const triggerGsapToOnScroll = (galleryEl, options) => {
//             let settings = {
//                 scrollTrigger: {
//                     start: 'center center',
//                     end: '+=300%',
//                     toggleActions: 'play none reverse none',
//                     // pin: galleryEl, // Pin the gallery element itself
//                     markers: true,
//                 },
//                 stagger: 0
//             };
        
//             settings = Object.assign({}, settings, options);
        
//     // Define galleryItems here
//     const galleryItems = galleryEl.querySelectorAll('.gallery__item');

// console.log("THIS WAS TRIGGERD SOMETIMES")
//     const ctx = gsap.context(() => { 
//         gsap.to(galleryItems, {
//             width: '100%', // or any desired value
//             height: '100%', // or any desired value
//             ease: 'power2.out',
//             scrollTrigger: {
//                 trigger: galleryEl,
//                 start: settings.scrollTrigger.start,
//                 end: settings.scrollTrigger.end,
//                 pin: true,
//                 scrub: true,
//                 markers: true,
//                 pinSpacing: false,
//                 toggleActions: settings.scrollTrigger.toggleActions,
                
//             },
//             stagger: settings.stagger,
        
//         });
//     }, galleryEl)

//      // Cleanup function
//      return () => {
//         ctx.revert();
//     };
  
//         };
        

//         const scroll = () => {
//             triggerGsapToOnScroll(galleryRef.current, {});
//         };

//         preloadImages('.gallery__item').then(() => {
//             initSmoothScrolling();
            
//             scroll();
//             document.body.classList.remove('loading');
//         });

//         console.log("how many tims is this triggerd?")


//     }, []);
    
const galleryRef = useRef(null);
const galleryRef2 = useRef(null);
const galleryRef3 = useRef(null)

const applyScrollEffect = (ref, type = 'default') => {
    const galleryEl = ref.current;
    const galleryCaption = galleryEl.querySelector('.caption');
    let galleryItems;

    if (type === 'cut') {
        galleryItems = galleryEl.querySelectorAll('.gallery__item-cut .gallery__item-inner');
    } else {
        galleryItems = galleryEl.querySelectorAll('.gallery__item');
    }

    // Get the initial width and height of the galleryItems for non-cut types
    let initialWidth, initialHeight;
    if (type !== 'cut') {
        initialWidth = parseFloat(getComputedStyle(galleryItems[0]).width) / galleryEl.offsetWidth;
        initialHeight = parseFloat(getComputedStyle(galleryItems[0]).height) / galleryEl.offsetHeight;
    }

    const ctx = gsap.context(() => {
        ScrollTrigger.create({
            trigger: galleryEl,
            start: 'center center',
            end: '+=300%',
            pin: galleryEl,
            scrub: true,
            markers: true,
            onUpdate: self => {
                // Get the progress of the scroll
                const progress = self.progress;

                if (type === 'cut') {
                    // For gallery__item-inner items of type cut, start from 100% and increase
                    const newWidth = 1 + progress;  // Starts from 100% and gets larger
                    const newHeight = 1 + progress; // Starts from 100% and gets larger

                    gsap.to(galleryItems, {
                        width: `${newWidth * 100}%`,
                        height: `${newHeight * 100}%`,
                        filter: `brightness(${1 - progress * 0.5})`, // Decrease brightness as progress increases
                        immediateRender: false
                    });
                } else {
                    // Existing logic for other items
                    const newWidth = initialWidth + (1 - initialWidth) * progress;
                    const newHeight = initialHeight + (1 - initialHeight) * progress;

                    gsap.to(galleryItems, {
                        width: `${newWidth * 100}%`,
                        height: `${newHeight * 100}%`,
                        filter: `brightness(${1 - progress * 0.5})`, // Decrease brightness as progress increases
                        immediateRender: false
                    });
                }

                const translateYValue = -progress * 110; // Adjust this value as needed
                gsap.to(galleryCaption, {
                    y: `${translateYValue}%`,
                    opacity: progress, // Interpolate opacity from 0 to 1
                    immediateRender: false
                });
            }
        });
    }, ref);
    return ctx;
};

useLayoutEffect(() => {
    const initSmoothScrolling = () => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true
        });
    
        lenis.on('scroll', () => ScrollTrigger.update());
    
        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
    };

    initSmoothScrolling();


    const ctx1 = applyScrollEffect(galleryRef);
    const ctx2 = applyScrollEffect(galleryRef3, 'cut'); // Specify the type for the new gallery
    const ctx3 = applyScrollEffect(galleryRef2);

    return () => {
        ctx1.revert();
        ctx2.revert();
        ctx3.revert();
    };
}, []);



  
    return(
<>

        <Header />



        <div className = {styles.loading}>
        
            <div className = {styles.frame}>

            </div>



        </div>


        {/* <section className={styles.pi_chart_container}>
</section> */}


        <section className = {`${styles.project} ${styles.project_intro}`}>
                <span className = {`${styles.project__label} ${styles.project__label_name}`}>
                   19 Keys
                </span>
                {/* <span className = {styles.project__name}>World Though Leader</span>
                <span className = {`${styles.project__label} ${styles.project__label_date}`}>Last Updated</span>
                <span className = {styles.project__date}>September 19th, 2023</span> */}
                {/* <h2 className = {styles.project__title}>
                    <span className = {styles.project__title_line}>Excellent</span>
                    <br />
                    <span className = {styles.project__title_line}>Execution</span>
                </h2> */}
                                    <PieChart />


                <span className = {`${styles.project__label} ${styles.project__label__misson}`}>
                    CNN News Article
                </span>


                <div className = {styles.project__misson}>
                    <p>BLACK CONSUMERS ARE TAKING CONTROL OF THEIR FINANCIAL FUTURE</p>
                </div>




        </section>

    	<div ref = {galleryRef} class="gallery-wrap">
				<div  class="gallery gallery--row" id="gallery-1">
			
                <div class="gallery__item gallery__item--xl gallery__item--center" style={{ backgroundImage: `url(${KeysImage})` }}
></div>

			
					<div class="caption">
					Earn Your Leisure is a financial literacy movement with a different look and sound that brought thousands of African Americans to a conference in Atlanta recently. Despite the growth of the Black middle class, African Americans still grapple with the worst effects of rising inflation because they lag behind their White counterparts in income, wealth, financial savings and homeownership, researchers say. <br />

                    <a href = "https://www.cnn.com/2022/08/23/us/black-investors-earn-your-leisure-economy-reaj" target='_blank'>Read More</a>


					</div>
				</div>
			</div>

            <section class="project project--details project--left">
				<span class="project__label project__label--default">Black Enterprise Youtube Channel.
                <br />
                19Keys Talks Black Empowerment.

                
                </span>
			
				<p>Financial literacy advocate, entrepreneur, and thought leader 19Keys opens up about his personal journey, insatiable hunger for knowledge, closing the racial wealth gap, and using cryptocurrency to empower the Black community.

</p>
			</section>
       

                

            <div ref = {galleryRef3} class="gallery-wrap gallery-wrap--large">
				<div class="gallery gallery--grid gallery--breakout" id="gallery-2">
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${KeysImage})` }}  ></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner" style={{ backgroundImage: `url(${KeysImage})` }} ></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${Keys})` }} ></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${KeysImage})` }}></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${Keys2})` }} ></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${KeysEylImage})` }}></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${KeysImage})` }}></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${KeysImage})` }} ></div></div>
					<div class="gallery__item gallery__item-cut"><div class="gallery__item-inner"  style={{ backgroundImage: `url(${KeysEylImage})` }} ></div></div>
					<div class="caption">
						<p>Financial literacy advocate, entrepreneur, and thought leader 19Keys opens up about his personal journey, insatiable hunger for knowledge, closing the racial wealth gap, and using cryptocurrency to empower the Black community.</p>
					</div>
				</div>
			</div>


            <section class="project project--details project--left">
				<span class="project__label project__label--default">Vanguard Article.
                <br />
                19KEYS IS A FIRM BELIEVER IN THE UNLIMITED POTENTIAL OF THE HUMAN MIND.

                
                </span>
			
				<p>Technological evolution has furthered disruptive technology, which for entrepreneurs means that one has to work extra hard today to enable their business to thrive in this new era. Nowadays, it is much easier to supersede old habits or products. Just look at what 19Keys has achieved by leveraging the tools of the age of technology!</p>
			</section>
       


    	<div ref = {galleryRef2} class="gallery-wrap">
				<div  class="gallery gallery--row" id="gallery-1">
			
                <div class="gallery__item gallery__item--xl gallery__item--center" style={{ backgroundImage: `url(${KeysEylImage})` }}
></div>

			
					<div class="caption">
					Financial literacy advocate, entrepreneur, and thought leader 19Keys opens up about his personal journey, insatiable hunger for knowledge, closing the racial wealth gap, and using cryptocurrency to empower the Black community.

 <br />

                    <a href = "https://www.cnn.com/2022/08/23/us/black-investors-earn-your-leisure-economy-reaj" target='_blank'>Watch on Youtube.</a>


					</div>
				</div>
			</div>
   





     
            </>

    )


}


export default Expertisesecond