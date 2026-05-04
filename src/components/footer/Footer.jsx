import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
const Footer = () => {
  const links = [
    {id: 1, icon: <CiTwitter />},
    {id: 2, icon: <FaInstagram />},
    {id: 3, icon: <FaPinterest />},
    {id: 4, icon: <TiSocialFacebook />},
    {id: 5, icon: <FaYoutube />}
  ];
  return (
    <section className="w-full h-auto md:min-h-[60vh] bg-black px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-16 max-w-8xl mx-auto">
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-white font-normal font-sans uppercase text-[15px] leading-[19px]">
            Shopping
          </p>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            promtions
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            gift cards
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            ordering promtions
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            subscribe to save
          </a>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-white font-normal font-sans uppercase text-[15px] leading-[19px]">
            Your m.a.c store
          </p>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            find a stote
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            events
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            online appointment booking
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            same day delivery
          </a>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-white font-normal font-sans uppercase text-[15px] leading-[19px]">
            Privacy and terms
          </p>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            privacy and policy
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            terms and condition
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            accesiblity
          </a>
          <a
            href="#"
            className="relative font-light text-[12px] leading-[14px] after:content-[''] uppercase after:absolute
           after:bg-white after:-bottom-1 after:left-0 after:w-0 after:h-[1px] text-[#d9d9d9]
           after:transition-all after:duration-150 hover:after:w-full"
          >
            supplier relations
          </a>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          <p className="text-white font-normal font-sans uppercase text-[15px] leading-[19px]">
            Connect
          </p>
          <ul className="flex items-center gap-3">
            {links.map((link) => (
              <li key={link.id} className="text-white">
                {link.icon}
              </li>
            ))}
          </ul>
          <span className="text-[#404040] underline underline-white">
            United States
          </span>
        </div>
      </div>
      <hr className="w-full bg-white" />
      <div className="flex items-end justify-center py-5">
        <p className="text-white text-[15px] font-sans font-normal leading-[15px]">
          Develop by <span className="text-[#404040]">Wakuma Hailu</span>
        </p>
      </div>
    </section>
  );
}

export default Footer