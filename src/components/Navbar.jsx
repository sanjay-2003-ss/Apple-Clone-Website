import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example: 3 items in cart

  const navItems = [
    "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods",
    "TV & Home", "Entertainment", "Accessories", "Support"
  ];

  return (
    <nav className="bg-gray-950 text-white py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-around px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <FaApple className="text-2xl" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {navItems.map((item, i) => (
            <a key={i} href="#" className="hover:text-gray-400">
              {item}
            </a>
          ))}

          {/* Icons */}
          <div className="flex items-center space-x-4 relative">
            <AiOutlineSearch className="text-xl cursor-pointer hover:text-gray-400" />
            
            {/* Shopping Bag with Badge */}
            <div className="relative">
              <AiOutlineShopping className="text-xl cursor-pointer hover:text-gray-400" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-center space-y-4 py-4">
          {navItems.map((item, i) => (
            <a key={i} href="#" className="block hover:text-gray-400">
              {item}
            </a>
          ))}

          {/* Icons in Mobile Menu */}
          <div className="flex justify-center space-x-6 mt-2 relative">
            <AiOutlineSearch className="text-xl cursor-pointer hover:text-gray-400" />

            {/* Shopping Bag with Badge */}
            <div className="relative">
              <AiOutlineShopping className="text-xl cursor-pointer hover:text-gray-400" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
