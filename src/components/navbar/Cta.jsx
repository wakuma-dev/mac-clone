import React, {useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
const Cta = () => {
  const [input, setInput] = useState("");
  const {cart} = useContext(CartContext);

 const totalItem = cart.reduce(
  (total, item) => total + (item.quantity || 1),
  0
);
  return (
    <div className="relative flex items-center group">
      {/* Search Icon */}
      <CiSearch
        size={20}
        className="hidden md:block absolute left-3 text-gray-500 transition-colors group-focus-within:text-black pointer-events-none"
      />

      {/* Input Field */}
      <input
        type="search"
        value={input}
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
        className="hidden md:block pl-10 pr-4 py-2 w-full rounded-full bg-[#f0f0f0] border border-transparent focus:bg-white focus:border-gray-300 outline-none transition-all"
      />
      <div className="pl-4 flex items-center gap-7">
        <CiUser size={24} />
        <Link to="/cart" className="relative  cursor-pointer">
        <HiOutlineShoppingBag size={24} />
          <span className="absolute -top-2 text-sm flex items-center justify-center -right-2 w-5 h-5 border border-black bg-transparent rounded-full">
           {totalItem > 0 ? totalItem : 0}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Cta;
