// ProductList.jsx
import React from 'react';

const ProductList = ({ title, products }) => {
    return (
        <div className='text-white md:px-24 '>
            <h1 className='text-2xl px-3 font-semibold text-center pt-8 pb-12 uppercase tracking-widest'>
                {title}
            </h1>
            <div className='md:flex'>

                {products.map((elem) => (
                    <div className='flex flex-col justify-center items-center gap-2 mb-20 px-8 text-center' key={elem.id}>
                        <img className='h-52' src={elem.img} alt={elem.name} />
                        <h1 className='mt-4 text-lg font-semibold'>{elem.name}</h1>
                        <h1 className='text-zinc-500'>{elem.description}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
