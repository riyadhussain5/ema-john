import React from 'react';

const ReviewItem = (props) => {

    const {name,quantity,img} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid gray',
        marginBottom: '10px',
        paddingBottom: '10px',
        marginLeft: '50px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
           
           <h4 className='product-name'>{name}</h4>
           <h5> QUANTITY : {quantity}</h5>
           <br/>
           <img src={img}/>
           <br/>
           <button className='button'>Remove me</button>



        </div>
    );
};

export default ReviewItem;