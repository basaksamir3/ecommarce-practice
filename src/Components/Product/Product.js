import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props)
    const { img, name, stock, price,seller,category } = props.product;
    return (
        <div className="product-contaier">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h1>{name}</h1>
                <p>$ <b>{price}</b></p>
                <p><small>Our <b>{stock}</b> product is available</small></p>
                <p><b>Category: {category}</b></p>
                <p>Seller: {seller}</p>
                <button className = "shopping-btn"><FontAwesomeIcon icon={faShoppingCart} /> Shop Now</button>
            </div>



        </div>
    );
};

export default Product;