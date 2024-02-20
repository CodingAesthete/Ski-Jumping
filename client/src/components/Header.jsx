import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
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
        <ul className='flex items-center gap-0 sm:gap-8 text-lg lg:text-2xl xl:text-xl sm:whitespace-nowrap'>
          <Link to='/'>
            <li className='hidden lg:inline hover:underline cursor-pointer'>Newsfeed</li>
          </Link>
          <Link to='/ranking'>
            <li className='hidden sm:inline hover:underline'> Ranking</li>
          </Link>
          <Link to='/learn-more'>
            <li className='hidden lg:inline hover:underline'> Learn More</li>
          </Link>
          <Link to='/hall-of-fame'>
            <li className='hidden xl:inline hover:underline'> Hall Of Fame</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-10 w-10 object-cover' src={currentUser.avatar} alt='profile' />
            ) : (<li className='hover:underline'>Sign in</li>)}
          </Link>
        </ul>
      </div>
    </header>
  )
}