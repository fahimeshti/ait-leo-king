import React from 'react';
import  './Subscriber.css';


const Subscribers = () => {
    return (
        <div className="Subscibers-bg">
        
            <div class="grid grid-rows-3 grid-flow-col gap-4 m-auto">
                <div class="row-span-3 ... sm:w-0"></div>
                <div class="xl:col-span-2 ...">
                    
                </div>
                <div class="row-span-2 col-span-2 px-10 xl:px-40 m-auto flex items-center flex-col">
                    <div className="details">
                        <h3 class="text-2xl text-neutral-700 my-5 text-center ">SIGN UP FOR OUR NEWSLETTER</h3>
                        <p class="text-sm  my-5 text-center text-neutral-700">To get news about <span class="font-bold not-italic	 text-neutral-700	">NEW ARRIVALS, PROMOTION</span> and many more...</p>
                    </div>

                    <div className="email" class="w-full flex justify-end">
                        <input type="email" name="email" class="relative w-full mt-1 pl-5 sm:pr-20 pr-20 py-3.5  rounded-full  bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm text-slate-500 focus:ring-1" placeholder="Enter Your Email..." />
                        <button className="Subscriber" class="absolute pl-5 mt-4 text-slate-400 mr-5 border-l-4">Subscriber</button>
                    </div>
                </div>
            </div>
                
                
                
                   
                  
            
           
          
          
        </div>
    );
};

export default Subscribers;