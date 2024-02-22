import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1023);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='bg-blue-600 text-white shadow-md'>
      <div className='flex flex-col sm:flex-row justify-between items-center md:p-3 2xl:p-5 lg:gap-4 2xl:gap-6 sm:mx-4 lg:mx-10 py-4 sm:py-4 gap-4'>
        <Link to='/'>
          <div className='flex items-center gap-2 sm:gap-4 md:gap-6'>
            <div className='hidden sm:inline w-12 sm:w-14 md:w-16'>
              <img src="https://img.tapimg.net/market/images/8ad9d00edc9fcbea081ccfb3207295df.png/appicon" alt="app icon" />
            </div>
            <div className='text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-center font-bold text-white whitespace-nowrap' style={{ letterSpacing: '3px' }}>
              Ski Jumping
            </div>
          </div>
        </Link>
        <ul className='flex items-center sm:gap-0 md:gap-4 lg:gap-8 text-lg lg:text-2xl xl:text-xl 2xl:text-3xl sm:whitespace-nowrap'>
          <Link to='/'>
            <li className='inline hover:underline cursor-pointer'>{isSmallScreen ? <img className=' mr-6 w-11 h-11 bg-blue-50 rounded-full' src="https://cdn-icons-png.flaticon.com/512/10542/10542477.png" alt="home icon" /> : "Newsfeed"}</li>
          </Link>
          <Link to='/ranking'>
            <li className='inline hover:underline cursor-pointer'>{isSmallScreen ? <img className=' mr-6 w-11 h-11 bg-blue-50 rounded-full' src="https://cdn-icons-png.freepik.com/512/3481/3481354.png" alt="home icon" /> : "Ranking"}</li>
          </Link>
          <Link to='/learn-more'>
            <li className='inline hover:underline cursor-pointer'>{isSmallScreen ? <img className=' mr-6 w-11 h-11 bg-blue-50 rounded-full' src="https://cdn2.iconfinder.com/data/icons/education-e-learning/64/LEARN_TO_THINK-512.png" alt="home icon" /> : "Learn More"}</li>
          </Link>
          <Link to='/hall-of-fame'>
            <li className='inline hover:underline cursor-pointer'>{isSmallScreen ? <img className=' mr-6 w-11 h-11 bg-blue-50 rounded-full' src="https://ballstonarearec.org/wp-content/uploads/2022/12/hall-of-fame.png" alt="home icon" /> : "Hall Of Fame"}</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-11 w-11 sm:h-11 sm:w-11 lg:h-10 lg:w-10 2xl:h-16 2xl:w-16 object-cover' src={currentUser.avatar} alt='profile' />
            ) : (<li className='hover:underline'>Sign in</li>)}
          </Link>
        </ul>
      </div>
    </header>
  );
}
