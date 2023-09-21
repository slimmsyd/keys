import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='p-12 w-full h-auto flex items-start justify-between flex-col gap-6 bg-black border-t border-[#ffffff25] z-[100] md:flex-row md:justify-between'>
      <div className='flex items-center justify-between flex-col gap-6 md:flex-row'>
      <Link 
        to="/home"
        target="_blank"
        >
        <p className="text-[calc(16px_+_.75vw)] text-white font-['Cinzel'] tracking-tighter">19Keys</p>
      </Link>
      <div className='flex items-start justify-center flex-col gap-4 md:flex-row'>
        <Link 
          to="https://www.instagram.com/19_keys/"
          target="_blank"
          >
          <p className="text-[calc(12px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">Instagram</p>
        </Link>
        <Link 
          to="https://twitter.com/19keys_"
          target="_blank"
          >
          <p className="text-[calc(12px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">Twitter</p>
        </Link>
        <Link 
          to="https://www.youtube.com/@19KEYS"
          target="_blank"
          >
          <p className="text-[calc(12px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">Youtube</p>
        </Link>
        <Link 
          to="https://thebwo.app/login/?redirect_to=https%3A%2F%2Fthebwo.app%2F&bp-auth=1&action=bpnoaccess"
          target="_blank"
          >
          <p className="text-[calc(12px_+_.25vw)] text-white font-['Source Sans Pro'] font-thin">Bwo App</p>
        </Link>
      </div>
      </div>
      <small className="text-[calc(10px_+_.25vw)] text-[#ffffff6c] font-['Source Sans Pro'] font-thin">© {Date} 19Keys LLC. All rights reserved.</small>
    </footer>
  )
}

export default Footer