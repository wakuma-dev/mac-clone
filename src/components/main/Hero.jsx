import React from 'react';
import img from '../../assets/diana-ruseva-uWQJL61drKM-unsplash.jpg';
import { Button } from '../ui/Button';
export default function Hero() {
    const bgStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return(
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-5 w-full ">
          <div className="relative flex flex-col items-center justify-center gap-3 min-h-[70vh]" style={bgStyle}>
            <h1 className='font-sans text-[28px] md:text-[36px] leading-[32px] font-normal md:leading-[40px]'>SPRING REFRESH</h1>
            <p className="text-[16px] font-sans leading-[24px]">Welcome warmer days with a brand-new look</p>
            <Button>
              Shop
            </Button>
            <p className='absolute bottom-2 left-2 text-[36px] leading-[40px] font-normal font-sans' >SHOP THIS SEASON'S STABLE</p>
          </div>
        </section>
    )
}