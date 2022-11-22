import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {img, title} = props.data;
    return (
        <div class="">
            <div class="mb-7 ">
                <div class="shadow hover:bg-zinc-800 duration-500 hover:text-white cursor-pointer">
                    <Link  to="/coomingsoon" className=''>
                        <img src={img} alt="" srcset="" />
                       <h4 class="pl-4 py-3 text-rr  uppercase  hover:text-sky-400 inline-block">{title}</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;