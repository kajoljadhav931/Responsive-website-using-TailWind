import React from 'react'

const Plan = () => {
    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/*Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80" alt="" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80" alt="" />

            </div>
            {/*Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Exploring exotic places doesn’t have to cost a fortune and you certainly don’t need to win the lottery to travel the world – not if you know how to watch your pennies.
                    We’ve complied some tried and tested tips to help you plan a holiday on a budget.</p>
                <p className='pb-6'>Travelling spontaneously is great, if you have the luxury of time and money to spare. But if you’re travelling on a budget,
                    the first thing to do is come up with a plan. You don’t have need a tight, hour-by-hour itinerary, but you should at least
                    have an idea of how long you’ll be spending in each city or country, and know the route that your epic adventure will take.
                </p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
                </div>
            </div>
        </div>
    )
}

export default Plan
