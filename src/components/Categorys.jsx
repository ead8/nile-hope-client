import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


    
const Categorys = () => {
    const { categorys } = useSelector(state => state.home)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdtablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 3
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 2
        }
    }


    return (
        <div className='w-full mx-auto relative grid grid-cols-6 sm:grid-cols-3 px-2 md:grid-cols-6 gap-4 md:gap-8'>
            {categorys.map((c, i) => (
                <Link to={`/products?category=${c.name}`} className='flex flex-col items-center' key={i}>
                    <div className='w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full'>
                        <img src={c.image} alt="category" className='object-cover w-full h-full' />
                    </div>
                    <span className='mt-3 text-center font-bold text-slate-500'>{c.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default Categorys;
