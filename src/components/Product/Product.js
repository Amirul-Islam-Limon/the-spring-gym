import React from 'react';
import './Product.css'

const Product = ({product, handleAddToList}) => {
    return (
        <div className='product'>
            <div className='product-img text-center pb-4'>
                <img src={product.picture} alt="" />
            </div>
            <h4>{product.name}</h4>
            <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas neque animi incidunt consequuntur? Ullam repudiandae quam corrupti iusto dolore.</small></p>
            <p>Time required: {product.time} minutes</p>
            <button onClick={()=>handleAddToList(product.time)} className='btn btn-success'>Add To List</button>
        </div>
    );
};

export default Product;