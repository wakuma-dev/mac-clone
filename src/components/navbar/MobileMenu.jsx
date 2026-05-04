import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import useMobileMenu from '../../hooks/useMobileMenu'
import {motion, AnimatePresence} from 'framer-motion'
const navItems = [
  { id: 1, path: "/new", name: "New" },
  { id: 2, path: "/chappell", name: "Chappell Rol" },
  { id: 3, path: "/bestSellers", name: "Best Seller" },
  { id: 4, path: "/lips", name: "Lips" },
  { id: 5, path: "/face", name: "Face" },
  { id: 6, path: "/eyes", name: "Eyes" },
];
const MobileMenu = () => {
    
    const {openMenu, navToggle} = useMobileMenu();
  return (
    <div className="md:hidden">
      <button
        className="cursor-pointer fixed top-1/2 -translate-y-1/2 z-50 right-4"
        onClick={navToggle}
      >
        {openMenu ? <IoMdClose size={24} /> : <HiOutlineBars2 size={24} />}
      </button>
      <AnimatePresence>
        {openMenu && (
            <motion.div className="w-full h-screen fixed top-0 left-0 bg-white flex flex-col items-center justify-center"
              initial={{y: "-100%", opacity: 0}}
              animate={{y: 0, opacity: 1}}
              exit={{y: "-100%", opacity: 0}}
              transition={{duration: 1, ease: "easeOut"}}>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => {
                    return(
                        <li key={item.id}>
                     <NavLink onClick={navToggle} to={item.path} className={`relative after:content-['']
                        uppercase after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all
                        after:duration-150 hover:after:w-full ${item.id === 2 ? "text-[#e4a9ab]" : "text-[#000000]" }`}>
                                                     {item.name}
                        </NavLink>
                        </li>
                    )
                })}
              </ul>
              </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu