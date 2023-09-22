


import { useEffect, useState, useRef } from 'react'
import styles from '../styles/expertise.module.css'
import Header from '../components/Header'
import Lenis from '@studio-freight/lenis'
import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import KeysImage from '../../src/assets/keys-eyl.jpeg'
import preloadImages from '../components/ScrollAnimation/utils'
import { ScrollTrigger  } from 'gsap/all'


const Expertisesecond = () => { 

    const galleryRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(Flip);
        gsap.registerPlugin(ScrollTrigger);

        let lenis;


        const initSmoothScrolling = () => {
            lenis = new Lenis({
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

        const triggerFlipOnScroll = (galleryEl, options) => {
            let settings = {
                flip: {
                    absoluteOnLeave: false,
                    absolute: false,
                    scale: true,
                    simple: true,
                    //...
                },
                scrollTrigger: {
                    start: 'center center',
                    end: '+=600%',
                },
                stagger: 0
            };


            //Merge default settings with options provided when calling the function
            settings = Object.assign({}, settings, options);
            
            const galleryItems = galleryEl.querySelectorAll(`.${styles.gallery__item}`);
            // const galleryCaption = galleryEl.querySelector(`.${styles.caption}`);

            const galleryItemsInner = [...galleryItems].map(item => item.children.length > 0 ? [...item.children] : []).flat();

            // Temporarily add the final class to capture the final state
            galleryEl.classList.add(styles.gallery__switch);
            console.log(galleryEl)
            const flipstate = Flip.getState([galleryItems], {props: 'filter, opacity'});

            console.log(flipstate)

            // Remove the final class to revert to the initial state
            galleryEl.classList.remove(styles.gallery__switch);

                    // Create the Flip animation timeline
                const tl = Flip.to(flipstate, {
                    ease: 'none',
                    absoluteOnLeave: settings.flip.absoluteOnLeave,
                    absolute: settings.flip.absolute,
                    scale: settings.flip.scale,
                    simple: settings.flip.simple,
                    onStart: () => { console.log("Animation has started!"); },  // <-- Add this line
                    scrollTrigger: {
                        trigger: galleryEl,
                        start: settings.scrollTrigger.start,
                        end: settings.scrollTrigger.end,
                        pin: galleryEl.parentNode,
                        scrub: true,
                    },
                    stagger: settings.stagger
                }); 


// If there are inner elements in the gallery items, animate them too
// if ( galleryItemsInner.length ) {
//     tl.fromTo(galleryItemsInner, {
//         scale: 2
//     }, {
//         scale: 1,
//         scrollTrigger: {
//             trigger: galleryEl,
//             start: settings.scrollTrigger.start,
//             end: settings.scrollTrigger.end,
//             scrub: true,
//         },
//     }, 0)
// }


        };

        const scroll = () => {

            const galleryElement = galleryRef.current;
            triggerFlipOnScroll(galleryElement, {
                flip: { absoluteOnLeave: true, scale: false }
            });

        };

        const initializeGallery = async () => {
            await preloadImages('.gallery__item');
            initSmoothScrolling();
            scroll();
            document.body.classList.remove('loading');
        };

        initializeGallery();
    }, []);



  
    return(
<>

        <Header />


        <div className = {styles.loading}>
        
            <div className = {styles.frame}>
                
            </div>



        </div>


        <section className = {`${styles.project} ${styles.project_intro}`}>
                <span className = {`${styles.project__label} ${styles.project__label_name}`}>
                   19 Keys
                </span>
                <span className = {styles.project__name}>World Though Leader</span>
                <span className = {`${styles.project__label} ${styles.project__label_date}`}>Last Updated</span>
                <span className = {styles.project__date}>September 19th, 2023</span>
                <h2 className = {styles.project__title}>
                    <span className = {styles.project__title_line}>Excellent</span>
                    <br />
                    <span className = {styles.project__title_line}>Execution</span>
                </h2>

                <span className = {`${styles.project__label} ${styles.project__label__misson}`}>
                    CNN News Article
                </span>


                <div className = {styles.project__misson}>
                    <p>BLACK CONSUMERS ARE TAKING CONTROL OF THEIR FINANCIAL FUTURE</p>
                </div>




        </section>


        <div className = {styles.gallery_wrap}>
                    <div ref = {galleryRef} className = {`${styles.gallery} ${styles.gallery__row}`} id = "gallery-1">

                        <div className = {`${styles.gallery__item} ${styles.gallery__item__xl} ${styles.gallery__item__center} `}
                        style={{ backgroundImage: `url(${KeysImage})` }}
                        >
                                


                        </div>
                    
                   
                    
                    <div className = {styles.caption}>
						Within this meticulously arranged AI-generated ensemble lies a tantalizing facade, captivating our gaze. Yet, as we search for the soul of human expression, we question whether algorithms can truly embody the essence of authentic art.
					</div>

                    </div>
                </div>


                <section className = {`${styles.project} ${styles.project_intro}`}>
                <span className = {`${styles.project__label} ${styles.project__label_name}`}>
                   19 Keys
                </span>
                <span className = {styles.project__name}>World Though Leader</span>
                <span className = {`${styles.project__label} ${styles.project__label_date}`}>Last Updated</span>
                <span className = {styles.project__date}>September 19th, 2023</span>
                <h2 className = {styles.project__title}>
                    <span className = {styles.project__title_line}>Excellent</span>
                    <br />
                    <span className = {styles.project__title_line}>Execution</span>
                </h2>

                <span className = {`${styles.project__label} ${styles.project__label__misson}`}>
                    CNN News Article
                </span>


                <div className = {styles.project__misson}>
                    <p>BLACK CONSUMERS ARE TAKING CONTROL OF THEIR FINANCIAL FUTURE</p>
                </div>




        </section>

                





     
            </>

    )


}


export default Expertisesecond