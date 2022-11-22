import React from 'react';
import './Footer.css';
import sister from '../../../assets/Photo/sister.jpg';
import brand1 from '../../../assets/Photo/leospremium.png';
import brand2 from '../../../assets/Photo/summer-blooms.png';
import fb from '../../../assets/Photo/fb1.png';
import pint from '../../../assets/Photo/pint1.png';
import gg from '../../../assets/Photo/googleplus1.png';
import yu from '../../../assets/Photo/yt1.png';



const AboutUs = () => {
    return (
        <div className="aboutus">
            <div class="xl:mx-40">
                <div class="grid xl:grid-cols-4 grid-cols-1 gap-4 py-14">
                    <div class=" col-span-1">
                        <h3 class="pb-8 text-xl font-sans">Our Sister Concern</h3>
                        <img class="w-32 " src={sister} alt="" srcset="" />
                        </div>
                    <div class="">
                        <h3 class="pb-8 text-xl">Our Brands</h3>
                        <div class="flex justify-center">
                            <img class="w-32 h-20" src={brand1} alt="" srcset="" />
                            <img class="w-32 h-20" src={brand2} alt="" srcset="" />
                        </div>
                    </div>
                    <div class="">
                        <h3 class="pb-8 text-xl">Follow us on</h3>
                        <div class="flex sm:justify-center">
                            <img class=" fb  link" src={fb} alt="" srcset="" />
                            <img class=" pint link" src={pint} alt="" srcset="" />
                            <img class=" gg link" src={gg} alt="" srcset="" />
                            <img class=" yu link" src={yu} alt="" srcset="" />
                        </div>
                        
                    </div>
                    <div class="">
                        <h3 class="pb-8 text-xl">Contacts</h3>
                        <p class="text-zinc-500">Leo King International</p>
                        <p class="text-zinc-500 text-sm">GP-TA-47, ATC Tower, Amtoli, Mohakhali, Dhaka-1213, Bangladesh. <br/>
                            Phone: 01716103114 <small>(What's App)</small>
                            E-mail: ineriorzonebd@gmail.com</p>
                       
                        </div>
                </div>

                <div class="pb-5">
                    <hr class="p-2" />
                    <small class="text-sm">Copyright © 2019 <span class="text-cyan-600 text-lg uppercase font-bold">Interior-Zone-BD</span> All Rights Reserved.</small>
                </div>   
                
            </div>
        </div>
    );
};

export default AboutUs;