import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets, dummyOrders } from '../../assets/assets'
import toast from 'react-hot-toast'
import { PageLoader, ListSkeleton } from '../../components/Loader'

const Orders = () => {
    const {currency, axios} = useAppContext()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchOrders = async () =>{
        try {
            setLoading(true);
            const { data } = await axios.get('/api/order/seller');
            if(data.success){

                setOrders(data.orders || [])
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };


    useEffect(()=>{
        fetchOrders();
    },[])


  return (
    <div className='no-scrollbar flex-1 h-[95vh] overflow-y-scroll bg-white dark:bg-slate-900 transition-colors duration-300'>
    <div className="md:p-10 p-4 space-y-4">
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">Orders List</h2>
            
            {loading ? (
                <ListSkeleton rows={5} />
            ) : orders && orders.length > 0 ? (
                orders.map((order, index) => (
                <div key={index} className="flex flex-col md:items-center md:flex-row gap-5 justify-between p-5 max-w-4xl rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 transition-colors duration-300">

                    <div className="flex gap-5 max-w-80">
                        <img className="w-12 h-12 object-cover" src={assets.box_icon} alt="boxIcon" />
                        <div>
                            {order.items && order.items.length > 0 ? (
                                order.items.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        <p className="font-medium text-gray-800 dark:text-gray-200">
                                            {item.product?.name || 'Product not available'}{" "} 
                                            <span className="text-primary">x {item.quantity || 0}</span>
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-red-500">No items found</p>
                            )}
                        </div>
                    </div>

                    <div className="text-sm md:text-base text-black/60 dark:text-gray-400">
                        {order.address ? (
                            <>
                                <p className='text-black/80 dark:text-gray-300'>
                                    {order.address.firstName} {order.address.lastName}
                                </p>
                                <p>{order.address.street}, {order.address.city}</p>
                                <p>{order.address.state}, {order.address.zipcode}, {order.address.country}</p>
                                <p>{order.address.phone}</p>
                            </>
                        ) : (
                            <p className='text-red-500'>Address not available</p>
                        )}
                    </div>

                    <p className="font-medium text-lg my-auto text-gray-800 dark:text-gray-200">
                        {currency}{order.amount || 0}
                    </p>

                    <div className="flex flex-col text-sm md:text-base text-black/60 dark:text-gray-400">
                        <p>Method: {order.paymentType || 'N/A'}</p>
                        <p>Date: {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'N/A'}</p>
                        <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
                    </div>
                </div>
                ))
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-500 dark:text-gray-400">No orders found</p>
                </div>
            )}
        </div>
        </div>
  )
}

export default Orders
