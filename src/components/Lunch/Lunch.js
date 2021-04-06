import React from 'react';

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
            {
                lunch.map(ln => (
                    <div className="col-md-4">
                        <div>
                            <img className="img-fluid" src={ln.foodImg} alt={ln.foodName}/>
                            <h4>{ln.foodName}</h4>
                            <h3>Price: $ {ln.price} <span><button className="btn btn-success ml-auto">Add to Cart</button></span></h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Lunch;