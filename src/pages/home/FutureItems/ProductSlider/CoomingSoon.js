import React from 'react';
import { Link } from 'react-router-dom';

const coomingSoon = () => {
    return (
        <div className="lg:mx-40 md:mx-20">
            <Link to="/#">Back</Link>
           
            <div class="border border-blue-300 shadow rounded-md p-4 min-w-min w-full h-3/4	 mx-auto">
            
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-slate-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div class="">
                                <span class="flex justify-center items-center h-52">
                                    <span class="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-sky-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
                                </span>
                            </div>
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default coomingSoon;