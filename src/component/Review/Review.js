import React from 'react';
import {useEffect,useState} from 'react';
import {getDatabaseCart, removeFromDatabaseCart,processOrder} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import IMage from '../../images/giphy.gif';

const Review = () => {
    const[cart,setCart] = useState([]);
    const HandleRemove = (productKey) => {
        console.log ('removed', productKey)
        const newCart = cart.filter(pd=> pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
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
    const [orderPlace,setOrderPlace] = useState(false);
 const PlaceOrder = () =>{
    setCart([]);
    setOrderPlace(true);
    processOrder();
 }
let Thankyou;
if(orderPlace){
    Thankyou = <img src={IMage}/>
}

    return (

<div className="shop-container">


           <div className="product-container">
           
                { 
                cart.map(pd => <ReviewItem HandleRemove={HandleRemove} key={pd.key} product={pd}></ReviewItem>)
            } 
            {Thankyou} 
            </div>
            
            <div className="cart-container">
                
                   <Cart cart={cart}><button onClick={PlaceOrder} className='button'>Place Order</button></Cart>
            </div>
            </div>

    );
};

export default Review;