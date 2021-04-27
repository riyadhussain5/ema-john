import React from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductInfo = () => {
    const {productKey} = useParams()
     const product = fakeData.find(pd=> pd.key === productKey);

    return (
        <div>
            <p> 
                {productKey}Product Info Coming soon</p>
                <Product HandleClick = {false} product = {product}></Product>
        </div>
    );
};

export default ProductInfo;