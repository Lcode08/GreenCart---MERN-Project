import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {

    const {navigate} = useAppContext()

  return (
    <div className='mt-12 sm:mt-14 md:mt-16'>
      <p className='text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-4 sm:mb-6'>Categories</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 md:gap-6'>

        {categories.map((category, index)=>(
            <div key={index} className='group cursor-pointer py-3 sm:py-4 md:py-5 px-2 sm:px-3 gap-2 rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105'
            style={{backgroundColor: category.bgColor}}
            onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0,0)
            }}
            >
                <img src={category.image} alt={category.text} className='group-hover:scale-110 transition-transform duration-300 w-16 sm:w-20 md:w-24 lg:w-28 h-auto'/>
                <p className='text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors text-center leading-tight'>{category.text}</p>
            </div>
                    
        ))}

        
      </div>
    </div>
  )
}

export default Categories
