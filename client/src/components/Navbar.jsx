import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user, setUser, setToken, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, axios, isSeller} = useAppContext();

    const logout = async ()=>{
      try {
        const { data } = await axios.get('/api/user/logout')
        if(data.success){
          toast.success(data.message)
          setUser(null);
          localStorage.removeItem('token');
          setToken(null);
          navigate('/')
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
        
    }

    useEffect(()=>{
      if(searchQuery.length > 0){
        navigate("/products")
      }
    },[searchQuery])

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-3 sm:py-4 border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 relative transition-all duration-300">

      <NavLink to='/' onClick={()=> setOpen(false)}>
        <img className="h-8 sm:h-9 md:h-10" src={assets.logo} alt="logo" />
      </NavLink>

      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        <NavLink to='/' className="text-sm xl:text-base text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Home</NavLink>
        <NavLink to='/products' className="text-sm xl:text-base text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">All Product</NavLink>
        <NavLink to='/about' className="text-sm xl:text-base text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About Us</NavLink>
        
        {/* Seller Access Button */}
        {!isSeller && (
          <button 
            onClick={() => navigate('/seller')} 
            className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-200 border border-gray-300 dark:border-gray-600 px-2 xl:px-3 py-1 rounded-full hover:border-primary hover:bg-primary transform hover:scale-105"
          >
            Seller Portal
          </button>
        )}

        <div className="hidden xl:flex items-center text-sm gap-2 border border-gray-300 dark:border-gray-600 px-3 rounded-full bg-white dark:bg-slate-700 min-w-[200px]">
          <input onChange={(e)=> setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 dark:placeholder-gray-400 text-gray-700 dark:text-gray-200" type="text" placeholder="Search products" />
         <img src={assets.search_icon} alt='search' className='w-4 h-4 opacity-60'/>
        </div>

        <div onClick={()=> navigate("/cart")} className="relative cursor-pointer p-1">
          <img src={assets.nav_cart_icon} alt='cart' className='w-5 xl:w-6 opacity-80'/>
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] xl:min-w-[20px] xl:h-[20px] text-white bg-primary rounded-full text-[10px] xl:text-[11px] font-medium leading-none border-2 border-white dark:border-slate-800 shadow-sm">
            {getCartCount()}
          </span>
        </div>

        <ThemeToggle />

      {!user ? ( <button onClick={()=> setShowUserLogin(true)} className="cursor-pointer px-4 xl:px-8 py-2 bg-primary hover:bg-primary-dull transition-all duration-200 text-white rounded-full transform hover:scale-105 hover:shadow-lg text-sm xl:text-base">
          Login
        </button>)
        :
        (
          <div className='relative group'>
            <img src={assets.profile_icon} className='w-8 xl:w-10' alt="" />
            <ul className='hidden group-hover:block absolute top-8 xl:top-10 right-0 bg-white dark:bg-slate-700 shadow border border-gray-200 dark:border-gray-600 py-2.5 w-28 xl:w-30 rounded-md text-xs xl:text-sm z-40'>
              <li onClick={()=> navigate("my-orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer text-gray-700 dark:text-gray-200'>My Orders</li>
              <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer text-gray-700 dark:text-gray-200'>Logout</li>
            </ul>
          </div>
        )}
      </div>

<div className='flex items-center gap-4 lg:hidden'>
      <div onClick={()=> navigate("/cart")} className="relative cursor-pointer p-1">
          <img src={assets.nav_cart_icon} alt='cart' className='w-5 sm:w-6 opacity-80'/>
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] sm:min-w-[20px] sm:h-[20px] text-white bg-primary rounded-full text-[10px] sm:text-[11px] font-medium leading-none border-2 border-white dark:border-slate-800 shadow-sm">
            {getCartCount()}
          </span>
        </div>
    <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="">
        <img  src={assets.menu_icon} alt='menu' className='w-6 h-6'/>
      </button>
</div>
      

      { open && (
        <div className={`${open ? 'flex' : 'hidden'} absolute top-[56px] sm:top-[64px] left-0 w-full bg-white dark:bg-slate-800 shadow-md py-4 flex-col items-start gap-3 px-4 sm:px-6 text-sm lg:hidden border-t border-gray-200 dark:border-gray-600 z-50`}>
        
        {/* Mobile Search Bar */}
        <div className="flex items-center text-sm gap-2 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-full bg-white dark:bg-slate-700 w-full mb-2">
          <input onChange={(e)=> setSearchQuery(e.target.value)} className="py-1 w-full bg-transparent outline-none placeholder-gray-500 dark:placeholder-gray-400 text-gray-700 dark:text-gray-200" type="text" placeholder="Search products" />
         <img src={assets.search_icon} alt='search' className='w-4 h-4 opacity-60'/>
        </div>
        
        <NavLink to="/" onClick={()=> setOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors py-1">Home</NavLink>
        <NavLink to="/products" onClick={()=> setOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors py-1">All Product</NavLink>
        {user && 
        <NavLink to="/my-orders" onClick={()=> setOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors py-1">My Orders</NavLink>
        }
        <NavLink to="/about" onClick={()=> setOpen(false)} className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors py-1">About Us</NavLink>
        
        {/* Mobile Seller Portal */}
        {!isSeller && (
          <button 
            onClick={() => {
              setOpen(false);
              navigate('/seller');
            }} 
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-left py-1"
          >
            Seller Portal
          </button>
        )}

        <div className="flex items-center gap-3 mt-2 py-1">
          <ThemeToggle />
          <span className="text-gray-600 dark:text-gray-300 text-sm">Theme</span>
        </div>

        {!user ? (
          <button onClick={()=>{
            setOpen(false);
            setShowUserLogin(true);
          }} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm w-full sm:w-auto">
          Login
        </button>
        ) : (
          <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm w-full sm:w-auto">
          Logout
        </button>
        )}
        
      </div>
      )}

    </nav>
  )
}

export default Navbar
