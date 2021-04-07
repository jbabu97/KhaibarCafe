import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Lunch = () => {

    const [lunch, setLunch] = React.useState([]);
    console.log(lunch);

    React.useEffect(() => {
        fetch('http://localhost:4242/lunchFoods')
        .then(res => res.json())
        .then(data => {
            setLunch(data);
            console.log(data);
        })
    }, [])

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="row">
                    {
                        lunch.map(ln => (
                            <div key={ln._id} className="col-md-4">
                                <div>
                                <Link to={`/foodDetails/${ln._id}`}><img className="img-fluid" src={ln.foodImg} alt={ln.foodName}/></Link>
                                    <h5>{ln.foodName}</h5>
                                    <h5>Price: $ {ln.price} <Link to={`/cart/${ln._id}`}><button className="btn btn-success ml-auto">Add to Cart</button></Link></h5>
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

export default Lunch;