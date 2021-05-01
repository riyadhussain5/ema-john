import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {useEffect} from 'react';
import './Shop.css';
import {addToDatabaseCart,getDatabaseCart,} from '../../utilities/databaseManager';





const Shop = () => {
    const firstTen = fakeData.slice(0,10);

    const [products,setProducts] = useState(firstTen)
    const[cart,setCart]=useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const PreviousCart = productKeys.map (existingKeys=>{
            const product = fakeData.find(pd=> pd.key === existingKeys)
            product.quantity = savedCart[existingKeys];
            return product;
        }) 
        setCart(PreviousCart);
    },[])

    let count = 1;
    let newCart;
    const handleAddProduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        if(sameProduct){
            const count = sameProduct.quantity + 1 ;
            sameProduct.quantity = count;
            const others = cart.filter(pd=> pd.key  !== product.key)
            newCart = [...others,sameProduct]
        }
       else{
           product.quantity = 1;
           newCart = [...cart,product]
       }
        
        setCart(newCart);
       
        addToDatabaseCart(product.key,count);
       
    }

    return (
        <div className="shop-container">
           <div className="product-container">
           
                {
                    products.map (pd => <Product key={pd.key} HandleClick = {true} handleAddProduct={handleAddProduct}   product = {pd}></Product>)
                }
            
            </div>
            <div className="cart-container">
                   <Cart cart={cart}   ></Cart>
                   <Link to="/review">
           <button  className='button'>Review Cart</button>
           </Link>
            </div>

          
           
        </div>
    );
};

export default Shop;

