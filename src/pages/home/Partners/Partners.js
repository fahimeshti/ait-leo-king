import React from 'react';
import './Partners.css';
import photo from '../../../assets/Photo/1.png';
import photo1 from '../../../assets/Photo/2.png';
import photo2 from '../../../assets/Photo/3.png';
import photo3 from '../../../assets/Photo/4.png';


const Partners = () => {
   
    return (
        <div>
            
            <div className="partnere" class="xl:mx-40 lg:mx-30 md:mx-20 mx-10 mb-10 mt-5">
                <h2 class="text-2xl font-semibold mb-5 text-slate-600">OUR GLOBAL PARTNERS</h2>
                <div class="m-auto">
                    <div class="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-6 gap-6">
                        <div class="flex justify-center image"><img src={photo} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo1} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo2} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo3} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo2} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo1} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo3} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo1} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo3} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo2} alt="" srcset="" /></div>
                        <div class="flex justify-center image"><img src={photo3} alt="" srcset="" /></div>
                        

                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Partners;