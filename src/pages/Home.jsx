import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Headers from '../components/Headers';
import Banner from '../components/Banner';
import Categorys from '../components/Categorys';
import FeatureProducts from '../components/products/FeatureProducts';
import Footer from '../components/Footer';
import { get_category, get_products } from '../store/reducers/homeReducer';



const Home = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userDataParam = urlParams.get('userData');
        if (userDataParam) {
            const userData = JSON.parse(decodeURIComponent(userDataParam));
            localStorage.setItem('customerToken', JSON.stringify(userData));
            window.history.replaceState({}, document.title, '/');
            window.location.reload()
        }
    }, []);

    const dispatch = useDispatch();
    const { products, latest_product, topRated_product, discount_product } = useSelector(state => state.home);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(get_products());
            setIsLoading(false);
        };

        fetchData();
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
            <svg className="animate-spin h-10 w-10 mr-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.96 7.96 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.96 7.96 0 0120 12h4zm-5.657 4.732a8.027 8.027 0 01-2.284 2.284l2.647 3A7.969 7.969 0 0020 12h-4c-.265 0-.52.031-.776.071l2.12 2.961zM4.776 11.929C4.52 11.969 4.265 12 4 12H0a8.027 8.027 0 012.284-2.284l2.12 2.961A7.969 7.969 0 004 12H4c.265 0 .52.031.776.071l-2.12-2.962zM11.071 4.776A8.027 8.027 0 018 2.5v4c.31 0 .622-.03.929-.09L11.07 4.776zM12 20a8 8 0 008-8h-4c-.31 0-.622.03-.929.09L12 20zm0-16a8 8 0 00-8 8h4c.31 0 .622-.03.929-.09L12 3.999z"></path>
            </svg>
            <span className="text-gray-500">Loading...</span>
        </div>
        )
    }

    return (
        <div className='w-full'>
            <Headers />
            <Banner />
            <div className='my-6 mb-5'>
                <Categorys />
            </div>
            <div className='py-2 mt-10'>
                <div className='w-[95%] flex flex-wrap mx-auto'>
                    <div className="w-full gap-5">
                        <div className='overflow-hidden text-center font-bold text-black'>
                            <h2 className='mb-5 py-8 text-2xl'>Latest Products</h2>
                            {
                                latest_product.map((product, i) => (
                                    <FeatureProducts key={i} products={latest_product[i]} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-2 mt-10'>
                <div className='w-[95%] flex flex-wrap mx-auto'>
                    <div className="w-full gap-5">
                        <div className='overflow-hidden text-center font-bold text-black'>
                            <h2 className='mb-4 py-8 text-2xl'>Top Rated Products</h2>
                            {
                                topRated_product.map((product, i) => (
                                    <FeatureProducts key={i} products={topRated_product[i]} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='py-2'>
                <div className='w-[95%] flex flex-wrap mx-auto'>
                    <div className="w-full gap-5">
                        <div className='overflow-hidden text-center font-bold text-black'>
                            <h2 className='mb-4 py-8 text-2xl'>Discount Products</h2>
                            {
                                discount_product.map((product, i) => (
                                    <FeatureProducts key={i} products={discount_product[i]} />
                                ))
                            }
                        </div> 
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
