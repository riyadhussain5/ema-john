import React from 'react';
import {useEffect,useState} from 'react';
import {getDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
const Review = () => {
    const[cart,setCart] = useState([]);
    useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const count = productKeys.map (key=> {
        const product = fakeData.find(pd=> pd.key === key);
        product.quantity = savedCart[key];
        return product;
    });
    
    setCart(count)
    },[])
    return (
        <div>
            <h1>Cart Items : {cart.length}</h1>
            <h3>This Is Review</h3>
            {
                cart.map(pd => <ReviewItem key={pd.key} product={pd}></ReviewItem>)
            }
        </div>
    );
};

export default Review;