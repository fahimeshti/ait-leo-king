import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css'

const Gallery = ({ gallery }) => {
    const { image, title } = gallery
    return (
        <div className='m-3 hover:opacity-75 duration-100'>

            <a href="#/">
                <div className='gallery '>
                    <img src={image} alt="" />
                    <h5 className='title-area'>{title}</h5>
                </div>
            </a>

        </div>
    );
};

export default Gallery;