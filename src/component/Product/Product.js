import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //console.log(props)
    const{name,img,seller,stock,price,key} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img}/>
                </div>
            <div >
                <h1 className='product-name'> <Link to={"/"+key}>{name}</Link></h1>
               <br/>
               <p><small>by : {seller}</small></p><br/>

               <p>${price}</p>
               <br/>
               <p><small>Only {stock} left in the stock- order soon</small></p>
               <br/>

              {props.HandleClick === true && <button className='button' onClick={()=>props.handleAddProduct(props.product) }   >  <FontAwesomeIcon icon={faShoppingCart} />  Add me  
              </button>}



                </div>
            
        </div>
    );
};

export default Product;