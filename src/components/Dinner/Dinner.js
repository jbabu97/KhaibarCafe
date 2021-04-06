import React from 'react';

const Dinner = () => {
    const [dinner, setDinner] = React.useState([]);
    console.log(dinner);

    React.useEffect(() => {
        fetch('http://localhost:4242/dinnerFoods')
        .then(res => res.json())
        .then(data => {
            setDinner(data);
            console.log(data);
        })
    }, [])

    return (
        <div className="row">
            {
                dinner.map(dnr => (
                    <div className="col-md-4">
                        <div>
                            <img className="img-fluid" src={dnr.foodImg} alt={dnr.foodName}/>
                            <h4>{dnr.foodName}</h4>
                            <h3>Price: $ {dnr.price} <span><button className="btn btn-success ml-auto">Add to Cart</button></span></h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Dinner;