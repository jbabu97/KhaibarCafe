import React, { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Cart from '../Cart/Cart';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <div className="row">
            <div className="col-md-8">
                <Breakfast></Breakfast>
            </div>
            <div className="col-md-4">
                <Cart cartItems={cartItems}></Cart>
            </div>
        </div>
    );
};

export default Home;