import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
import { LoadingButton } from '../Loader';

const SellerLogin = () => {
    const {isSeller, setIsSeller, navigate, axios} = useAppContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        setLoading(true);
        try {
            const {data} = await axios.post('/api/seller/login', {email, password})
            if(data.success){
                setIsSeller(true)
                if (data.token) {
                    localStorage.setItem('sellerToken', data.token);
                }
                toast.success('Logged in successfully!')
                navigate('/seller')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(isSeller){
            navigate("/seller")
        }
    },[isSeller])

  return !isSeller && (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-slate-900 transition-colors duration-300'>

        <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-800'>
            <p className='text-2xl font-medium m-auto text-gray-800 dark:text-gray-200'><span className="text-primary">Seller</span> Login</p>
            <div className="w-full ">
                <p className="text-gray-700 dark:text-gray-300">Email</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email}
                 type="email" placeholder="Enter your email" 
                className="border border-gray-300 dark:border-gray-600 rounded-lg w-full p-3 mt-1 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 hover:border-gray-400 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200" required/>
            </div>
            <div className="w-full ">
                <p className="text-gray-700 dark:text-gray-300">Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password}
                 type="password" placeholder="Enter your password"
                className="border border-gray-300 dark:border-gray-600 rounded-lg w-full p-3 mt-1 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 hover:border-gray-400 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200" required/>
            </div>
            <LoadingButton 
                loading={loading}
                className="bg-primary text-white w-full py-2 rounded-md cursor-pointer"
                type="submit"
            >
                Login
            </LoadingButton>
        </div>

    </form>
  )
}

export default SellerLogin
