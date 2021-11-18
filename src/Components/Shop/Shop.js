import React from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first12 = fakeData.slice(0,12);
    // console.log(first12);
    return (
        <div>
                {
                    first12.map(pd => <Product product={pd}></Product>)
                }
            
        </div>
    );
};

export default Shop;