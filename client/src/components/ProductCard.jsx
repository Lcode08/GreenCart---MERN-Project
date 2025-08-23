import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";


const ProductCard = ({product}) => {
    const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()

   
    return product && (
        <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} className="group border border-gray-500/20 dark:border-gray-600 rounded-lg md:px-4 px-3 py-3 bg-white dark:bg-slate-800 min-w-56 max-w-56 w-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-900/50 hover:-translate-y-1 hover:border-primary/30">
            <div className="flex items-center justify-center px-2 mb-3 overflow-hidden rounded-md">
                <img className="group-hover:scale-110 transition-transform duration-500 max-w-26 md:max-w-36 object-cover" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 dark:text-gray-400 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 dark:text-gray-200 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                           <img key={i} className="md:w-3.5 w3" src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt=""/>
                    ))}
                    <p>(4)</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        {currency}{product.offerPrice}{" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div onClick={(e) => { e.stopPropagation(); }} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-105" onClick={() => addToCart(product._id)} >
                                <img src={assets.cart_icon} alt="cart_icon" className="w-4 h-4"/>
                                <span className="text-xs">Add</span>
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-1 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-md px-2 h-full hover:bg-red-100 rounded-l transition-colors" >
                                    -
                                </button>
                                <span className="w-6 text-center font-medium">{cartItems[product._id]}</span>
                                <button onClick={() => {addToCart(product._id)}} className="cursor-pointer text-md px-2 h-full hover:bg-green-100 rounded-r transition-colors" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;