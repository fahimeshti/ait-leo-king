import React from 'react';

const ProductMapData = (props) => {
    const {img, model} = props.item;
    return (
        <div className='text-center text-gray-500 border'>
            <img src={img} alt="product img" className='h-40 w-full' />
            <p className='py-2'>{model}</p>
        </div>
    );
};

export default ProductMapData;