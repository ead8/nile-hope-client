import React, { useState,useEffect } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'
import FadeLoader from 'react-spinners/FadeLoader'
import { useSelector, useDispatch } from 'react-redux'
import { customer_login, messageClear } from '../store/reducers/authReducer'
import toast from 'react-hot-toast'



const Login = () => {

    const { loader, successMessage, errorMessage, userInfo } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const login = (e) => {
        e.preventDefault()
        dispatch(customer_login(state))
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
        if(userInfo){
            navigate('/')
        }
    }, [successMessage, errorMessage])

    const handleFacebookLogin = () => {
        window.location.href = "https://nile-hope-3.onrender.com/api/auth/facebook";
    };

    const handleGoogleLogin = () => {
        window.location.href = "https://nile-hope-3.onrender.com/api/auth/google";
    };

    return (
        <div>
            {
                loader && <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                    <FadeLoader />
                </div>
            }
            <div className='bg-slate-200 h-screen flex flex-col justify-center items-center'>
                <div className='w-full justify-center items-center p-10'>
                    <div className='grid md:grid-cols-1 grid-cols-2 h-full md:w-full w-[60%] mx-auto bg-white rounded-md'>
                        <div className='px-8 py-8 h-full'>
                            <h2 className='text-center w-full text-xl text-slate-600 font-bold'>Login</h2>
                            <div>
                                <form onSubmit={login} className='text-slate-600'>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor="email">Email</label>
                                        <input onChange={inputHandle} value={state.email} type="email" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md' id='email' name='email' placeholder='email' />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-4'>
                                        <label htmlFor="password">Passoword</label>
                                        <input onChange={inputHandle} value={state.password} type="password" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md' id='password' name='password' placeholder='password' />
                                    </div>
                                    <button className='px-8 w-full py-2 bg-black shadow-lg hover:shadow-indigo-500/30 text-white rounded-md'>Login</button>
                                </form>
                                <div className='flex justify-center items-center py-2'>
                                    <div className='h-[1px] bg-slate-300 w-[95%]'></div>
                                    <span className='px-3 text-slate-600'>or</span>
                                    <div className='h-[1px] bg-slate-300 w-[95%]'></div>
                                </div>
                                <button onClick={handleFacebookLogin} className='px-8 w-full py-2 bg-black shadow hover:shadow-indigo-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
                                    <span><FaFacebookF /></span>
                                    <span>Login with Facebook</span>
                                </button>  <button onClick={handleGoogleLogin}  className='px-8 w-full py-2 bg-black shadow hover:shadow-orange-500/30 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
                                    <span><AiOutlineGoogle /></span>
                                    <span>Login with Google</span>
                                </button>
                            </div>
                            <div className='text-center text-slate-600 pt-1'>
                                <p>You have no account ? <Link className='text-blue-500' to='/register'>Register</Link></p>
                            </div>
                        </div>
                        <div className='w-full block md:hidden h-full  pr-4'>
                            <img className='w-full h-[95%]' src=" https://nile-hope-client.vercel.app/images/login.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login