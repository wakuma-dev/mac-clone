import React from 'react';
import Logo from './Logo';
import Cta from './Cta';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';
export default function Navbar({ isScrolled }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-xl z-50 flex flex-col py-4
       px-4 sm:px-8 md:px-12 lg:px-16 ${isScrolled ? "bg-white" : ""}`}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <Cta />
        <MobileMenu />
      </div>
      <div className="flex items-center justify-center">
        <NavMenu />
      </div>
    </header>
  );
}