import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart';

const Breakfast = () => {

    const [breakfast, setBreakfast] = useState([]);
    console.log(breakfast);
    // const [cartItems, setCartItems] = useState([]);
    // console.log(cartItems);

    const handleAddCart = (food) => {
        // const exist = cartItems.find(item => item.id == food._id)
        // if (exist) {
        //     setCartItems(
        //         cartItems.map(item => 
        //             item.id == food._id ? {...exist, qty: exist.qty + 1} : item
        //             )
        //     )
        // } else {
        //     setCartItems([...cartItems, { ...food, qty: 1 }])
        // }
    }

    useEffect(() => {
        fetch('http://localhost:4242/breakfastFoods')
        .then(res => res.json())
        .then(data => {
            setBreakfast(data);
        })
    }, []);

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row">
                    {
                        breakfast.map(bf => (                        
                                <div key={bf._id} className="col-md-4">
                                <div>
                                <Link to={`/foodDetails/${bf._id}`}><img className="img-fluid" src={bf.foodImg} alt={bf.foodName}/></Link>
                                    <h5>{bf.foodName}</h5>
                                    <h5>Price: $ {bf.price} <Link to={`/cart/${bf._id}`}><button handleAddCart={handleAddCart} className="btn btn-success ml-auto">Add to Cart</button></Link></h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </div>
    );
};

export default Breakfast;