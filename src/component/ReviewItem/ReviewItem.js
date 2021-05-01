import React from 'react';

const ReviewItem = (props) => {

    const {name,img, key,price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '10px',
        paddingBottom: '10px',
        marginLeft: '50px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
           
           <h4 className='product-name'>{name}</h4>
           
           <br/>
           <img src={img}/>
           <br/>
           <small>Price : <b>{price} </b>  </small><br/>
           <button onClick={()=>props.HandleRemove(key)} className='button'>Remove me</button>



        </div>
    );
};

export default ReviewItem;