import React from 'react';

import { Menu,X ,ArrowRight} from "lucide-react";
import { useState } from 'react';
import { navItems } from "../constants";
import './Navbar.css';
 // Adjust the path to your logo file

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
    return (
        <>
            <nav className="bg-custom-gradient sticky top-0 z-50 py-4 w-screen">
                <div className="px-4 mx-auto relative text-center">
                    Join our community. <b>Learn more</b>
                </div>
            </nav>

            <nav className="z-50 py-3 py-6 bg-white">
                <div className="container px-6 mx-auto relative lg:text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                           
                            <span className="toingg-text   tracking-tight">Toingg</span>
                        </div>
                        <ul className=" hidden lg:flex ml-14 space-x-12">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>{item.label}</a>
                                    
                                </li>
                            ))}
                        </ul>
                        <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>

                
                    </div>
                    {mobileDrawerOpen && (
  <div className="fixed right-0 z-20 h-[100px] w-[450px] p-4 lg:hidden">
    <div className="flex flex-col space-y-6 p-8 justify-center bg-gradient-to-b from-[#FEECDF] to-[#D38751] shadow-md rounded-lg">
      <ul className="w-full">
        {navItems.map((item, index) => (
          <li key={index} className="py-4 flex justify-between">
            <a href={item.href} className="flex-grow">{item.label}</a>
            <ArrowRight className="inline-block" />
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

                </div>
            </nav>
           
        </>
    );
};

export default Navbar;
