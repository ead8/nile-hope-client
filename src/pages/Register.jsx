import React, { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import FadeLoader from 'react-spinners/FadeLoader';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { customer_register, messageClear } from '../store/reducers/authReducer';

const Register = () => {
    const navigate = useNavigate();
    const { loader, successMessage, errorMessage, userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        returnPolicy: false // New field for return policy
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const checkboxHandle = (e) => {
        setState({
            ...state,
            returnPolicy: e.target.checked
        });
    };

    const register = (e) => {
        e.preventDefault();
        if (!state.returnPolicy) {
            toast.error('Please agree to return policy');
            return;
        }
        dispatch(customer_register(state));
    };

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
        }
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
        if (userInfo) {
            navigate('/');
        }
    }, [successMessage, errorMessage]);

    return (
        <div>
            {loader && (
                <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                    <FadeLoader />
                </div>
            )}
            <div className='bg-slate-200 h-screen flex flex-col justify-center items-center '>
                <div className='w-full justify-center items-center py-1 px-10'>
                    <div className='grid grid-cols-2 w-[70%] mx-auto bg-white rounded-md'>
                        <div className='px-8 py-8'>
                            <h2 className='text-center w-full text-xl text-slate-600 font-bold'>Register</h2>
                            <div>
                                <form onSubmit={register} className='text-slate-600'>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor='name'>Name</label>
                                        <input
                                            onChange={inputHandle}
                                            value={state.name}
                                            type='text'
                                            className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md'
                                            id='name'
                                            name='name'
                                            placeholder='name'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor='email'>Email</label>
                                        <input
                                            onChange={inputHandle}
                                            value={state.email}
                                            type='email'
                                            className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md'
                                            id='email'
                                            name='email'
                                            placeholder='email'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor='password'>Password</label>
                                        <input
                                            onChange={inputHandle}
                                            value={state.password}
                                            type='password'
                                            className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md'
                                            id='password'
                                            name='password'
                                            placeholder='password'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor='age'>Age</label>
                                        <input
                                            onChange={inputHandle}
                                            value={state.age}
                                            type='number'
                                            min={1}
                                            className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md'
                                            id='age'
                                            name='age'
                                            placeholder='age'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor='gender'>Gender</label>
                                        <select
                                            onChange={inputHandle}
                                            value={state.gender}
                                            className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md'
                                            id='gender'
                                            name='gender'
                                            required
                                        >
                                            <option value=''>Select Gender</option>
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='other'>Other</option>
                                        </select>
                                    </div>
                                    <div className='flex items-center gap-2 mb-4'>
                                        <input
                                            type='checkbox'
                                            id='returnPolicy'
                                            name='returnPolicy'
                                            checked={state.returnPolicy}
                                            onChange={checkboxHandle}
                                        />
                                        <label htmlFor='returnPolicy'>You can only return within 24 hours of delivery.</label>
                                    </div>
                                    <button className='px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md'>
                                        Register
                                    </button>
                                </form>
                                <div className='flex justify-center items-center py-2'>
                                    <div className='h-[1px] bg-slate-300 w-[95%]'></div>
                                    <span className='px-3 text-slate-600'>or</span>
                                    <div className='h-[1px] bg-slate-300 w-[95%]'></div>
                                </div>
                            </div>
                            <div className='text-center text-slate-600 pt-1'>
                                <p>
                                    You already have an account ? <Link className='text-blue-500' to='/login'>Login</Link>
                                </p>
                            </div>
                        </div>
                        <div className='w-full h-full py-4 pr-4'>
                            <img className='w-full h-[95%]' src='https://nile-hope-client.vercel.app/images/login.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
