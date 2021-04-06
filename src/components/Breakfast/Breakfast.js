import React, { useEffect, useState } from 'react';

const Breakfast = () => {

    const [breakfast, setBreakfast] = useState([]);
    console.log(breakfast);

    useEffect(() => {
        fetch('http://localhost:4242/breakfastFoods')
        .then(res => res.json())
        .then(data => {
            setBreakfast(data);
        })
    }, [])

    return (
        <div className="row">
                {
                    breakfast.map(bf => (
                        <div className="col-md-4">
                            <div>
                                <img className="img-fluid" src={bf.foodImg} alt={bf.foodName}/>
                                <h4>{bf.foodName}</h4>
                                <h3>Price: $ {bf.price} <span><button className="btn btn-success ml-auto">Add to Cart</button></span></h3>
                            </div>
                        </div>
                    ))
                }
            </div>
    );
};

export default Breakfast;