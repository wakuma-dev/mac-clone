import React from 'react'
import img1 from '../../assets/6ebf32487be0fe2d4db8ea3fc8cae714.jpg'
import img2 from '../../assets/ba1de2696e1aacb70b9406ae09d878b5.jpg'
import {Link} from 'react-router-dom'
const Banner = () => {
  return (
    <section className="py-5 px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <h1 className="text-left text-[36px] leading-[40px] font-normal font-sans py-4">
        SEE WHAT'S NEW
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex flex-col gap-3">
          <img src={img1} alt="images" className="w-full h-96 object-cover" />
          <h1 className="text-[20px]  md:text-[24px] leading-[28px] font-sans font-medium">
            LIPGLASS CUSHION HIGH-PIGMENT LIP OIL
          </h1>
          <p className="text-[16px] leading-[24px] font-normal">
            Our do-it-all lip oil delivers high-pigment, high-shine colour with
            72HR hydration.
          </p>
          <Link to="/lips" className="text-[14px] leading-[16px] text-[#000000] underline decoration-black">
            Shop Now
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <img src={img2} alt="images" className="w-full h-96 object-cover" />
          <h1 className="text-[20px] md:text-[24px] leading-[28px] font-sans font-medium">
            M·A·C TO GO
          </h1>
          <p className="text-[16px] leading-[24px] font-normal">Add our all-new mini must-haves to your packing list.</p>
          <Link to="/bestsellers" className="text-[14px] leading-[16px] text-[#000000] underline decoration-black">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner