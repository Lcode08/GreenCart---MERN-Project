import React from 'react'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <div className='py-8 sm:py-12 md:py-16'>
      {/* Hero Section */}
      <div className='text-center mb-12 sm:mb-16 px-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 animate-fade-in-up'>
          About <span className='text-primary animate-pulse'>GreenCart</span>
        </h1>
        <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300'>
          Your trusted partner for fresh groceries and healthy living. We're passionate about bringing 
          farm-fresh quality directly to your doorstep.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-16 sm:mb-20 px-4'>
        <div className='bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-in-left'>
          <div className='flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6'>
            <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 animate-bounce hover:animate-pulse'>
              <span className='text-2xl'>🎯</span>
            </div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-white text-center sm:text-left'>Our Mission</h2>
          </div>
          <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center sm:text-left'>
            To revolutionize grocery shopping by providing fresh, high-quality products with unmatched 
            convenience. We believe everyone deserves access to healthy, affordable food delivered 
            right to their door.
          </p>
        </div>

        <div className='bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-in-right'>
          <div className='flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6'>
            <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 animate-bounce hover:animate-pulse'>
              <span className='text-2xl'>👀</span>
            </div>
            <h2 className='text-xl sm:text-2xl font-bold text-gray-800 dark:text-white text-center sm:text-left'>Our Vision</h2>
          </div>
          <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center sm:text-left'>
            To become the leading online grocery platform that connects communities with local farmers 
            and suppliers, promoting sustainable living and supporting local economies.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='mb-16 sm:mb-20 px-4'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12 animate-fade-in-up'>
          Why Choose <span className='text-primary'>GreenCart</span>?
        </h2>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          <div className='text-center group animate-fade-in-up animation-delay-200 transform hover:scale-105 transition-all duration-300 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl sm:bg-transparent sm:dark:bg-transparent sm:shadow-none sm:hover:shadow-none'>
            <div className='w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-bounce'>
              <span className='text-2xl sm:text-3xl'>🌱</span>
            </div>
            <h3 className='text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4'>Fresh & Organic</h3>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
              Sourced directly from trusted farms and suppliers, ensuring maximum freshness and quality in every product.
            </p>
          </div>

          <div className='text-center group animate-fade-in-up animation-delay-300 transform hover:scale-105 transition-all duration-300 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl sm:bg-transparent sm:dark:bg-transparent sm:shadow-none sm:hover:shadow-none'>
            <div className='w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-bounce'>
              <span className='text-2xl sm:text-3xl'>🚚</span>
            </div>
            <h3 className='text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4'>Fast Delivery</h3>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
              Quick and reliable delivery service that brings your groceries to your doorstep within hours.
            </p>
          </div>

          <div className='text-center group animate-fade-in-up animation-delay-400 transform hover:scale-105 transition-all duration-300 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl sm:bg-transparent sm:dark:bg-transparent sm:shadow-none sm:hover:shadow-none sm:col-span-2 lg:col-span-1'>
            <div className='w-16 sm:w-20 h-16 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-bounce'>
              <span className='text-2xl sm:text-3xl'>💰</span>
            </div>
            <h3 className='text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4'>Best Prices</h3>
            <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
              Competitive pricing with regular offers and discounts, making healthy eating affordable for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className='bg-gradient-to-r from-primary/5 to-primary/10 dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl p-8 md:p-12 mb-20'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-6'>Our Story</h2>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
              GreenCart was born from a simple idea: everyone deserves access to fresh, healthy food without 
              the hassle of traditional grocery shopping. Founded with a passion for quality and convenience, 
              we've grown from a small local initiative to a trusted platform serving thousands of families.
            </p>
            <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
              Today, we partner with local farmers, trusted suppliers, and dedicated delivery teams to ensure 
              that every order meets our high standards of freshness, quality, and customer satisfaction.
            </p>
          </div>
          <div className='relative'>
            <div className='bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg'>
              <div className='text-center'>
                <div className='text-4xl mb-4'>📊</div>
                <div className='grid grid-cols-2 gap-4 text-center'>
                  <div>
                    <div className='text-2xl font-bold text-primary'>10K+</div>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>Happy Customers</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-primary'>500+</div>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>Products</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-primary'>50+</div>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>Local Partners</div>
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-primary'>24/7</div>
                    <div className='text-sm text-gray-600 dark:text-gray-300'>Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='text-center mb-12 sm:mb-16 px-4'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 animate-fade-in-up'>Meet Our Team</h2>
        <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xs sm:max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-in-up animation-delay-200'>
          Behind GreenCart is a dedicated team of professionals committed to bringing you the best 
          grocery shopping experience.
        </p>
        
        <div className='bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl max-w-sm sm:max-w-md mx-auto transform hover:scale-105 transition-all duration-500 animate-fade-in-up animation-delay-400'>
          <div className='relative group mb-4 sm:mb-6'>
            <div className='w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-lg group-hover:shadow-xl transform group-hover:scale-110'>
              <img 
                src={assets.lokesh_photo} 
                alt="Lokesh Patil" 
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
          <h3 className='text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 animate-bounce-in'>Lokesh Patil</h3>
          <p className='text-primary font-medium mb-3 sm:mb-4 animate-slide-in-left text-sm sm:text-base'>Founder & Developer</p>
          <p className='text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed animate-fade-in'>
            Passionate about creating innovative solutions that make everyday life easier. 
            Dedicated to building technology that connects communities and promotes healthy living.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className='text-center bg-primary/5 dark:bg-slate-800/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mx-4'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6'>
          Ready to Experience Fresh?
        </h2>
        <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl mx-auto leading-relaxed'>
          Join thousands of satisfied customers who trust GreenCart for their daily grocery needs. 
          Start your journey to healthier, more convenient shopping today.
        </p>
        <button 
          onClick={() => window.location.href = '/products'}
          className='bg-primary hover:bg-primary-dull text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto'
        >
          Start Shopping Now
        </button>
      </div>
    </div>
  )
}

export default AboutUs