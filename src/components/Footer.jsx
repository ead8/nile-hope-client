import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { IoIosCall } from 'react-icons/io'
import { GrMail } from 'react-icons/gr'
import { FaFacebookF,  FaInstagram ,FaLinkedin, FaTiktok, FaYoutube,} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { AiOutlineTwitter, AiFillHeart, AiFillShopping, AiOutlineShoppingCart } from 'react-icons/ai'



const Footer = () => {

    const { card_product_count, wishlist_count } = useSelector(state => state.card)
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.auth)
    

    return (

        <footer style={{ backgroundColor: 'rgb(187, 235, 151)' }}>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>
                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                    <div className='flex flex-col gap-3'>
                        <img className='w-[230px] h-[100x]' src=" https://nile-hope-client.vercel.app/images/nile-logo.png" alt="logo" />
                        <ul className='flex flex-col gap-2 text-black'>
                            <li>Address : Addis Ababa,Ethiopia</li>
                            <li className="flex">
                              <span><IoIosCall /></span>
                                +251-938-817-656
                                </li>
                            <li className="flex">
                              <span><IoIosCall /></span>
                                +251-944-334-526
                                </li>
                            <li href="mailto:nilehope.ethiopia@gmail.com" className="flex justify-start cursor-pointer items-center gap-2">
                                <span><GrMail/></span>
                                <h1>nilehope.ethiopia@gmail.com</h1>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-5/12 lg:w-8/12 sm:w-full'>
                    <div className='flex justify-center sm:justify-start sm:mt-6 w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>Usefull links</h2>
                            <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                                <ul className='flex flex-col gap-2 text-black text-md'>
                                    <li className="hover:text-orange-400">
                                        <Link>About Us</Link>
                                    </li>
                                    <li className="hover:text-orange-400">
                                        <Link>About our Shops</Link>
                                    </li>
                                    <li className="hover:text-orange-400">
                                        <Link>Delivery Information</Link>
                                    </li>
                                    <li className="hover:text-orange-400">
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li className="hover:text-orange-400">
                                        <Link>Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-4/12 lg:w-full lg:mt-6'>
                    <div className='w-full flex flex-col justify-start gap-5'>
                        <h2 className='font-bold text-lg mb-2 text-stone-900'>Join Our Service</h2>
                        <span className='text-stone-900 text-md'>Get Email updates about our latest and shop special offers:</span>
                        <div className='h-[50px] w-full bg-slate-100 border relative'>
                            <input placeholder='Enter your mail' className='h-full bg-transparent w-full px-3 outline-0' type="text" />
                            <button className='h-full absolute right-0 bg-black text-white uppercase px-4 font-bold text-sm'>Subscribe</button>
                        </div>
                    <ul className='flex justify-start items-center gap-3'>
                         <li>
                        <a className='w-[38px] h-[38px] hover:bg-blue-500 hover:text-white flex justify-center items-center bg-blue-600 rounded-full text-white' title="Facebook" href="#"><FaFacebookF /></a>
                         </li>
                         <li>
                        <a className='w-[38px] h-[38px] hover:bg-blue-500 hover:text-white flex justify-center items-center bg-purple-600 rounded-full text-white' title="Instagram" href="#"><FaInstagram /></a>
                         </li>
                         <li>
                        <a className='w-[38px] h-[38px] hover:bg-blue-500 hover:text-white flex justify-center items-center bg-black rounded-full text-white' title="Tiktok" href="#"><FaTiktok /></a>
                         </li>                                         
                         <li>
                         <a className='w-[38px] h-[38px] hover:bg-blue-500 hover:text-white flex justify-center items-center bg-blue-600 rounded-full text-white' title="Linkedin" href="#"><FaLinkedin /></a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='w-[85%] flex flex-wrap justify-center items-center text-stone-900 mx-auto py-5 text-center'>
                <span>Copyright ©2024 All rights reserved</span>
            </div>

            <div className='hidden fixed md-lg:block w-[50px] bottom-3 h-[110px] right-2 bg-white rounded-full p-2'>
                <div className='w-full h-full flex gap-3 flex-col justify-center items-center'>
                    <div onClick={()=>navigate(userInfo ? '/card' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                        <span className='text-xl text-green-500'><AiOutlineShoppingCart /></span>
                        {
                            card_product_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                {
                                    card_product_count
                                }
                            </div>
                        }
                    </div>
                    <div onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                        <span className='text-xl text-green-400'><AiFillHeart /></span>
                        {
                            wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-green-400 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                {wishlist_count}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


