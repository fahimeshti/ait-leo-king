import React from 'react';
import './FutureItems.css';
import gift from '../../../assets/Photo/gift.png';
import power from '../../../assets/Photo/power.png';
import sent from '../../../assets/Photo/send.png';
import set from '../../../assets/Photo/set.png';

import ProductSlider from './ProductSlider/ProductSlider';

const FutureItems = () => {

    return (
        <div>
            <div class="xl:mx-40 md:mx-16 mx-1 py-31">
                <div class="grid grid-cols-4 relative mb-6 lg:mb-20 offerDiv invisible lg:visible">
                    <div class=" xl:py-12 md:py-6 px-1 py-2 shadow-md lg:flex justify-center  items-center text-sky-500 offer ">
                        <div class="icon pl-10 lg:px-2"><img src={gift} alt="" srcset="" /></div>
                        <div class="font1 ">MORE THAN 5000 <br />
                            DECORATIVE PRODUCTS</div>
                    </div>
                    <div class=" xl:py-12 px-1 py-2 shadow-md lg:flex   justify-center items-center text-sky-500 offer ">
                        <div class="icon pl-10 lg:px-2"><img src={sent} alt="" srcset="" /></div>
                        <div class="font1 ">MORE THAN 20 WORLD
                            <br />
                            CLASS BRAND</div>
                    </div>
                    <div class=" xl:py-12 px-1 py-2 shadow-md  lg:flex items-center text-sky-500 offer md:px-2 xl:px-10">
                        <div class="icon  pl-10 px-0 lg:px-2"><img src={set} alt="" srcset="" /></div>
                        <div class="font1 md:flex-col">ONE STOP BRAND GALLERY
                        <br />
                            OVER 20,000 SFT.</div>
                    </div>
                    <div class=" xl:py-12 px-1 py-2 shadow-md  lg:flex items-center text-sky-500 offer md:px-0 xl:px-10">
                        <div class="icon pl-10 lg:px-2"><img src={power} alt="" srcset="" /></div>
                        <div class="font1 md:flex-col">WE ARE OPEN
                        <br />
                            7 DAYS.</div>
                    </div>            
                </div>
            </div>

                <div>

                <div class="xl:mx-40 mx-10 pb-20">
                    <div class="lg:my-14 my-14"><h2 class="uppercase border-2 inline-block lg:text-xl text-sm  leading-8 border-neutral-500 text-slate-600 px-3">FEATURED Items</h2></div>

                    <ProductSlider/>

                  
                    </div>
                  

            </div>
        </div>
    );
};

export default FutureItems;