import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import bookKeys from '../../src/assets/19keys-bw.jpeg';
import Footer from '../components/Footer';

const Booking = () => {
  const bookingSection = useRef();
  const [name, setName] = useState('');
  const [budget, setBudget] = useState('');
  const [eventType, setEventType] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState();

  useEffect(() => {
    const homeTimeline = gsap.timeline();
    homeTimeline.fromTo(bookingSection.current, { opacity: 0 }, { opacity: 1, duration: 4 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, budget, eventType, email, message });
    setIsSubmitted(!isSubmitted);
  };

  return (
    <>
      <main ref={bookingSection} className="w-full h-auto p-12 flex items-center justify-center flex-col">
        <Header />
        <h1 className="w-full pt-[.8em] text-left text-[calc(16px_+_12vw)] text-white font-['Cinzel'] font-bold lg:pt-[.25em]">
          Booking
        </h1>
        <section className="booking-container px-8 w-full h-auto flex items-center justify-center flex-col lg:flex-row-reverse lg:gap-8">
          <img
            className="max-w-full w-[660px] h-auto object-cover gap-8"
            src={bookKeys}
            alt="Book 19Keys"
          />
          {isSubmitted?
            <h1 className="sent-message w-full text-center pt-[.8em] text-[calc(16px_+_2vw)] text-white font-['Cinzel']">
                Thanks for tapping in!
            </h1>
            :
            <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
            <div className="header leading-[calc(2em_+_1em)] py-4">
              <small className="text-[1.75em] text-white font-['Cinzel'] font-thin">
                Have an upcoming event?
              </small>
            </div>
            <div className="w-full input-fields flex items-center justify-center flex-col gap-8">
              <div className="w-full flex items-center justify-center flex-col gap-8 lg:grid lg:grid-cols-2">
                <input
                  className="w-full p-6 text-[calc(10px_+_.25em)] outline-none text-white font-['Open Sans Pro'] bg-transparent rounded border border-[#ffffff37] font-thin placeholder:text-white"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  className="w-full p-6 text-[calc(10px_+_.25em)] outline-none text-white font-['Open Sans Pro'] bg-transparent rounded border border-[#ffffff37] font-thin placeholder:text-white"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Enter Your Budget"
                  min="0"
                  required
                />
                <input
                  className="w-full p-6 text-[calc(10px_+_.25em)] outline-none text-white font-['Open Sans Pro'] bg-transparent rounded border border-[#ffffff37] font-thin placeholder:text-white"
                  type="text"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  placeholder="Enter Event Type (Conference, Panel, Online Event)"
                  required
                />
                <input
                  className="w-full p-6 text-[calc(10px_+_.25em)] outline-none text-white font-['Open Sans Pro'] bg-transparent rounded border border-[#ffffff37] font-thin placeholder:text-white"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <textarea
                className="w-full resize-none h-[400px] p-6 text-white text-[calc(10px_+_.25em)] font-thin outline-none bg-transparent rounded border border-[#ffffff37] placeholder:text-white"
                placeholder="Enter A Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <button className="w-full text-white border border-white p-6 text-[calc(10px_+_.5em)] rounded" type="submit">
                Submit
              </button>
            </div>
            </form>
          }
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Booking;