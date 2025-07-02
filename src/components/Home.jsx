import React from 'react';

const Home = () => {
    return (
        <div className="w-full">

            <img
                className="md:hidden w-full"
                src="https://www.coffeeforlife.co.uk/wp-content/uploads/2023/09/mob-hero.jpg"
                alt="Mobile Hero"
            />

            <div className="hidden md:flex md:px-24  h-screen ">

                <div className="w-1/2 flex flex-col py-20 items-start  text-white">
                    <h1 className="text-5xl font-bold leading-tight ">
                        REVOLUTIONARY COMMERCIAL <br />
                        COFFEE MACHINES
                    </h1>
                    <p className="text-2xl text-blue-400">
                        COFFEE YOUR WAY AT THE TOUCH OF A BUTTON
                    </p>
                </div>


                <div className="w-1/2 flex justify-center  items-center">
                    <img
                        className=" "
                        src="https://www.coffeeforlife.co.uk/wp-content/uploads/2023/09/coffee-machines.png"
                        alt="Coffee Machines"
                    />
                </div>
            </div>

            <div className="h-10 bg-blue-400 w-full" />
        </div>
    );
};

export default Home;
