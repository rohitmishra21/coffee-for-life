import React from 'react'
import { IoCallOutline } from "react-icons/io5";
const Nav = () => {
    return (
        <div className='h-36 text-white md:px-24  flex justify-between items-center'>
            <img className=' w-42 mx-auto ' src="https://www.coffeeforlife.co.uk/wp-content/uploads/2019/03/Coffee-For-Life-Logo.png" alt="" />
            <div className='hidden md:flex w-[33%]   gap-12 '>
                <h1 className='text-lg font-bold flex items-center gap-2 '> <IoCallOutline /> 0800 634 8610</h1>
                <button className='py-2 px-4 font-semibold bg-blue-500'>GET A QUOTE</button>
            </div>
        </div>
    )
}

export default Nav
