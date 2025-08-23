import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block'/>
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden'/>
      
      {/* Dark mode overlay for better text visibility - only in dark mode */}
      <div className='absolute inset-0 bg-transparent dark:bg-black/40 transition-colors duration-300'></div>

      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-16 sm:pb-20 md:pb-0 px-4 sm:px-6 md:pl-12 lg:pl-18 xl:pl-24 z-10'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl leading-tight text-gray-800 dark:text-white dark:drop-shadow-2xl'
        style={{ textShadow: 'var(--text-shadow, none)' }}
        >Freshness You Can Trust, Savings You will Love! </h1>
      
      <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 font-medium w-full sm:w-auto'>
        <Link to={"/products"} className='group flex items-center justify-center gap-2 px-6 sm:px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer w-full sm:w-auto text-center'>
        Shop now
        <img className='w-4 h-4 transition group-hover:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
        </Link>

        <Link to={"/products"} className='group flex items-center justify-center gap-2 px-6 sm:px-7 md:px-9 py-3 cursor-pointer text-gray-800 hover:text-primary dark:text-white dark:hover:text-primary transition-colors w-full sm:w-auto text-center border border-gray-300 dark:border-gray-600 rounded sm:border-none'>
        Explore deals
        <img className='w-4 h-4 transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner
