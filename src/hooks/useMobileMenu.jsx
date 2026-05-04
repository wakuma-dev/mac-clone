import React, {useState} from 'react'

const useMobileMenu = () => {
 const [openMenu, setOpenMenu] = useState(false);
 const navToggle = () => {
    setOpenMenu((prev) => !prev)
 }
 return {
    openMenu,
    navToggle
 };
}

export default useMobileMenu