import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get_orders,admin_order_status_update } from '../store/reducers/orderReducer'
import { useParams } from 'react-router-dom'
//
const Return = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
    const { myOrders, order } = useSelector(state => state.order)
    const [state, setState] = useState('all')


    useEffect(() => {
        dispatch(get_orders({ status: state, customerId: userInfo.id }))
    }, [state])
    // Calculate the cutoff date 24 hours ago
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 1);

    // Filter products added within the last 24 hours
    const recentProducts = myOrders.filter(order => new Date(order.createdAt) >= cutoffDate);

    const redirect = (ord) => {
        let items = 0;
        for (let i = 0; i < ord.length; i++) {
            items = ord.products[i].quantity + items
        }
        navigate('/payment', {
            state: {
                price: ord.price,
                items,
                orderId: ord._id
            }
        })
    }

    return (
        
        <div className='flex justify-center mt-10 items-center '>
        <div className='bg-white p-4 rounded-md'>
            <div className='pt-4'>
                <div className='relative overflow-x-auto'>
                    <h1 className='text-lg leading-relaxed tracking-wide text-red-500'>Return Order</h1>
                    <table className='w-full text-sm text-left text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>Order Id</th>
                                <th scope='col' className='px-6 py-3'>Price</th>
                                <th scope='col' className='px-6 py-3'>Payment status</th>
                                <th scope='col' className='px-6 py-3'>Order status</th>
                                <th scope='col' className='px-6 py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentProducts.map((o, i) => <tr key={i} className='bg-white border-b'>
                                    <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o._id}</td>
                                    <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>${o.price}</td>
                                    <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o.payment_status}</td>
                                    <td scope='row' className='px-6 py-4 font-medium whitespace-nowrap'>{o.delivery_status}</td>
                                    <td scope='row' className='px-6 py-4'>
                                        <Link to={`/dashboard/return-product/${o._id}`}>
                                            <span className='bg-green-100 text-green-800 text-sm font-normal mr-2 px-2.5 py-[1px] rounded'>Return</span>
                                        </Link>
                                    
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Return