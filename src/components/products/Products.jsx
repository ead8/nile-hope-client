import React from 'react';
import { Link } from 'react-router-dom';


const Products = ({ title, products }) => {
    
    return (   
    <div className='flex gap-8 flex-col-reverse'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>  
            <h2 className='text-xl font-bold text-center text-slate-600'>{title}</h2>   
                {products?.map((p, i) => {                  
                    return (
                        <div key={i} className='flex items-center justify-center gap-2'>
                            {
                                p.map((pl, j) => <Link key={j} className='flex justify-start items-start' to='#'>
                                    <img className='w-[110px] h-[110px]' src={pl.images[0]} alt="images" />
                                    <div className='px-3 flex justify-start items-start gap-1 flex-col text-slate-600'>
                                        <h2>{pl.name}</h2>
                                        <span className='text-lg font-bold'>ETB {pl.price}</span>
                                    </div>
                                </Link>)
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;



