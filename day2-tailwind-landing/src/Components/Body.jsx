import React from 'react';

const Body = () => {
    return (
        <div className='space-y-4 lg:flex'>
            <div className='flex items-center justify-center lg:flex-1 lg:h-[400px] lg:order-2 lg:justify-end'>
                <img src='./assets/Blue-Shape.svg' className='-rotate-45 h-64 md:h-72 lg:h-[400px]'></img>
                <img src='./assets/Pink-Shape.svg' className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'></img>
                <img src='./assets/Purple-Shape.svg' className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'></img>
                <img src='./assets/Hero-Model.png' className='absolute h-64'></img>
            </div>
            <div className='lg:flex-1 lg:order-1'>
                <h1 className='text-5xl font-bold font-playfair leading-tight' style={{ fontFamily: 'Playfair Display, serif' }}>Host your website in less than 5 minutes</h1>
                <p className='font-lato text-gray-400' style={{ fontFamily: 'Lato, sans-serif' }}>With Hoster, get your website up and running in no less than 5 minutes with the most competitve pricing packages available online</p>
                <form action="" className='flex flex-col gap-4 md:flex-row mt-4'>
                    <input className='rounded-md px-4 py-3 placeholder:text-gray-400 bg-white' type="email" placeholder='Enter your email address' />
                    <button className='rounded-md px-4 py-4 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
                </form>
                <div className='flex gap-2 mt-4'>
                    <img src='./assets/Checkmark.svg' />
                    <p className='font-lato text-gray-400' style={{ fontFamily: 'Lato, sans-serif' }}  >No spam, ever. Unsubscribe anytime</p>
                </div>
            </div>

        </div>
    )
}
export default Body