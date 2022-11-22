import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import Card from './Card.';
// import image
import f1 from '../.././../../assets/Photo/viber_image_2020-05-09_16-47-33.jpg';
import f2 from '../../../../assets/Photo/chandeliers01.jpg';
import f3 from '../../../../assets/Photo/bedroomset01.jpg';
import f4 from '../../../../assets/Photo/viber_image_2020-05-09_16-47-33.jpg';
import f5 from '../../../../assets/Photo/vinylFloor01.jpg';
import f6 from '../../../../assets/Photo/wallpaper01.jpg';
import f7 from '../../../../assets/Photo/f8.jpg';
import f9 from '../../../../assets/Photo/f9.jpg';

const ProductSlider = () => {
    return (
     <div>
         <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            
            breakpoints={{
                0:{
                 slidesPerView:1,
                 spaceBetween:10,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }}
         >
                <div class="grid grid-rows grid-flow-col-2 gap-5 ">
                <SwiperSlide>
                        <div><Card data={{ img: f1, title: "Vinyl (PVC) Floor Tiles"}}/></div>
                        <div><Card data={{ img: f2, title: "Title Entry" }} /></div>
                </SwiperSlide>
                    <SwiperSlide>
                        <div><Card data={{ img: f3, title: "Title Entry" }} /></div>
                        <div><Card data={{ img: f4, title: "Title Entry" }} /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Card data={{ img: f5, title: "Title Entry" }} /></div>
                        <div><Card data={{ img: f6, title: "Title Entry" }} /></div>
                    </SwiperSlide><SwiperSlide>
                        <div><Card data={{ img: f7, title: "Title Entry" }} /></div>
                        <div><Card data={{ img: f3, title: "Title Entry" }} /></div>
                    </SwiperSlide><SwiperSlide>
                        <div><Card data={{ img: f4, title: "Title Entry" }} /></div>
                        <div><Card data={{ img: f9, title: "Title Entry" }} /></div>
                    </SwiperSlide><SwiperSlide>
                        <div><Card data={{ img: f1, title: "Title Entry" }} /></div>
                        <div><Card data={{ img: f2, title: "Title Entry" }} /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><Card data={{ img: f4, title: "Title Entry" }} /></div>
                        <div><Card data={{ img: f5, title: "Title Entry" }} /></div>
                    </SwiperSlide><SwiperSlide>
                        <div><Card data={{ img: f6, title: "Title Entry" }} /></div>
                        <div><Card data={{ img: f7, title: "Title Entry" }} /></div>
                    </SwiperSlide>
                    
            </div>
                
         </Swiper>
     </div>
    );
};

export default ProductSlider;