import React, { useEffect } from 'react'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Ratings from '../Ratings'
import { add_to_card, messageClear, add_to_wishlist } from '../../store/reducers/cardReducer'



const FeatureProducts = ({ products,title }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
    const { successMessage, errorMessage } = useSelector(state => state.card)

    const add_card = (id) => {
        if (userInfo) {
            dispatch(add_to_card({
                userId: userInfo.id,
                quantity: 1,
                productId: id
            }))
        } else {
            navigate('/login')
        }
    }
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    }, [errorMessage, successMessage])


    const add_wishlist = (pro) => {
        dispatch(add_to_wishlist({
            userId: userInfo.id,
            productId: pro._id,
            name: pro.name,
            price: pro.price,
            image: pro.images[0],
            discount: pro.discount,
            rating: pro.rating,
            slug: pro.slug
        }))
    }

    
    return (
        <div className='w-[90%] flex flex-wrap mx-auto'>
            <div className='w-full grid grid-cols-4 md-lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 md:gap-2 mb-6'>
                {
                    products?.map((p, i) =>{
                    return (<div key={i} className='border rounded-md group transition-all duration-500 hover:shadow-md hover:-mt-3'>
                        <div className='relative overflow-hidden '>
                            <img className='sm:w-full w-full md:h-[160px]  h-[250px]' src={p?.images[0]} alt="product" />
                            <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                                <li onClick={() => add_wishlist(p)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#bbeb97] hover:text-black hover:rotate-[720deg] transition-all' title="Add Whishlist"><AiFillHeart /></li>
                                <Link to={`/product/details/${p.slug}`} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#bbeb97] hover:text-black hover:rotate-[720deg] transition-all' title="View The Item" ><FaEye /></Link>
                                <li onClick={() => add_card(p._id)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#bbeb97] hover:text-black hover:rotate-[720deg] transition-all' title="Add to Cart"><AiOutlineShoppingCart /></li>
                            </ul>
                        </div>
                        
                        <div className='py-3 text-slate-600 px-2'>
                            <h2>{p.name}</h2>
                            <div className='flex md:text-sm md:flex-col md:items-end justify-start items-center gap-3'>
                            {
                                p.discount ? <div className='flex justify-center items-center line-through text-red-300'> {p.price + p.discount} ETB</div> : ""
                            }
                                <span className='text-lg  md:text-sm'> {p.price} ETB</span>
                                <div className='flex items-center'>
                                    <Ratings ratings={p.rating} />
                                </div>
                            </div>
                        </div>
                    </div>)})
                }
            </div>
        </div>
    )
}


export default FeatureProducts










