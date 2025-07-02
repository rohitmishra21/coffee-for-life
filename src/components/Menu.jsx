import React from 'react'
import { MdOutlineMenu } from "react-icons/md";

const Menu = () => {
    const navLinks = [
        { id: 1, name: "HOME" },
        { id: 2, name: "MACHINES" },
        { id: 3, name: "COFFEE" },
        { id: 4, name: "CONSUMABLES" },
        { id: 5, name: "ACCESSORIES" },
        { id: 6, name: "FINANCE" },
        { id: 7, name: "ABOUT" },
        { id: 8, name: "CONTACT" },
    ];

    return (
        <div className='h-20 flex justify-center items-center gap-8 text-[10px] font-semibold text-white bg-[#4674B8]'>
            <MdOutlineMenu size={30} className='text-red-600 md:hidden block' />

            {navLinks.map((link) => (
                <h3 className='md:block hidden' key={link.id}>{link.name}</h3>
            ))}
        </div>
    )
}

export default Menu
