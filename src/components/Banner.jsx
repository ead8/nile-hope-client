import React from 'react'
import Carousel from 'react-multi-carousel'
import  'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

const Banner = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    
    
    return (
        <div className='w-full md-lg:mt-8'>
  <div className='w-full mx-auto '>
    <div className='w-full flex flex-wrap '>
      <div className='w-full'>
        <div className='my-1 '>
          <Carousel
            autoPlay={true}
            infinite={true}
            arrows={false}
            showDots={true}
            responsive={responsive}
          >
            {
              [1, 2, 3, 4, 5, 6, 7].map((img, i) => (
                <Link className='lg-md:h-[150px] h-auto w-full block' key={i} to='#'> {/* Decreased the height value to 150px */}
                  <img className='rounded-3xl h-[200px] object-cover w-full' src={` https://nile-hope-client.vercel.app/images/banner/${img}.jpg`}  alt="our banner" />
                </Link>
              ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Banner


