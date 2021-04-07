import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Cart = () => {
    const {foodId} = useParams();
    // const { cartItems, handleAddCart } = props;
    // console.log(cartItems);
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);

    useEffect(() => {
        fetch(`http://localhost:4242/breakfastFood/${foodId}`)
        .then(res => res.json())
        .then(data => {
            setCartItems(data);
            console.log(data);
        })
    }, [foodId]);

    useEffect(() => {
        fetch(`http://localhost:4242/dinnerFood/${foodId}`)
        .then(res => res.json())
        .then(data => {
            setCartItems(data);
            console.log(data);
        })        
    }, [foodId]);
    
    useEffect(() => {
        fetch(`http://localhost:4242/lunchFood/${foodId}`)
        .then(res => res.json())
        .then(data => {
            setCartItems(data);
            console.log(data);
        })        
    }, [foodId]);

    return (
        <div className="row">
            <div className="col-md-8">
                {/* <h5>{cartItems.length}</h5> */}
                <div className="d-flex">
                    <div>
                        <img style={{width: '200px'}} className="img-fluid"src={cartItems.foodImg} alt=""/>
                    </div>
                    <div>
                        <h4>{cartItems.foodName}</h4>
                        <h4>{cartItems.price}</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <h3>Cart Items</h3>
            <h5>{cartItems.length}</h5>
            {/* <div>{cartItems.length == 0 && <div><h4>Cart is empty</h4></div>}</div> */}
            </div>
        </div>
    );
};

export default Cart;