import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import keyslogo from '../assets/keys-logo.png';

const PageReveal = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= 100) {
          clearInterval(timer);
          navigate("/keys/home"); // Redirect to the specified route
          return 100;
        }
        return newProgress;
      });
    }, 50);

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[black]">
      <div className="w-full flex items-center justify-center flex-col">
        <img
          className="w-[calc(20px_+_4vw)] h-auto"
          src={keyslogo}
          alt="19keys Logo"
        />
        <p className="text-[calc(16px_+_2vw)] text-white font-['Cinzel']">
          The Highest Level
        </p>
        <p className="text-[calc(16px_+_.5vw)] text-white font-['Cinzel']">
          {loadingProgress}%
        </p><div
          className="mt-2 h-[1px] bg-white rounded-sm"
          style={{ width: `${loadingProgress * 1/2}%` }}
          ></div>
      </div>
    </div>
  );
};

export default PageReveal;