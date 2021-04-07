import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div key={dnr._id} className="col-md-4">
                        <div>
                        <Link to={`/foodDetails/${dnr._id}`}><img className="img-fluid" src={dnr.foodImg} alt={dnr.foodName}/></Link>
                            <h5>{dnr.foodName}</h5>
                            <h5>Price: $ {dnr.price} <Link to={`/cart/${dnr._id}`}><button className="btn btn-success ml-auto">Add to Cart</button></Link></h5>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Dinner;