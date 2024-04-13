import React, { useEffect, useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FaLinkedinIn, FaFacebookF, FaUser, FaLock, FaList } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillGithub, AiFillHeart, AiFillShopping, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { get_card_products, get_wishlist_products } from '../store/reducers/cardReducer'


const Headers = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { categorys } = useSelector(state => state.home)
    const { userInfo } = useSelector(state => state.auth)
    const { card_product_count, wishlist_count } = useSelector(state => state.card)

    const { pathname } = useLocation()
    const [showShidebar, setShowShidebar] = useState(true);
    const [categoryShow, setCategoryShow] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState('')

    const search = () => {
        navigate(`/products/search?category=${category}&&value=${searchValue}`)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          search();
        }
     };

    const redirect_card_page = () => {
        if (userInfo) {
            navigate(`/card`)
        } else {
            navigate(`/login`)
        }
    }

    useEffect(() => {
        if (userInfo) {
            dispatch(get_card_products(userInfo.id))
            dispatch(get_wishlist_products(userInfo.id))
        }
    }, [userInfo])



    return (
        <div className='w-full bg-white'>
            <div className="w-full bg-black h-[30px]"></div>
            <div style={{ backgroundColor: 'rgb(187, 235, 151)' }} className='header-top'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[80px] text-black'>
                      <div className='flex items-center h-full'> 
                        <Link to='/'>
                        <img src="https://nile-hope-client.vercel.app/images/nile-logo.png" alt="logo" className='w-32 h-auto mx-auto mt-2 -ml-2 rounded-r-full'/>
                        </Link>
                       </div>
                        <ul className='flex justify-end items-center gap-8 text-sm font-bold uppercase md-lg:hidden'>
                            <li>
                                <Link to='/' className={`p-2 block ${pathname === '/' ? 'text-[#4e39ad]' : 'text-black'}`}>Home</Link>
                            </li>
                            <li>
                                <Link to='/about' className={`p-2 block ${pathname === '/about' ? 'text-[#4e39ad]' : 'text-black'}`}>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className={`p-2 block ${pathname === '/contact' ? 'text-[#4e39ad]' : 'text-black'}`}>Contact</Link>
                            </li>
                        </ul>

                        <div className='flex justify-end gap-4 ml-auto'>
                            <a 
                                target='_blank'
                                href='http://localhost:3001/'
                                className="block md-lg:hidden relative justify-self-end whitespace-nowrap items-center justify-center p-2 mb-2 me-2 overflow-hidden text-sm md:font-medium text-white rounded-lg group bg-black group-hover:bg-gray-800 hover:text-white hover:shadow-md dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                            >
                                Become a Seller
                            </a>
                            {
                                userInfo ? (
                                    <Link className='flex cursor-pointer md:flex justify-center items-center gap-1 text-sm' to='/dashboard'>
                                        <span><FaUser /></span>
                                        <span>{userInfo.name}</span>
                                    </Link>
                                ) : (
                                    <Link to='/login' className='flex cursor-pointer justify-center items-center gap-1 text-sm'>
                                        <span><FaLock /></span>
                                        <span>Login</span>
                                    </Link>
                                )
                            }
                            
                            <div className="link cursor-pointer text-blue-600 hover:text-green-200">
                                <div onClick={() => userInfo ? navigate('/returns') : navigate('/login')} className={`pb-0 block text-sm font-bold md-lg:hidden ${pathname === '/returns' ? 'text-[rgb(59,57,173)]' : 'text-black'}`}>Returns</div>
                                <div onClick={() => userInfo ? navigate('/returns') : navigate('/login')} className={`p-1 block text-sm font-bold md-lg:hidden ${pathname === '/returns' ? 'text-[rgb(59,57,173)]' : 'text-black'}`}>& Orders</div>
                            </div>
                            <div className='justify-center items-center w-[30px] h-[30px] bg-green-500 text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowShidebar(false)}>
                                <span><FaList /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white mb-3'>
                <div className='w-[95%] lg:w-[98%] mx-auto'>
                    <div className='h-[60px] md-lg:h-[100px] flex justify-between items-center flex-wrap'>
                        <div className='md-lg:w-full w-3/12 md-lg:pt-2 flex items-center gap-8'>
                            <div>
                                
                            </div>
                        </div>
                        <div className="w-6/12 md-lg:w-full flex justify-center items-center">
                            <div className='flex border items-center h-[40px] w-full relative gap-5 rounded-r-md'>
                                <input className='w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full' onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleKeyDown} type="text" name="" id="" placeholder='what do you need' />
                                <button onClick={search} className='bg-black rounded-r-md right-0 absolute px-8 h-full font-semibold uppercase text-white'>Search</button>
                            </div>
                        </div>
                        <div className='md-lg:w-full w-3/12 flex justify-end items-center'>
                            <select className="bg-transparent text-slate-500 outline-0 px-3 mr-1 h-full md:hidden">
                                <option value="en">English</option>
                                <option value="am">አማርኛ</option>
                            </select>
                            <div className='flex gap-5 sm:hidden'>
                                <div onClick={()=>navigate(userInfo ? '/dashboard/my-wishlist' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] border border-black rounded-full bg-white'>
                                    <span className='text-xl text-green-400'><AiFillHeart /></span>
                                    {wishlist_count !== 0 && 
                                        <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                            {wishlist_count}
                                        </div>
                                    }
                                </div>
                                <div onClick={redirect_card_page} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] border border-black rounded-full bg-white'>
                                    <span className='text-xl text-green-400'><AiOutlineShoppingCart /></span>
                                    {card_product_count !== 0 && 
                                        <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                            {card_product_count}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md-lg:block'>
                <div onClick={() => setShowShidebar(true)} className={`fixed duration-200 transition-all ${showShidebar ? 'invisible' : 'visible'} hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}></div>
                <div className={`w-[300px] z-[9999] transition-all duration-200 fixed  ${showShidebar ? '-left-[300px]' : 'left-0'} top-0 overflow-y-auto bg-white h-screen py-6 px-8`}>
                    <div className='flex justify-start flex-col gap-6'>
                        <Link to='/'>
                            <img src=" https://nile-hope-client.vercel.app/images/nile-logo.png" alt="logo" />
                        </Link>
                        <div className='flex justify-star items-center gap-10'>
                            <a 
                                target='_blank'
                                href='http://localhost:3001/'
                                className="relative mt-2 inline-flex justify-self-end  whitespace-nowrap items-center md:justify-center md:p-2 md:mb-2 md:me-2 overflow-hidden text-sm md:font-medium text-white rounded-lg group bg-black group-hover:bg-gray-800 hover:text-white hover:shadow-md dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                            >
                                Become a Seller
                            </a>
                        </div>
                        <ul className='flex flex-col justify-start items-start  text-md font-semibold uppercase'>
                            <li>
                                <Link to='/' className={`py-2 block ${pathname === '/' ? 'text-[#7fad39]' : 'text-slate-600'}`}>Home</Link>
                            </li>
                            <li>
                                <Link to='/shops' className={`py-2 block ${pathname === '/shop' ? 'text-[#7fad39]' : 'text-slate-600'}`}>Shop</Link>
                            </li>
                            <li>
                                <Link to='/returns' className={`py-2 block ${pathname === '/returns' ? 'text-[#7fad39]' : 'text-slate-600'}`}>Returns</Link>
                            </li>
                            <li>
                                <Link to='/about' className={`py-2 block ${pathname === '/about' ? 'text-[#7fad39]' : 'text-slate-600'}`}>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className={`py-2 block ${pathname === '/contact' ? 'text-[#7fad39]' : 'text-slate-600'}`}>Contact</Link>
                            </li>
                        </ul>
                        <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
                            <div className='w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center'>
                                <span><IoIosCall /></span>
                            </div>
                            <div className='flex justify-end flex-col gap-1'>
                                <h2 className='text-sm font-medium text-slate-700'>+251-938-817656</h2>
                                <span className='text-xs'>Support 24/7 time</span>
                            </div>
                        </div>
                        <ul className='flex flex-col justify-start items-start gap-3 text-[#1c1c1c]'>
                            <li className='flex justify-start items-center gap-2  text-sm'>
                                <span><GrMail /></span>
                                <a href="mailto:nilehope.ethiopia@gmail.com" className='text-sm cursor-pointer'>nilehope.ethiopia@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers;