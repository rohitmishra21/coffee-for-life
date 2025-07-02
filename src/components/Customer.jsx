import React from 'react'

const Customer = () => {

    return (
        <div className='bg-white py-10 px-8 border-b-[15px] border-[#4674B8] md:py-20'>
            <h1 className='text-2xl px-3 font-semibold text-center pt-8 pb-10 uppercase tracking-widest'>
                OUR CUSTOMERS INCLUDE
            </h1>
            <img className='md:block hidden w-[70%] mx-auto' src="https://www.coffeeforlife.co.uk/wp-content/uploads/2019/06/Customer-Logo-Strip-Desktop-NEW.jpg" alt="" />
            <img className='py-10 md:hidden' src="https://www.coffeeforlife.co.uk/wp-content/uploads/2019/06/Customer-Logo-Row-1-of-2-NEW.jpg" alt="" />
            <img className='md:hidden' src="https://www.coffeeforlife.co.uk/wp-content/uploads/2019/03/Customer-Logo-Row-2-of-2.jpg" alt="" />

        </div>
    )
}

export default Customer
