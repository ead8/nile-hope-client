import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heders from '../components/Headers'
import Banner from '../components/Banner'
import Categorys from '../components/Categorys'
import FeatureProducts from '../components/products/FeatureProducts'
import Products from '../components/products/Products'
import Footer from '../components/Footer'
import { get_category, get_products } from '../store/reducers/homeReducer'
const Home = () => {

    useEffect(() => {
        // Check if there is a redirected URL with user data
        const urlParams = new URLSearchParams(window.location.search);
        const userDataParam = urlParams.get('userData');
        if (userDataParam) {
            // Decode and parse the user data
            const userData = JSON.parse(decodeURIComponent(userDataParam));
            // Store user data in localStorage
            localStorage.setItem('customerToken', JSON.stringify(userData));
            // Optionally, you can also remove the userData parameter from the URL
            // to prevent it from being visible in the address bar
            window.history.replaceState({}, document.title, '/');
            window.location.reload()
        }
    }, []);

    const dispatch = useDispatch()
    const {products, latest_product, topRated_product, discount_product } = useSelector(state => state.home)
    useEffect(() => {
        dispatch(get_products())
    }, [])
    return (
        <div className='w-full'>
            <Heders />
            <Banner />
            <div className='my-6 mb-5'>
                <Categorys />
            </div>
            <div className='py-[15px]'>
                <FeatureProducts products={products} />
            </div>
            <div className='py-2'>
                <div className='w-[85%] flex flex-wrap mx-auto'>
                    <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-5">
                        <div className='overflow-hidden'>
                            <Products title='Latest Product' products={latest_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Top Rated Product' products={topRated_product} />
                        </div>
                        <div className='overflow-hidden'>
                            <Products title='Discount Product' products={discount_product} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home