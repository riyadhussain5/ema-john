import React from 'react';


const Cart = (props) => {
 const cart = props.cart;

let total = 0;

for(let i = 0; i< cart.length; i++){
    const product = cart[i]
    total = total + product.price* product.quantity;
}


//  const Total = cart.reduce((total,product)=> total+product.price, 0)
//  const total = Total *product.quantity;
 let shipping = 0;
 if(total>30){
     shipping=0;
 }
 else if (total>15){
     shipping=4.99;
 }
 else if( total > 0){
     shipping = 12.99;
 }
 const tax =  (total/10).toFixed(2);

 const grandTotal = (total + shipping + Number(tax)).toFixed(2)
 const NumberError = num =>{
     const precision = num.toFixed(2);
     return Number(precision)
 }

    return (
        <div>
           <h1> <b>This is Cart</b></h1>
           <p>Items ordered : {cart.length}</p>
           <p>Product Price : {NumberError(total)}</p>
           <p>Shipping Cost:       {shipping}</p>
           <p>Tax and Vat :{tax}</p>
           <p>Total price : {grandTotal}</p>
           {
                props.children
           }
           
     
        </div>
    );
};

export default Cart;