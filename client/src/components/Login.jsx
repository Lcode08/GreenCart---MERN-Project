import React from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import { LoadingButton } from './Loader';

const Login = () => {

    const {setShowUserLogin, setUser, setToken, axios, navigate} = useAppContext()

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const onSubmitHandler = async (event)=>{
        event.preventDefault();
        setLoading(true);
        try {
            const {data} = await axios.post(`/api/user/${state}`,{
                name, email, password
            });
            if (data.success){
                navigate('/')
                setUser(data.user)
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    setToken(data.token);
                }
                setShowUserLogin(false)
                toast.success(state === 'login' ? 'Logged in successfully!' : 'Account created successfully!')
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

  return (
    <div onClick={()=> setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 dark:text-gray-300 bg-black/50 dark:bg-black/70'>

      <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-800">
            <p className="text-2xl font-medium m-auto text-gray-800 dark:text-gray-200">
                <span className="text-primary">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p className="text-gray-700 dark:text-gray-300">Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your name" className="border border-gray-300 dark:border-gray-600 rounded-lg w-full p-3 mt-1 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 hover:border-gray-400 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p className="text-gray-700 dark:text-gray-300">Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" className="border border-gray-300 dark:border-gray-600 rounded-lg w-full p-3 mt-1 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 hover:border-gray-400 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200" type="email" required />
            </div>
            <div className="w-full ">
                <p className="text-gray-700 dark:text-gray-300">Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" className="border border-gray-300 dark:border-gray-600 rounded-lg w-full p-3 mt-1 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 hover:border-gray-400 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200" type="password" required />
            </div>
            {state === "register" ? (
                <p className="text-gray-600 dark:text-gray-400">
                    Already have account? <span onClick={() => setState("login")} className="text-primary cursor-pointer hover:underline">click here</span>
                </p>
            ) : (
                <p className="text-gray-600 dark:text-gray-400">
                    Create an account? <span onClick={() => setState("register")} className="text-primary cursor-pointer hover:underline">click here</span>
                </p>
            )}
            <LoadingButton 
                loading={loading}
                className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer"
                type="submit"
            >
                {state === "register" ? "Create Account" : "Login"}
            </LoadingButton>
        </form>
    </div>
  )
}

export default Login
