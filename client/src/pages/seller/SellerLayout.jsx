import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import ThemeToggle from "../../components/ThemeToggle";

const SellerLayout = () => {

    const { axios, navigate, setIsSeller } = useAppContext();


    const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon: assets.add_icon },
        { name: "Product List", path: "/seller/product-list", icon: assets.product_list_icon },
        { name: "Orders", path: "/seller/orders", icon: assets.order_icon },
    ];

    const logout = async ()=>{
        try {
            const { data } = await axios.get('/api/seller/logout');
            if(data.success){
                toast.success(data.message)
                localStorage.removeItem('sellerToken');
                setIsSeller(false);
                navigate('/')
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 dark:border-gray-600 py-3 bg-white dark:bg-slate-800 transition-colors duration-300">
                <Link to='/'>
                    <img src={assets.logo} alt="log" className="cursor-pointer w-34 md:w-38" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500 dark:text-gray-400">
                    <ThemeToggle />
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border border-gray-300 dark:border-gray-600 rounded-full text-sm px-4 py-1 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors'>Logout</button>
                </div>
            </div>
            <div className="flex">
               <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 dark:border-gray-600 pt-4 flex flex-col bg-white dark:bg-slate-800 transition-colors duration-300">
                {sidebarLinks.map((item) => (
                    <NavLink to={item.path} key={item.name} end={item.path === "/seller"}
                        className={({isActive})=>`flex items-center py-3 px-4 gap-3 text-gray-700 dark:text-gray-300 transition-colors
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 dark:bg-primary/20 border-primary text-primary"
                                : "hover:bg-gray-100/90 dark:hover:bg-slate-700/50 border-white dark:border-slate-800"
                            }`
                        }
                    >
                        <img src={item.icon} alt="" className="w-7 h-7" />
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div> 
                <Outlet/>
            </div>
             
        </>
    );
};

export default SellerLayout;