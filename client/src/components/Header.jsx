import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className='bg-blue-600 text-white shadow-md'>
      <div className='flex justify-between items-center p-3 lg:gap-4 sm:mx-10'>
        <Link to='/'>
          <div className='flex items-center gap-2 sm:gap-6'>
            <div className='w-8 sm:w-16'>
              <img src="https://img.tapimg.net/market/images/8ad9d00edc9fcbea081ccfb3207295df.png/appicon" />
            </div>
            <div className='text-lg sm:text-3xl text-center font-bold text-white whitespace-nowrap' style={{ letterSpacing: '3px' }}>
              Ski Jumping
            </div>
          </div>

        </Link>
        <ul className='flex gap-0 sm:gap-8 text-lg lg:text-2xl sm:whitespace-nowrap'>
          <Link to='/'>
            <li className='hidden lg:inline hover:underline cursor-pointer'>Home</li>
          </Link>
          <Link to='/profile'>
            <li className='hover:underline'> Sign in</li>
          </Link>
          <Link to='/world-cup'>
            <li className='hidden sm:inline hover:underline'> World Cup</li>
          </Link>
          <Link to='/ski-jumpers'>
            <li className='hidden lg:inline hover:underline'> Ski Jumpers</li>
          </Link>
          <Link to='/hall-of-fame'>
            <li className='hidden xl:inline hover:underline'> Hall Of Fame</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}