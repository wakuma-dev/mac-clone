import React from 'react';
import { NavLink } from 'react-router-dom';
const navItems = [
  {id: 1, path: "/new", name: "New" },
 {id: 2, path: "/chappell", name: "Chappell Rol"},
  {id: 3, path: "/bestSellers", name: "Best Seller" },
  {id: 4, path: "/lips", name: "Lips" },
  {id: 5, path: "/face", name: "Face" },
  {id: 6, path: "/eyes", name: "Eyes" },
];

export default function NavMenu() {
    return(
    <nav className="hidden md:flex items-center justify-center gap-5">
        <ul className="flex items-center gap-6">
            {navItems.map((item) => (
                <li key={item.id}>
                    <NavLink to={item.path} className={`relative after:content-['']
                     uppercase after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all
                      after:duration-150 hover:after:w-full ${item.id === 2 ? "text-[#e4a9ab]" : "text-[#000000]" }`}>
                        {item.name}
                      </NavLink>
                </li>
            ))}
        </ul>
    </nav>
    );
}