import React, {useEffect, useState} from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function MainLayout() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll);
        return ()=> {
            window.removeEventListener("scroll", handleScroll)
        }

    }, []);
     const location = useLocation();
     const hideFooter = location.pathname === "/cart"
    return(
        <>
            <Navbar isScrolled={isScrolled}/>
            <main>
                <Outlet />
                
            </main>
           {!hideFooter && <Footer />}
        </>
    )
}