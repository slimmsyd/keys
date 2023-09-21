import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const menuRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
    setClicked(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.to(menuRef.current, {
      duration: 0.3,
      opacity: clicked ? 1 : 0,
      height: clicked ? '100vh' : 0,
      pointerEvents: clicked ? 'auto' : 'none',
    });

    if (clicked) {
      gsap.to(line1Ref.current, { rotation: '45', y: 6, duration: 0.2 });
      gsap.to(line2Ref.current, { opacity: 0, duration: 0.2 });
      gsap.to(line3Ref.current, { rotation: '-45', y: -12, duration: 0.2 });
    } else {
      gsap.to(line1Ref.current, { rotation: '0', y: 0, duration: 0.2 });
      gsap.to(line2Ref.current, { opacity: 1, duration: 0.2 });
      gsap.to(line3Ref.current, { rotation: '0', y: 0, duration: 0.2 });
    }
  }, [clicked]);

  return (
    <header className="header-container w-full p-8 fixed top-0 left-0 flex items-center justify-between z-[500] lg:px-8">
      <Link to="/keys/home">
        <p className="text-[calc(16px_+_.75vw)] text-white font-['Cinzel'] tracking-tighter">19Keys</p>
      </Link>
      <div
        className={`mr-4 w-[30px] h-[20px] rounded-md flex items-center justify-between flex-col cursor-pointer ${
          isDesktop ? 'hidden' : 'lg:hidden'
        }`}
        onClick={() => setClicked(!clicked)}
      >
        <div className="w-full h-[1px] bg-white z-[500]" ref={line1Ref}></div>
        <div className="w-full h-[1px] bg-white z-[500]" ref={line2Ref}></div>
        <div className="w-full h-[1px] bg-white z-[500]" ref={line3Ref}></div>
      </div>
      <ul className={`fixed w-full h-screen inset-0 flex items-center justify-center flex-col gap-12 bg-black ${clicked ? 'lg:hidden' : 'hidden'}`} ref={menuRef}>
        <Link 
          to="/keys/home"
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Home
        </Link>
        <Link 
          to="/keys/expertise"
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Expertise
        </Link>
        <Link 
          to="/keys/expertise"
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Expertise
        </Link>
        {/* <Link 
          to=""
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Tour
        </Link> */}
        <Link 
          to="/keys/education"
          target='_blank'
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Education
        </Link>
        <Link 
          to="/keys/high-level-conversations"
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          HLC Show
        </Link>
        <Link 
          to="/keys/chat"
          target='_blank'
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Chat
        </Link>
        <Link 
          to="https://crownz19.com/"
          target='_blank'
          className="text-[calc(12px_+_2.75vw)] text-white font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Shop
        </Link>
        <Link 
          to="/keys/booking"
          className="translate-y-[-10px] p-2 text-[calc(12px_+_2.75vw)] text-black bg-white font-['Cinzel'] border border-white rounded">
          Book 19Keys
        </Link>
      </ul>
      <ul className="hidden lg:flex lg:items-center lg:justify-between lg:gap-8 lg:translate-x-10">
        <Link
          to="/keys/expertise"
          className="text-[calc(8px_+_.75vw)] text-[#ffffffc4] font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Expertise
        </Link>

        <Link
          to="/keys/education"
          className="text-[calc(8px_+_.75vw)] text-[#ffffffc4] font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Education
        </Link>
        <Link
          to="/keys/high-level-conversations"
          className="text-[calc(8px_+_.75vw)] text-[#ffffffc4] font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          HLC Show
        </Link>
        <Link
          to="https://crownz19.com/"
          target='_blank'
          className="text-[calc(8px_+_.75vw)] text-[#ffffffc4] font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Shop
        </Link>

        <Link
          to="/keys/chat"
          className="text-[calc(8px_+_.75vw)] text-[#ffffffc4] font-['Cinzel'] transition duration-300 ease-in-out hover:text-white">
          Chat
        </Link>
      </ul>
      <Link
        to="/keys/booking"
        className="hidden lg:block lg:p-3 lg:text-[calc(8px_+_.75vw)] lg:text-white lg:font-['Cinzel'] lg:border lg:border-white lg:rounded lg:transition lg:duration-300 lg:ease-in-out lg:hover:text-black lg:hover:bg-white lg:hover:border">
        Book 19Keys
      </Link>
    </header>
  );
};

export default Header;
